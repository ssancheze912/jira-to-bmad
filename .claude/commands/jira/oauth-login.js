/**
 * oauth-login.js
 * Autenticacion OAuth 2.0 (3-legged) contra Atlassian / Jira
 *
 * Uso:
 *   node oauth-login.js
 *
 * - Abre el navegador con la pantalla de login de Atlassian
 * - El usuario ingresa SUS credenciales de Jira
 * - El token se guarda en tokens.json (personal de cada usuario)
 * - Expira en 60 min; el refresh token permite renovarlo sin volver a loguearse
 */

const http    = require('http');
const https   = require('https');
const { exec } = require('child_process');
const fs      = require('fs');
const crypto  = require('crypto');
const path    = require('path');

// Leer configuracion compartida
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'oauth-config.json')));

const CLIENT_ID     = config.client_id;
const CLIENT_SECRET = config.client_secret;
const REDIRECT_URI  = config.redirect_uri;
const SCOPES        = config.scopes;
const TOKENS_FILE   = path.join(__dirname, 'tokens.json');

const state = crypto.randomBytes(16).toString('hex');

const authUrl =
  'https://auth.atlassian.com/authorize' +
  '?audience=api.atlassian.com' +
  '&client_id=' + CLIENT_ID +
  '&scope=' + encodeURIComponent(SCOPES) +
  '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
  '&state=' + state +
  '&response_type=code' +
  '&prompt=consent';

function openBrowser(url) {
  exec('start "" "' + url + '"');
}

function exchangeCode(code) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      grant_type:    'authorization_code',
      client_id:     CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code:          code,
      redirect_uri:  REDIRECT_URI
    });

    const req = https.request({
      hostname: 'auth.atlassian.com',
      path:     '/oauth/token',
      method:   'POST',
      headers:  {
        'Content-Type':   'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(JSON.parse(data)));
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

const server = http.createServer(async (req, res) => {
  const url   = new URL(req.url, 'http://localhost:3000');
  const error = url.searchParams.get('error');
  const code  = url.searchParams.get('code');
  const returnedState = url.searchParams.get('state');

  if (url.pathname !== '/callback') {
    res.writeHead(404); res.end(); return;
  }

  if (error) {
    res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h2>Error: ' + error + '</h2><p>Cierra esta pestana e intenta de nuevo.</p>');
    console.error('\nError de autenticacion:', error);
    server.close(); return;
  }

  if (returnedState !== state) {
    res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h2>Error de seguridad: state invalido</h2>');
    server.close(); return;
  }

  try {
    const tokens = await exchangeCode(code);

    if (tokens.error) {
      res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h2>Error al obtener token: ' + tokens.error_description + '</h2>');
      console.error('\nError tokens:', tokens);
      server.close(); return;
    }

    tokens.obtained_at = new Date().toISOString();
    tokens.expires_at  = new Date(Date.now() + tokens.expires_in * 1000).toISOString();
    fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokens, null, 2));

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <html><body style="font-family:sans-serif;padding:40px;max-width:500px">
        <h2>Autenticacion exitosa</h2>
        <p>Token guardado en <code>tokens.json</code></p>
        <table border="1" cellpadding="8" style="border-collapse:collapse">
          <tr><td>Expira en</td><td>${Math.round(tokens.expires_in / 60)} minutos</td></tr>
          <tr><td>Refresh token</td><td>${tokens.refresh_token ? 'Si (renovacion automatica disponible)' : 'No'}</td></tr>
        </table>
        <p>Puedes cerrar esta pestana.</p>
      </body></html>
    `);

    console.log('\nAutenticacion exitosa!');
    console.log('Usuario autenticado, token guardado en tokens.json');
    console.log('Expira: ' + tokens.expires_at);

    server.close();

  } catch (e) {
    res.writeHead(500); res.end('Error interno: ' + e.message);
    server.close();
  }
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.error('\nError: el puerto 3000 ya esta en uso.');
    console.error('Cierra cualquier proceso que lo use e intenta de nuevo.');
    process.exit(1);
  }
});

server.listen(3000, () => {
  console.log('Iniciando autenticacion OAuth 2.0...');
  console.log('Abriendo navegador... inicia sesion con tu cuenta de Jira.');
  openBrowser(authUrl);
});
