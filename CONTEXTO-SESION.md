# Contexto de Sesión — Jira to BMad

> Cargar este archivo al inicio de una nueva sesión de Claude Code para continuar desde este punto.

---

## Objetivo del proyecto

Integrar Jira con BMad: leer la jerarquía de issues de Jira (Subproyecto → Feature → Epic → Story → Task → Sub-task) y transformarlos en artefactos BMad.

---

## Instancias de Jira disponibles

| Nombre             | URL                                        | Cloud ID                               |
|--------------------|--------------------------------------------|----------------------------------------|
| siesa-team         | https://siesa-team.atlassian.net           | 50a1ceab-71e1-4f5b-a7f0-d319d949efd0  |
| siesa-test-sandbox | https://siesa-test-sandbox.atlassian.net   | 3b04e1a3-a260-4679-bdc8-0440507fbe26  |

**Instancia activa para este proyecto:** `siesa-test-sandbox.atlassian.net`

---

## Autenticación

- **Usuario:** ssancheze@siesa.com
- **API Token:** guardado en variable de entorno o usar directamente en el header `--user`
- **Método:** Basic Auth (usuario:token)

```bash
--user "ssancheze@siesa.com:API_TOKEN"
```

---

## Proyecto de trabajo

| Clave  | Nombre                        | Tablero                                                                                        |
|--------|-------------------------------|-----------------------------------------------------------------------------------------------|
| `PJIB` | Prueba JIRA Integracion BMAD  | https://siesa-test-sandbox.atlassian.net/jira/software/c/projects/PJIB/boards/507             |

---

## Jerarquía de tipos de issue en PJIB

| Nivel | Tipo        | ID Jira |
|-------|-------------|---------|
| 3     | Subproyecto | 10423   |
| 2     | Feature     | 10424   |
| 1     | Epic        | 10000   |
| 0     | Story       | 10006   |
| 0     | Task        | 10050   |
| 0     | Bug         | 10052   |
| -1    | Sub-task    | 10051   |

> **Nota importante:** Los Subproyectos (nivel 3) NO son devueltos por la búsqueda JQL estándar.
> Solo aparecen en el campo `parent` de sus hijos. Para obtenerlos hay que consultarlos directamente por clave.

---

## Comandos API confirmados y funcionales

### 1. Listar proyectos
```bash
curl --request GET \
  --url "https://siesa-test-sandbox.atlassian.net/rest/api/3/project/search?maxResults=100&orderBy=name" \
  --user "ssancheze@siesa.com:API_TOKEN" \
  --header "Accept: application/json"
```

### 2. Obtener árbol de issues de un proyecto (endpoint nuevo obligatorio)
```bash
curl --request POST \
  --url "https://siesa-test-sandbox.atlassian.net/rest/api/3/search/jql" \
  --user "ssancheze@siesa.com:API_TOKEN" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "jql": "project = PJIB ORDER BY key ASC",
    "fields": ["summary", "issuetype", "parent", "subtasks", "status"],
    "maxResults": 100
  }'
```

> **IMPORTANTE:** El endpoint `/rest/api/3/search` (GET y POST) fue eliminado.
> Usar siempre `/rest/api/3/search/jql` (POST).
> El límite máximo es **100 issues por página**. Para proyectos grandes usar `nextPageToken`.

### 2b. Paginación para proyectos con más de 100 issues

El campo `nextPageToken` aparece en la respuesta cuando `isLast: false`. Usarlo así:

```bash
curl --request POST \
  --url "https://siesa-test-sandbox.atlassian.net/rest/api/3/search/jql" \
  --user "ssancheze@siesa.com:API_TOKEN" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{
    "jql": "project = PJU ORDER BY key ASC",
    "fields": ["summary", "issuetype", "parent", "subtasks", "status"],
    "maxResults": 100,
    "nextPageToken": "TOKEN_DE_PAGINA_ANTERIOR"
  }'
```

### 3. Obtener un issue específico (incluye Subproyectos)
```bash
curl --request GET \
  --url "https://siesa-test-sandbox.atlassian.net/rest/api/3/issue/PJIB-78" \
  --user "ssancheze@siesa.com:API_TOKEN" \
  --header "Accept: application/json"
```

### 4. Obtener tipos de issue de un proyecto
```bash
curl --request GET \
  --url "https://siesa-test-sandbox.atlassian.net/rest/api/3/issue/createmeta/PJIB/issuetypes" \
  --user "ssancheze@siesa.com:API_TOKEN" \
  --header "Accept: application/json"
```

---

## Repositorio GitHub

**URL:** https://github.com/ssancheze912/jira-to-bmad
**Rama principal:** `master`
**Usuario GitHub:** `ssancheze912`

Archivos excluidos del repo (`.gitignore`):
- `oauth-config.json` — credenciales OAuth reales
- `tokens.json` — access/refresh tokens personales
- `.claude/` — configuración local de Claude

---

## Archivos del proyecto

| Archivo                        | Descripción                                                                 |
|--------------------------------|-----------------------------------------------------------------------------|
| `jira-api-reference.md`        | Comandos curl documentados + lista de proyectos + árbol PJIB + filtros JQL  |
| `arboles/arbol-PJIB.md`        | Árbol proyecto PJIB — 26 issues (actualizado con Gestor comercial)          |
| `arboles/arbol-AAPERC.md`      | Árbol proyecto AAPERC — 18 issues                                           |
| `arboles/arbol-DC.md`          | Árbol proyecto DC — 1 issue                                                 |
| `arboles/arbol-DNE.md`         | Árbol proyecto DNE — 12 issues                                              |
| `arboles/arbol-EC.md`          | Árbol proyecto EC — 14 issues                                               |
| `arboles/arbol-ECF.md`         | Árbol proyecto ECF — 10 issues                                              |
| `arboles/arbol-EIC.md`         | Árbol proyecto EIC — 10 issues                                              |
| `arboles/arbol-PA.md`          | Árbol proyecto PA — 6 issues                                                |
| `arboles/arbol-PJU.md`         | Árbol proyecto PJU — 199 issues (2 páginas paginadas)                       |
| `arboles/arbol-PK.md`          | Árbol proyecto PK — 4 issues                                                |
| `arboles/arbol-PM.md`          | Árbol proyecto PM — sin issues                                              |
| `arboles/arbol-PYLM.md`        | Árbol proyecto PYLM — 45 issues                                             |
| `arboles/arbol-PZB.md`         | Árbol proyecto PZB — 9 issues                                               |
| `arboles/arbol-SCRUM.md`       | Árbol proyecto SCRUM — 1 issue                                              |
| `arboles/arbol-SIES.md`        | Árbol proyecto SIES — 10 issues                                             |
| `arboles/arbol-SSAT.md`        | Árbol proyecto SSAT — sin issues                                            |
| `oauth-login.js`               | Script de autenticación OAuth 2.0 (3-legged) — ejecutar para loguearse     |
| `oauth-config.json`            | Credenciales OAuth reales — NO subir al repo                                |
| `oauth-config.example.json`    | Plantilla de oauth-config.json sin credenciales reales                      |
| `tokens.json`                  | Tokens OAuth del usuario — NO subir al repo, personal de cada usuario       |
| `tokens.example.json`          | Plantilla de tokens.json sin valores reales                                 |
| `GUIA-OAUTH-USUARIO.md`        | Guía paso a paso para que otros usuarios se autentiquen                     |
| `CONTEXTO-SESION.md`           | Este archivo — contexto completo para retomar la sesión                     |
| `.gitignore`                   | Excluye oauth-config.json, tokens.json, .claude/                            |

---

## Estado actual del árbol PJIB (2026-02-26)

```
[Subproyecto] PJIB-78 — BmadTeam  (To Do)
└── [Feature] PJIB-79 — Siesa-Agents  (To Do)

[Subproyecto] PJIB-98 — Gestor comercial  (To Do)   ← NUEVO
├── [Feature] PJIB-99 — Gestión de clientes potenciales  (To Do)
│   └── [Epic] PJIB-105 — Epica 1  (To Do)
├── [Feature] PJIB-100 — Gestión de cuentas  (To Do)
│   ├── [Epic] PJIB-106 — Epica 2  (To Do)
│   └── [Epic] PJIB-107 — Epica 3  (To Do)
├── [Feature] PJIB-101 — Gestión de contactos  (To Do)
│   └── [Epic] PJIB-108 — Epica 4  (To Do)
├── [Feature] PJIB-102 — Gestión de oportunidades  (To Do)
│   └── [Epic] PJIB-109 — Epica 5  (To Do)
├── [Feature] PJIB-103 — Gestión de PQRS  (To Do)
└── [Feature] PJIB-104 — Gestión de cotizaciones  (To Do)

[Epic] PJIB-87 — Epic 1: Core Inventory Visibility & Dashboard  (To Do)
├── [Story] PJIB-90 — Story 1.1: Module Initialization & Shell Integration  (To Do)
│   ├── [Sub-task] PJIB-91 — 1.1 - Initialize React 18 + Vite Project  (To Do)
│   ├── [Sub-task] PJIB-92 — 1.1 - Implement Single-SPA Lifecycle Methods  (To Do)
│   ├── [Sub-task] PJIB-93 — 1.1 - Integrate Siesa UI Kit & Tailwind CSS  (To Do)
│   ├── [Sub-task] PJIB-94 — 1.1 - Handle Authentication Token  (To Do)
│   └── [Sub-task] PJIB-95 — 1.1 - Verify Directory Structure  (To Do)
└── [Story] PJIB-96 — Story 1.2: Database & Seed Data Setup  (To Do)
    └── [Sub-task] PJIB-97 — 1.2 - Initialize .NET 10 Solution & Projects in services/inventory  (To Do)

[Epic] PJIB-88 — Epic 2: Product Catalog & Discovery  (To Do)
[Epic] PJIB-89 — Epic 3: Detailed Stock Analysis  (To Do)
[Epic] PJIB-110 — Epica 6  (To Do)  ⚠️ sin padre asignado
```

---

## Proyectos disponibles en siesa-test-sandbox

| Clave     | Nombre                                             |
|-----------|----------------------------------------------------|
| `AAPERC`  | AUTERP- Automatización Pruebas ERP (Rafael Corral) |
| `DC`      | DEMO CAPA                                          |
| `DNE`     | DEMO NUEVO ESPACIO                                 |
| `ECF`     | EQUIPO CAPA FINAL                                  |
| `EC`      | Equipo capacitación                                |
| `EIC`     | Equipo incidentes controles                        |
| `SIES`    | Equipo roadmap siesa                               |
| `SCRUM`   | Mi proyecto de scrum                               |
| `PJU`     | PRACTICA-JIRA-USUARIOS                             |
| `PZB`     | Productos Zeus BackOffice                          |
| `PYLM`    | Proyecto de Pruebas - Luis Mejia                   |
| `PJIB`    | Prueba JIRA Integracion BMAD ← **activo**          |
| `PK`      | Prueba Kanban                                      |
| `PM`      | Prueba MCP                                         |
| `PA`      | Pruebas APIJIRA                                    |
| `SSAT`    | SIESA-SPACE-ACV-TEST                               |

---

## Preferencias del usuario

- No crear scripts para procesar datos — escribir el resultado directamente en archivos `.md`
- Cuando se pide un árbol de un proyecto: consultar la API y escribir el árbol en un archivo `.md` nuevo
- El archivo de árbol debe tener: árbol visual con `├──`/`└──`, tabla de detalle, y notas sobre limitaciones de la API

---

## Campos a exportar por tipo de issue

### Subproyecto (Nivel 3)
| Campo | API field |
|-------|-----------|
| Clave | `key` |
| Título | `summary` |
| Descripción | `description` |
| Estado | `status.name` |
| Prioridad | `priority.name` |
| Responsable | `assignee.displayName` |
| Creado por | `reporter.displayName` |
| Fecha creación | `created` |
| Hijos (Features) | `subtasks` / relación padre-hijo |

### Feature (Nivel 2)
| Campo | API field |
|-------|-----------|
| Clave | `key` |
| Título | `summary` |
| Descripción | `description` |
| Estado | `status.name` |
| Prioridad | `priority.name` |
| Responsable | `assignee.displayName` |
| Creado por | `reporter.displayName` |
| Fecha creación | `created` |
| Padre (Subproyecto) | `parent.key` |
| Fecha inicio objetivo | `customfield_10022` |
| Fecha fin objetivo | `customfield_10023` |

### Epic (Nivel 1)
| Campo | API field |
|-------|-----------|
| Clave | `key` |
| Título | `summary` |
| Descripción | `description` |
| Estado | `status.name` |
| Prioridad | `priority.name` |
| Responsable | `assignee.displayName` |
| Reportado por | `reporter.displayName` |
| Padre (Feature) | `parent.key` |
| Fecha creación | `created` |
| Última actualización | `updated` |
| Fecha inicio objetivo | `customfield_10022` |
| Fecha fin objetivo | `customfield_10023` |
| Etiquetas | `labels` |

### Story / Task / Bug (Nivel 0)
| Campo | API field |
|-------|-----------|
| Clave | `key` |
| Título | `summary` |
| Descripción completa | `description` (ADF → texto plano) |
| Estado | `status.name` |
| Prioridad | `priority.name` |
| Asignado a | `assignee.displayName` |
| Reportado por | `reporter.displayName` |
| Padre (Epic) | `parent.key` |
| Sprint | `customfield_10020.name` |
| Story Points | `customfield_10070` |
| Estimación | `customfield_10016` |
| Fecha vencimiento | `duedate` |
| Fecha inicio objetivo | `customfield_10022` |
| Fecha fin objetivo | `customfield_10023` |
| Etiquetas | `labels` |
| Componentes | `components[].name` |
| Issues vinculados | `issuelinks` |
| Comentarios | `comment.comments[].body` |
| Fecha creación | `created` |
| Última actualización | `updated` |

### Sub-task (Nivel -1)
| Campo | API field |
|-------|-----------|
| Clave | `key` |
| Título | `summary` |
| Descripción | `description` |
| Estado | `status.name` |
| Prioridad | `priority.name` |
| Asignado a | `assignee.displayName` |
| Padre (Story/Task) | `parent.key` |
| Sprint | `customfield_10020.name` |
| Story Points | `customfield_10070` |
| Comentarios | `comment.comments[].body` |
| Fecha creación | `created` |
| Última actualización | `updated` |

> **Nota:** La descripción viene en formato ADF (Atlassian Document Format).
> Se debe convertir a texto plano o Markdown extrayendo los nodos `text` del árbol de contenido.

---

## Autenticación OAuth 2.0

### App registrada en Atlassian Developer Console
- **Nombre app:** jira-to-bmad
- **Client ID:** `dh5IIb7q12LwM20EmZawtFF5IoKdnfyF`
- **Client Secret:** en `oauth-config.json` (no subir al repo)
- **Callback URL:** `http://localhost:3000/callback`
- **Scopes:** `read:jira-work`, `read:jira-user`, `offline_access`
- **Developer Console:** https://developer.atlassian.com/console/myapps/

### Cómo loguearse
```bash
node oauth-login.js
```
Se abre el navegador → el usuario entra con su cuenta de Jira → se guarda `tokens.json`.

### Usar el token en peticiones API (OAuth)
```bash
TOKEN=$(node -e "const t=require('./tokens.json'); console.log(t.access_token);")

curl --request POST \
  --url "https://api.atlassian.com/ex/jira/3b04e1a3-a260-4679-bdc8-0440507fbe26/rest/api/3/search/jql" \
  --header "Authorization: Bearer $TOKEN" \
  --header "Accept: application/json" \
  --header "Content-Type: application/json" \
  --data '{"jql":"project=PJIB ORDER BY key ASC","fields":["summary","issuetype","parent","status"],"maxResults":100}'
```

> **Diferencias con Basic Auth:**
> - URL base: `https://api.atlassian.com/ex/jira/{cloudId}/rest/api/3/...`
> - Header: `Authorization: Bearer TOKEN` (en lugar de `--user usuario:token`)
> - El token expira en **60 minutos** — volver a correr `node oauth-login.js` para renovar

### Para compartir con otros usuarios
Compartir solo: `oauth-login.js` + `oauth-config.json`
Cada usuario corre `node oauth-login.js` y obtiene su propio `tokens.json`.
Ver guía completa en `GUIA-OAUTH-USUARIO.md`.

---

## Próximos pasos pendientes

- [x] Generar árboles de los 16 proyectos del sandbox en carpeta `arboles/`
- [x] Confirmar paginación con `nextPageToken` para proyectos con más de 100 issues (ej: PJU con 199)
- [x] Definir campos a exportar por tipo de issue
- [x] Implementar autenticación OAuth 2.0 (3-legged)
- [x] Crear repositorio GitHub y subir el proyecto
- [ ] Definir el formato BMad de salida para cada tipo de issue
- [ ] Implementar la transformación Jira → BMad
