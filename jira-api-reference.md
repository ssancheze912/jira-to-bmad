# Referencia de Consultas Jira API

**Instancia:** `siesa-test-sandbox.atlassian.net`
**Autenticación:** Basic Auth — `usuario:api_token` codificado en Base64

---

## 1. Listar todos los proyectos / áreas

```bash
curl --request GET \
  --url "https://siesa-test-sandbox.atlassian.net/rest/api/3/project/search?maxResults=100&orderBy=name" \
  --user "ssancheze@siesa.com:API_TOKEN" \
  --header "Accept: application/json"
```

### Proyectos disponibles (siesa-test-sandbox)

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
| `PJIB`    | Prueba JIRA Integracion BMAD                       |
| `PK`      | Prueba Kanban                                      |
| `PM`      | Prueba MCP                                         |
| `PA`      | Pruebas APIJIRA                                    |
| `SSAT`    | SIESA-SPACE-ACV-TEST                               |

---

## 2. Consultar árbol jerárquico de un proyecto

La jerarquía de tipos en Jira va del nivel más alto al más bajo:

| Nivel | Tipo          | Descripción                          |
|-------|---------------|--------------------------------------|
| `3`   | Subproyecto   | Agrupador de máximo nivel            |
| `2`   | Feature       | Funcionalidad grande                 |
| `1`   | Epic          | Épica                                |
| `0`   | Story / Task / Bug | Historia, tarea o bug           |
| `-1`  | Sub-task      | Subtarea, nivel más bajo             |

### Comando para obtener todos los issues con relación padre-hijo

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

> **Nota:** Cambiar `PJIB` por la clave del proyecto deseado.
> Para paginar usar `"startAt": 100` en el cuerpo si hay más de 100 issues.

### Campos clave en la respuesta

```
issues[].key                        → clave del issue (ej: PJIB-87)
issues[].fields.summary             → título
issues[].fields.issuetype.name      → tipo (Epic, Story, Sub-task, etc.)
issues[].fields.issuetype.hierarchyLevel → nivel jerárquico (-1 a 3)
issues[].fields.parent.key          → clave del issue padre
issues[].fields.status.name         → estado (To Do, In Progress, Done, etc.)
```

---

## 3. Árbol jerárquico actual — Proyecto PJIB

**Proyecto:** Prueba JIRA Integracion BMAD (`PJIB`)
**Fecha de consulta:** 2026-02-26

```
[Subproyecto] PJIB-78 — BmadTeam (To Do)
  └── [Feature] PJIB-79 — Siesa-Agents (To Do)

[Epic] PJIB-87 — Epic 1: Core Inventory Visibility & Dashboard (To Do)
  ├── [Story] PJIB-90 — Story 1.1: Module Initialization & Shell Integration (To Do)
  │     ├── [Sub-task] PJIB-91 — 1.1 - Initialize React 18 + Vite Project (To Do)
  │     ├── [Sub-task] PJIB-92 — 1.1 - Implement Single-SPA Lifecycle Methods (To Do)
  │     ├── [Sub-task] PJIB-93 — 1.1 - Integrate Siesa UI Kit & Tailwind CSS (To Do)
  │     ├── [Sub-task] PJIB-94 — 1.1 - Handle Authentication Token (To Do)
  │     └── [Sub-task] PJIB-95 — 1.1 - Verify Directory Structure (To Do)
  └── [Story] PJIB-96 — Story 1.2: Database & Seed Data Setup (To Do)
        └── [Sub-task] PJIB-97 — 1.2 - Initialize .NET 10 Solution & Projects in `services/inventory` (To Do)

[Epic] PJIB-88 — Epic 2: Product Catalog & Discovery (To Do)

[Epic] PJIB-89 — Epic 3: Detailed Stock Analysis (To Do)
```

---

## 4. Filtros JQL útiles

```bash
# Solo Epicas de un proyecto
"jql": "project = PJIB AND issuetype = Epic ORDER BY key ASC"

# Solo Features y Subproyectos (niveles altos)
"jql": "project = PJIB AND issuetype in (Subproyecto, Feature) ORDER BY key ASC"

# Issues hijos de una épica específica
"jql": "project = PJIB AND parent = PJIB-87 ORDER BY key ASC"

# Issues sin padre (raíces del árbol)
"jql": "project = PJIB AND issueType not in subTaskIssueTypes() AND \"Epic Link\" is EMPTY AND parent is EMPTY ORDER BY hierarchyLevel DESC"

# Todos los issues de un tipo específico
"jql": "project = PJIB AND issuetype = Story ORDER BY key ASC"
```
