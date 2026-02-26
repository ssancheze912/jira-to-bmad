# Guía de Autenticación con Jira

Esta guía te explica cómo conectarte a Jira usando tu propia cuenta para poder usar la herramienta.

---

## Requisitos previos

- Tener **Node.js** instalado en tu computador
  - Verifica abriendo una terminal y ejecutando: `node --version`
  - Si no tienes Node.js, descárgalo en: https://nodejs.org (versión LTS)
- Tener acceso a la instancia de Jira: `siesa-test-sandbox.atlassian.net`
- Haber recibido los archivos `oauth-login.js` y `oauth-config.json`

---

## Pasos para autenticarte

### 1. Coloca los archivos en una carpeta

Asegúrate de tener estos dos archivos en la misma carpeta:

```
mi-carpeta/
├── oauth-login.js
└── oauth-config.json
```

### 2. Abre una terminal en esa carpeta

- En Windows: haz clic derecho dentro de la carpeta → **"Abrir en Terminal"**
- O abre CMD/PowerShell y navega hasta la carpeta con `cd ruta\de\tu\carpeta`

### 3. Ejecuta el comando de login

```bash
node oauth-login.js
```

### 4. Inicia sesión en el navegador

- Se abrirá automáticamente una pestaña del navegador con la pantalla de Atlassian
- Ingresa **tu usuario y contraseña de Jira** (`@siesa.com`)
- Haz clic en **"Accept"** para autorizar el acceso

### 5. Listo

Verás en el navegador el mensaje **"Autenticacion exitosa"**. Puedes cerrar esa pestaña.

En tu carpeta aparecerá un nuevo archivo llamado `tokens.json` — ese es tu token personal. **No lo compartas con nadie.**

---

## Información importante

| Detalle | Valor |
|---------|-------|
| El token dura | 60 minutos |
| Si expira | Vuelve a ejecutar `node oauth-login.js` |
| El token es personal | Cada persona tiene el suyo propio |

---

## Si algo falla

**"El puerto 3000 ya está en uso"**
Cierra cualquier aplicación que use el puerto 3000 y vuelve a ejecutar el comando.

**"El navegador no se abrió"**
Copia y pega manualmente en tu navegador la URL que aparece en la terminal.

**"No tengo acceso a Jira"**
Contacta al administrador del proyecto para que te dé acceso a `siesa-test-sandbox.atlassian.net`.

---

## ¿Tienes dudas?

Contacta a **ssancheze@siesa.com**
