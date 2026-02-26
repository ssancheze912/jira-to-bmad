# Investigación: Atlassian Rovo MCP Server para Claude Code

> Investigación detallada sobre el servidor MCP oficial de Atlassian que conecta Jira, Confluence y Compass con Claude Code y otros agentes de IA.

---

## 1. ¿Qué es el Atlassian Rovo MCP Server?

El **Atlassian Rovo MCP Server** es un servidor remoto en la nube que actúa como puente entre los productos de Atlassian Cloud (Jira, Confluence, Compass) y herramientas externas de IA como Claude Code, VS Code, GitHub Copilot, etc.

Está basado en el estándar abierto **Model Context Protocol (MCP)**, creado por Anthropic, que permite a los agentes de IA integrarse con herramientas, bases de datos y APIs externas de forma estandarizada.

- **Repositorio oficial:** [github.com/atlassian/atlassian-mcp-server](https://github.com/atlassian/atlassian-mcp-server)
- **Endpoint del servidor:** `https://mcp.atlassian.com/v1/mcp`
- **Documentación oficial:** [support.atlassian.com/atlassian-rovo-mcp-server](https://support.atlassian.com/atlassian-rovo-mcp-server/docs/getting-started-with-the-atlassian-remote-mcp-server/)

---

## 2. Capacidades y Herramientas Disponibles

El servidor expone **más de 46 herramientas** distribuidas en cinco áreas de producto. La disponibilidad exacta depende del método de autenticación y los scopes concedidos.

### 2.1 Jira

| Operación | Descripción |
|-----------|-------------|
| Buscar issues | Búsqueda con JQL o lenguaje natural |
| Crear issues | Crear tickets individuales |
| Actualizar issues | Modificar estado, asignado, prioridad, etc. |
| Importación masiva | Crear múltiples tickets desde notas o specs |
| Consultar detalles | Obtener criterios de aceptación, comentarios, adjuntos |

**Ejemplos de uso:**
```
"¿Cuál es el estado actual del ticket PROJ-123?"
"Crea un ticket de bug para el error de autenticación en login"
"Lista todos los bugs abiertos asignados a mí en el sprint actual"
"Genera tickets desde las notas de esta reunión"
```

### 2.2 Confluence

| Operación | Descripción |
|-----------|-------------|
| Buscar páginas | Búsqueda full-text en espacios |
| Resumir contenido | Extraer información clave de páginas |
| Crear páginas | Generar nueva documentación |
| Navegar espacios | Consultar jerarquía de contenidos |

**Ejemplos de uso:**
```
"Busca en Confluence la documentación de autenticación SSO"
"Resume la página de arquitectura del proyecto Alpha"
"Crea una página de documentación para la nueva API"
```

### 2.3 Compass (Catálogo de servicios)

| Operación | Descripción |
|-----------|-------------|
| Crear componentes | Definir servicios basados en repositorios |
| Importación masiva | Cargar componentes desde CSV/JSON |
| Consultar dependencias | Identificar relaciones entre servicios |

**Ejemplos de uso:**
```
"¿Qué servicios dependen del api-gateway?"
"Lista todos los componentes del equipo de plataforma"
```

### 2.4 Operaciones Cross-Product

- Vincular tickets de Jira con páginas de Confluence
- Recuperar documentación asociada a componentes de Compass
- Combinar datos de múltiples productos en flujos unificados

---

## 3. Autenticación

El servidor soporta **dos métodos de autenticación**:

### 3.1 OAuth 2.1 (Recomendado para uso interactivo)

- Flujo estándar de tres pasos con consentimiento del usuario en el navegador
- Se activa con el comando `/mcp` en Claude Code
- Los tokens se almacenan de forma segura y se renuevan automáticamente
- Instalación **just-in-time**: el primer usuario que completa el flujo OAuth activa la configuración

### 3.2 API Token (Para flujos headless/automatizados)

- Requiere habilitación por parte del administrador de la organización
- Formato de header: `Authorization: Basic <base64(email:token)>`
- Adecuado para CI/CD pipelines y flujos automatizados
- Generar token en: [id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens)

---

## 4. Instalación y Configuración en Claude Code

### Prerequisitos

- Sitio de **Atlassian Cloud** con al menos uno de: Jira, Confluence o Compass
- **Claude Code** instalado (`npm install -g @anthropic-ai/claude-code`)
- Para clientes locales: **Node.js v18+** (para ejecutar el proxy `mcp-remote`)
- Navegador moderno para el flujo OAuth

> **Importante:** Atlassian MCP Server **solo funciona con Atlassian Cloud**, no con versiones Server ni Data Center.

---

### Opción A: Usando el endpoint HTTP oficial (Recomendado)

Este es el método recomendado con transport HTTP (SSE está deprecado):

```bash
# Agregar el servidor MCP de Atlassian (scope local, solo proyecto actual)
claude mcp add --transport http atlassian https://mcp.atlassian.com/v1/mcp

# O con scope de usuario (disponible en todos los proyectos)
claude mcp add --transport http --scope user atlassian https://mcp.atlassian.com/v1/mcp

# O con scope de proyecto (compartido con el equipo via .mcp.json)
claude mcp add --transport http --scope project atlassian https://mcp.atlassian.com/v1/mcp
```

> **Nota:** El comando SSE (`https://mcp.atlassian.com/v1/sse`) sigue funcionando pero está **deprecado**. Usar HTTP en su lugar.

---

### Opción B: Usando API Token (Headless)

```bash
# Con autenticación via header Bearer (API token)
claude mcp add --transport http atlassian https://mcp.atlassian.com/v1/mcp \
  --header "Authorization: Bearer TU_API_TOKEN"

# Con autenticación Basic (email + token en base64)
claude mcp add --transport http atlassian https://mcp.atlassian.com/v1/mcp \
  --header "Authorization: Basic $(echo -n 'tu@email.com:TU_API_TOKEN' | base64)"
```

---

### Opción C: Usando mcp-remote (para clientes locales/IDEs)

Para clientes que no soportan HTTP directamente:

```bash
# En Windows (requiere cmd /c wrapper)
claude mcp add --transport stdio atlassian -- cmd /c npx -y mcp-remote https://mcp.atlassian.com/v1/mcp
```

---

### Autenticar tras instalar

```bash
# Dentro de Claude Code, ejecutar:
/mcp

# Seleccionar "Authenticate" para Atlassian
# Seguir el flujo de OAuth en el navegador
```

---

### Verificar la instalación

```bash
# Listar todos los servidores MCP configurados
claude mcp list

# Ver detalles del servidor Atlassian
claude mcp get atlassian
```

---

## 5. Configuración via .mcp.json (Compartir con el equipo)

Para compartir la configuración con todo el equipo, crear `.mcp.json` en la raíz del proyecto:

```json
{
  "mcpServers": {
    "atlassian": {
      "type": "http",
      "url": "https://mcp.atlassian.com/v1/mcp"
    }
  }
}
```

> Este archivo debe commitearse al repositorio. Claude Code pedirá aprobación antes de usar servidores de `.mcp.json` por razones de seguridad.

---

## 6. Clientes Compatibles

El Atlassian Rovo MCP Server funciona con:

| Cliente | Soporte |
|---------|---------|
| Claude Code (CLI) | ✅ Completo |
| Claude Desktop | ✅ Completo |
| VS Code (Copilot) | ✅ Completo |
| Cursor | ✅ Completo |
| GitHub Copilot CLI | ✅ Completo |
| OpenAI ChatGPT | ✅ Completo |
| Google Gemini CLI | ✅ Completo |
| Amazon Q | ✅ Completo |
| Docker | ✅ Completo |
| Azure SRE Agent | ✅ Completo |
| Cualquier cliente MCP vía `mcp-remote` | ✅ Con proxy |

---

## 7. Seguridad

### Medidas implementadas

- **Cifrado:** HTTPS con TLS 1.2 o superior en todo el tráfico
- **Permisos:** Acceso restringido a datos que el usuario ya puede ver en Atlassian Cloud. Respeta roles a nivel de proyecto y espacio
- **IP Allowlisting:** Si la organización tiene reglas de IP, el servidor las respeta
- **Audit Logging:** Todas las acciones quedan registradas para cumplimiento normativo

### Riesgos conocidos: Prompt Injection

La documentación oficial advierte explícitamente sobre vulnerabilidad a **ataques de prompt injection**, donde inputs maliciosos podrían instruir al agente a extraer datos o modificar contenido de forma no prevista.

**Mitigaciones recomendadas:**
- Usar solo clientes de confianza
- Aplicar principio de menor privilegio en scopes del token
- Requerir confirmación humana para acciones destructivas
- Monitorear los audit logs regularmente

---

## 8. Casos de Uso Prácticos con Claude Code

```bash
# Implementar una feature directamente desde un ticket de Jira
> "Implementa la feature descrita en el ticket JIRA ENG-4521 y crea un PR en GitHub"

# Generar tickets desde documentación
> "Crea tickets de Jira para cada tarea pendiente en esta página de Confluence"

# Investigar errores en producción
> "Busca en Jira todos los bugs abiertos relacionados con autenticación del último sprint"

# Documentar código implementado
> "Crea una página en Confluence documentando la nueva API de pagos que acabamos de implementar"

# Workflow completo de desarrollo
> "Revisa los criterios de aceptación del ticket PROJ-456, implementa los cambios y actualiza el ticket como 'In Review'"
```

---

## 9. Limitaciones Conocidas

| Limitación | Detalle |
|------------|---------|
| Solo Atlassian Cloud | No compatible con Server ni Data Center |
| Re-autenticación frecuente | Reportes de necesitar reautenticarse múltiples veces al día (enero 2025) |
| Permisos del usuario | No puede acceder a más datos de los que el usuario tiene permiso |
| Administrador requerido | El admin debe autorizar la app antes de que otros usuarios puedan acceder |
| IP Allowlist | Errores pueden bloquear autenticación headless si hay restricciones de IP |
| Tokens con scope limitado | Un token solo para Jira no puede acceder a Confluence y viceversa |

---

## 10. Configuración Avanzada: Variables de Entorno

```bash
# Timeout para inicio del servidor MCP (en ms)
MCP_TIMEOUT=10000 claude

# Límite de tokens en output de herramientas MCP
MAX_MCP_OUTPUT_TOKENS=50000 claude

# Control de Tool Search (para muchos servidores MCP)
ENABLE_TOOL_SEARCH=auto claude
```

---

## 11. Comandos MCP en Claude Code

Los prompts del servidor MCP de Atlassian aparecen como comandos con el prefijo `/mcp__`:

```
/mcp__atlassian__create_issue "Título del ticket" high
/mcp__atlassian__search_issues "open bugs sprint actual"
/mcp__atlassian__create_page "Título de la página"
```

---

## 12. Diferencias: MCP Oficial vs Alternativas de Terceros

| Aspecto | Atlassian Rovo MCP (Oficial) | Alternativas (ej. tom28881/mcp-jira-server) |
|---------|------------------------------|---------------------------------------------|
| Mantenimiento | Atlassian (oficial) | Comunidad |
| Autenticación | OAuth 2.1 / API Token | API Token (Jira Cloud/Server) |
| Productos | Jira + Confluence + Compass | Solo Jira |
| Herramientas | 46+ tools | Variable (sprints, comentarios, adjuntos) |
| Compatibilidad | Solo Cloud | Cloud + Server + Data Center |
| Setup | Remote HTTP | Local stdio (npx) |
| Seguridad | Gestionada por Atlassian | Responsabilidad del usuario |

---

## 13. Administración Empresarial

Para organizaciones, Claude Code permite control centralizado de MCP:

```json
// managed-mcp.json (deployer por IT en el sistema)
{
  "mcpServers": {
    "atlassian": {
      "type": "http",
      "url": "https://mcp.atlassian.com/v1/mcp"
    }
  }
}
```

**Ubicaciones del archivo administrado:**
- macOS: `/Library/Application Support/ClaudeCode/managed-mcp.json`
- Linux/WSL: `/etc/claude-code/managed-mcp.json`
- Windows: `C:\Program Files\ClaudeCode\managed-mcp.json`

---

## 14. Fuentes

- [GitHub oficial - atlassian/atlassian-mcp-server](https://github.com/atlassian/atlassian-mcp-server)
- [Documentación oficial Atlassian - Getting Started](https://support.atlassian.com/atlassian-rovo-mcp-server/docs/getting-started-with-the-atlassian-remote-mcp-server/)
- [Documentación oficial Atlassian - Use Rovo MCP Server](https://support.atlassian.com/atlassian-rovo-mcp-server/docs/use-atlassian-rovo-mcp-server/)
- [Configuración OAuth 2.1](https://support.atlassian.com/atlassian-rovo-mcp-server/docs/configuring-oauth-2-1/)
- [Página de producto Atlassian MCP](https://www.atlassian.com/platform/remote-mcp-server)
- [Claude Code - Documentación MCP](https://code.claude.com/docs/en/mcp)
- [Artículo Velir: Integrating Atlassian Jira with Claude Code](https://www.velir.com/ideas/ai-development-integrating-atlassian-jira-with-claude-code)
- [Composio: How to connect Jira MCP and Claude Code](https://composio.dev/blog/jira-mcp-server)
- [Community: Claude Code - Jira MCP](https://community.atlassian.com/forums/Jira-questions/Claude-Code-Jira-MCP/qaq-p/3122551)
- [Medium: How to Connect Atlassian MCP Server to Claude Code](https://medium.com/@milad.jafary/how-to-connect-atlassian-mcp-server-to-claude-code-5c22d47d5cd5)
