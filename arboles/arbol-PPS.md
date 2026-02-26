# Árbol del Proyecto PPS — PS - Platform Services

**Instancia:** siesa-team.atlassian.net  
**Fecha generación:** 2026-02-26  
**Total issues:** 337  

## Resumen por tipo

| Tipo | Cantidad |
|------|----------|
| Bug | 1 |
| Epic | 19 |
| Feature | 3 |
| Historia | 23 |
| Sub-task | 203 |
| Task | 88 |

## Árbol Jerárquico

├── 🔷 **PPS-2** (Feature) [Backlog] — Servicios de plataforma
│   ├── 🟣 **PPS-15** (Epic) [Backlog] — Identity manager
│   │   └── ✅ **PPS-44** (Task) [Backlog] — Despliegue
│   │       ├── ↳ **PPS-45** (Sub-task) [Backlog] — Desplegarlo en GCP para entregar endpoints a los demás equipos de desarrollo
│   │       └── ↳ **PPS-46** (Sub-task) [Backlog] — Generar documentación de usuario final en confluence para entregar a los demás equipos de desarrollo
│   ├── 🟣 **PPS-16** (Epic) [Backlog] — Subscription manager
│   │   ├── ✅ **PPS-53** (Task) [Done] — MVP
│   │   │   └── ↳ **PPS-54** (Sub-task) [Backlog] — Documentación en confluence para entregar a los equipos de desarrollo
│   │   ├── 📋 **PPS-75** (Historia) [Done] — Publicar cola/mensaje para ser consumido por el portal / Usuario Nuevo
│   │   ├── ✅ **PPS-80** (Task) [Done] — #27 EndPoint/trigger Create User
│   │   │   ├── ↳ **PPS-85** (Sub-task) [Done] — 27.1: Internal Event SPR → SM
│   │   │   ├── ↳ **PPS-87** (Sub-task) [Done] — 27.2: Event Consumer in SM
│   │   │   ├── ↳ **PPS-88** (Sub-task) [Done] — Planeación Epica
│   │   │   ├── ↳ **PPS-89** (Sub-task) [Done] — 27.3: Domain Event SM → External Services
│   │   │   ├── ↳ **PPS-90** (Sub-task) [Done] — 27.4: Endpoint GET /api/v1/subscribers/:uuid in SM
│   │   │   ├── ↳ **PPS-91** (Sub-task) [Done] — 27.5: Endpoint PATCH /api/v1/subscribers/:uuid in SM
│   │   │   ├── ↳ **PPS-92** (Sub-task) [Done] — 27.6: Validate currency Field in Billing Flow
│   │   │   ├── ↳ **PPS-93** (Sub-task) [Done] — 27.7: Add subscriber_currency Field to billing_liquidations
│   │   │   ├── ↳ **PPS-94** (Sub-task) [Done] — 27.8: Propagate Currency in Billing Service
│   │   │   └── ↳ **PPS-134** (Sub-task) [Done] — Test y Validación
│   │   ├── ✅ **PPS-151** (Task) [Done] — Epica 28 Creacion del payload Billing -> ERP creacionde facturas
│   │   │   ├── ↳ **PPS-152** (Sub-task) [Done] — 28.1: Implement document Field in SPR Service
│   │   │   ├── ↳ **PPS-153** (Sub-task) [Done] — Planeacion
│   │   │   ├── ↳ **PPS-154** (Sub-task) [Done] — Story 28.2: Update Admin Portal Subscriber Form with document Field
│   │   │   ├── ↳ **PPS-155** (Sub-task) [Done] — Story 28.3: Extend SM Billing Data with Subscriber Fields
│   │   │   ├── ↳ **PPS-156** (Sub-task) [Done] — Story 28.4: Refactor Billing Snapshot Payload Naming
│   │   │   ├── ↳ **PPS-157** (Sub-task) [Done] — Story 28.5: Prepare Billing Data Models for ERP
│   │   │   ├── ↳ **PPS-158** (Sub-task) [Done] — Story 28.6: Implement ERP Manager HTTP Client
│   │   │   ├── ↳ **PPS-159** (Sub-task) [Done] — Story 28.7: Integrate ERP Manager in Billing Logic
│   │   │   ├── ↳ **PPS-160** (Sub-task) [Done] — Story 28.8: Unit Tests for ERP Integration
│   │   │   ├── ↳ **PPS-161** (Sub-task) [Done] — Story 28.9: Integration & E2E Tests for ERP Flow
│   │   │   ├── ↳ **PPS-162** (Sub-task) [Done] — Story 28.10: Documentation for ERP Manager Integration
│   │   │   ├── ↳ **PPS-163** (Sub-task) [Done] — Story 28.11: Trigger Billing on Prepaid/Add-on Acquisition
│   │   │   ├── ↳ **PPS-175** (Sub-task) [Done] — Story 28.12: Add Plan and Add-on Fee Lines to Liquidations
│   │   │   ├── ↳ **PPS-176** (Sub-task) [Done] — Story 28.13: Fix Add-on Bucket Lines to Use Addon LineType
│   │   │   └── ↳ **PPS-177** (Sub-task) [Done] — Story 28.14: Integration Tests for Fee Lines
│   │   ├── ✅ **PPS-191** (Task) [Done] — Integración entre servicios y presentación
│   │   ├── ✅ **PPS-192** (Task) [Done] — Correcciones en Epica 9
│   │   │   ├── ↳ **PPS-193** (Sub-task) [Done] — Planeación
│   │   │   ├── ↳ **PPS-194** (Sub-task) [Done] — Story 9.9: Balance Calculated Amount - Simple Charge Models
│   │   │   ├── ↳ **PPS-195** (Sub-task) [Done] — Story 9.10: Balance Calculated Amount - Complex Charge Models + Component Aggregation
│   │   │   └── ↳ **PPS-196** (Sub-task) [Done] — Pruebas y Validación
│   │   ├── ✅ **PPS-197** (Task) [Done] — Correcciones integraciones entre servicios
│   │   ├── ✅ **PPS-199** (Task) [Done] — Bugs Subscription Manager
│   │   │   ├── ↳ **PPS-200** (Sub-task) [Done] — subscriber => columna activo no obedece al formulario creacion/edicion
│   │   │   ├── ↳ **PPS-201** (Sub-task) [Done] — email debe ser requerido, legacy tenand id debe ser nullable, subscriber key (requerido)
│   │   │   ├── ↳ **PPS-202** (Sub-task) [Done] — Se debe mejorar el manejo de errores
│   │   │   ├── ↳ **PPS-203** (Sub-task) [Done] — al actualizar un usuario suscriptor no lo esta permitiendo por el tema de el tipo de usuario En el modulo del suscriptor
│   │   │   ├── ↳ **PPS-204** (Sub-task) [Done] — En la miga de pan no debe mostrar el guid, mostrar el nombre
│   │   │   ├── ↳ **PPS-205** (Sub-task) [Done] — . En ver suscripciones del suscriptior al dar clic sobre el guid en la miga de pan esta direccionando a una 404
│   │   │   ├── ↳ **PPS-206** (Sub-task) [Done] —  Cuando se cancele/inactive la suscription no debe permitir seguir consumiendo
│   │   │   └── ↳ **PPS-207** (Sub-task) [Done] — en la edicion de metricas/plan/cargo la etapa no esta cargando los campos select
│   │   ├── 📋 **PPS-231** (Historia) [Done] — Epic 31: Subscriber Dashboard API
│   │   │   ├── ↳ **PPS-232** (Sub-task) [Done] — 31.1 - Notification-Service - Enable API Key Authentication on Admin Notifications
│   │   │   ├── ↳ **PPS-233** (Sub-task) [Done] — 31.2 - SM-Service - Environment Configuration for Notification Service
│   │   │   ├── ↳ **PPS-240** (Sub-task) [Done] — 31.3 - SM-Service - Notification HTTP Client
│   │   │   ├── ↳ **PPS-241** (Sub-task) [Done] — 31.4 - SM-Service - Subscriber Dashboard Endpoint
│   │   │   ├── ↳ **PPS-242** (Sub-task) [Done] — 31.5 - Documentation - Fix Notification Service Port
│   │   │   ├── ↳ **PPS-252** (Sub-task) [Done] — 31.6 - SM-Service - Active Plans Count Dashboard
│   │   │   ├── ↳ **PPS-256** (Sub-task) [Done] — Ajustes sobre entrega 30 Enero
│   │   │   ├── ↳ **PPS-267** (Sub-task) [Done] — 31.7 - Mejora en vista de subscripciones para mostrar planes
│   │   │   ├── ↳ **PPS-268** (Sub-task) [Done] — 31.8 - Consumir endpoints de facturas para baldosas
│   │   │   └── ↳ **PPS-269** (Sub-task) [Done] — 31.9 - Reporte de consumo de plan para dashlet
│   │   ├── 📋 **PPS-243** (Historia) [Done] — Story 8.18: Rich Text Editor for Add-on Description
│   │   ├── ✅ **PPS-244** (Task) [Done] — Story 8.18: Rich Text Editor for Add-on Description
│   │   ├── 📋 **PPS-280** (Historia) [Done] — Story 10.6: Configurable Overage Limit for Package Charges - Backend
│   │   ├── 📋 **PPS-281** (Historia) [Done] — Story 10.7: Configurable Overage Limit for Package Charges - Admin Portal UI
│   │   ├── 📋 **PPS-283** (Historia) [Done] — Ajuste para producción del Subscription Manager
│   │   ├── 📋 **PPS-321** (Historia) [Done] — Ajustar filtro producto en listview de metricas, y tamaño de texto en demas filtros
│   │   ├── ✅ **PPS-327** (Task) [Done] — Epic 35: Centralizar cálculo de precios en Billing-Service y exponer API de catálogo para la tienda
│   │   │   ├── ↳ **PPS-335** (Sub-task) [Done] — Story 35.1: PC-Service - Shared Charge Model Helper & Plans External Catalog-Data Endpoint
│   │   │   ├── ↳ **PPS-336** (Sub-task) [Done] — Story 35.2: PC-Service - Addons External Catalog-Data Endpoint
│   │   │   ├── ↳ **PPS-337** (Sub-task) [Done] — Story 35.3: SM-Service - External Catalog-Data Proxy Endpoints
│   │   │   ├── ↳ **PPS-338** (Sub-task) [Done] — Story 35.4: Pricing Calculation Unification — Single Source of Truth via Billing-Service
│   │   │   ├── ↳ **PPS-339** (Sub-task) [Done] — Story 35.5: Catalog Pricing Type Metadata & Base Price Calculation
│   │   │   └── ↳ **PPS-340** (Sub-task) [Done] — Story 35.6: Balance-Manager Pricing Delegation — Complete Single Source of Truth
│   │   ├── ✅ **PPS-330** (Task) [Backlog] — scripts de migracion de desde contratos CRM hacia el suscription 
│   │   ├── ✅ **PPS-331** (Task) [In Progress] — Migrar SM a BMAD 6 Siesa Agents
│   │   ├── ✅ **PPS-332** (Task) [Done] — Cantidad de resultados en los listviews muestra valores incorrectos
│   │   ├── ✅ **PPS-333** (Task) [In Progress] — El campo id legacy debe ser nullable y opcional 
│   │   ├── ✅ **PPS-334** (Task) [Backlog] — campo clave del subscriptor debe cambiarsele el nombre por  id instancia Google Cloud Platform
│   │   ├── 🐛 **PPS-341** (Bug) [In Progress] — spr-service: unique constraint on subscriber_legacy_tenant_id blocks nullable behavior
│   │   └── ✅ **PPS-344** (Task) [Done] — El código del plan debe permitir minúsculas, caso legacy 
│   ├── 🟣 **PPS-17** (Epic) [Backlog] — Balance manager
│   │   └── ✅ **PPS-47** (Task) [Done] — MVP
│   │       └── ↳ **PPS-48** (Sub-task) [Done] — Pendiente desplegar los ajustes de Ivan sistema legado
│   ├── 🟣 **PPS-18** (Epic) [Backlog] — Billing service
│   │   ├── ✅ **PPS-49** (Task) [Done] — MVP
│   │   │   └── ↳ **PPS-50** (Sub-task) [Done] — Pendiente presentación del MVP semana del 15 de diciembre
│   │   ├── ✅ **PPS-51** (Task) [Backlog] — Despliegue
│   │   │   └── ↳ **PPS-52** (Sub-task) [Backlog] — Despliegue en GCP para integrarlo con los demás servicios del grupo del subscription manager
│   │   ├── 📋 **PPS-69** (Historia) [Done] — Flujo de Renovacion de planes postpago y prepago
│   │   ├── 📋 **PPS-70** (Historia) [Done] — Liquidacion flujo prepago
│   │   ├── ✅ **PPS-71** (Task) [Done] — Implementacion ERP Manager en Billing
│   │   │   ├── ↳ **PPS-82** (Sub-task) [Done] — Generar factura a travez del erp manager
│   │   │   ├── ↳ **PPS-83** (Sub-task) [Done] — Consultar factura desde el erp manager
│   │   │   └── ↳ **PPS-132** (Sub-task) [Done] — Consulta facturas para el portal 
│   │   ├── ✅ **PPS-81** (Task) [Done] — Enviar moneda usuario al billing
│   │   └── ✅ **PPS-322** (Task) [Done] — El nit no deberia consultarse desde la liquidacion del billing
│   ├── 🟣 **PPS-19** (Epic) [Done] — Notification service
│   │   ├── ✅ **PPS-42** (Task) [Done] — Refinamiento
│   │   │   └── ↳ **PPS-43** (Sub-task) [Done] — Reunión jueves 18 de 8:30 a 10 am
│   │   ├── ✅ **PPS-62** (Task) [Done] — Construcción del brieft y el prd
│   │   ├── ✅ **PPS-72** (Task) [Done] — Epica 24 - Fundacion Backend 
│   │   ├── ✅ **PPS-86** (Task) [Done] — Epic 26 - Envio Emails / Interfaz Usuario Admin
│   │   ├── ✅ **PPS-328** (Task) [Done] — cambiar icono de siesa en los correos de las notificaiones
│   │   └── ✅ **PPS-329** (Task) [Done] — Revisar por que en el pago de una factura estan llegando duplicados correos 
│   ├── 🟣 **PPS-20** (Epic) [Backlog] — Paymets service
│   ├── 🟣 **PPS-21** (Epic) [Backlog] — Credential service
│   │   └── ✅ **PPS-39** (Task) [Done] — Despliegue
│   │       ├── ↳ **PPS-40** (Sub-task) [Done] — Despliegue en GCP para entregar servicio a los equipos de desarrollo
│   │       └── ↳ **PPS-41** (Sub-task) [Backlog] — Crear manual de integración en confluence para entregarlo a los equipos de desarrollo
│   ├── 🟣 **PPS-22** (Epic) [Backlog] — Provisioning service
│   │   └── ✅ **PPS-35** (Task) [Backlog] — Refinamiento
│   │       └── ↳ **PPS-36** (Sub-task) [Done] — Reunión de refinamiento jueves 18 de diciembre 10 am
│   ├── 🟣 **PPS-24** (Epic) [In Progress] — Subscriber portal
│   │   ├── ✅ **PPS-37** (Task) [Done] — Refinamiento
│   │   │   └── ↳ **PPS-38** (Sub-task) [Done] — Reunión de refinamiento jueves 18 a las 8:30
│   │   ├── ✅ **PPS-61** (Task) [Done] — Construcción del brieft y el prd
│   │   ├── ✅ **PPS-73** (Task) [Done] — Epic 1: Authentication and Portal Foundation
│   │   │   └── ↳ **PPS-287** (Sub-task) [Done] — Story 1.8: Global Session Expiration Handler
│   │   ├── ✅ **PPS-74** (Task) [Done] — Epic 2: Dashboard y Visibilidad de Consumo
│   │   │   ├── ↳ **PPS-96** (Sub-task) [Done] — Story 2.1: Main Layout with Navigation
│   │   │   ├── ↳ **PPS-97** (Sub-task) [Done] — Story 2.2: Subscription List API
│   │   │   ├── ↳ **PPS-98** (Sub-task) [Done] — Story 2.3: Subscription Summary View (Dashboard)
│   │   │   ├── ↳ **PPS-105** (Sub-task) [Done] — Story 2.4: Subscription Detail API with Plans
│   │   │   ├── ↳ **PPS-106** (Sub-task) [Done] — Story 2.5: Subscription Detail View with Plans
│   │   │   ├── ↳ **PPS-107** (Sub-task) [Done] — Story 2.6: Consumption by Charge API
│   │   │   ├── ↳ **PPS-108** (Sub-task) [Done] — Story 2.7: Consumption Visualization by Charge
│   │   │   ├── ↳ **PPS-109** (Sub-task) [Done] — Story 2.8: Charge Detail Panel (Drill-down)
│   │   │   ├── ↳ **PPS-110** (Sub-task) [Done] — Story 2.4: Subscription Detail API with Plans
│   │   │   ├── ↳ **PPS-111** (Sub-task) [Done] — Story 2.4: Subscription Detail API with Plans
│   │   │   ├── ↳ **PPS-112** (Sub-task) [Done] — Story 2.5: Subscription Detail View with Plans
│   │   │   ├── ↳ **PPS-113** (Sub-task) [Done] — Story 2.6: Consumption by Charge API
│   │   │   ├── ↳ **PPS-114** (Sub-task) [Done] — Story 2.7: Consumption Visualization by Charge
│   │   │   └── ↳ **PPS-115** (Sub-task) [Done] — Story 2.8: Charge Detail Panel (Drill-down)
│   │   ├── ✅ **PPS-116** (Task) [Done] — Epic 3: Notification System
│   │   │   ├── ↳ **PPS-117** (Sub-task) [Done] — Story 3.1: Notifications API
│   │   │   ├── ↳ **PPS-118** (Sub-task) [Done] — Story 3.2: Bell Icon with Badge and Dropdown
│   │   │   ├── ↳ **PPS-119** (Sub-task) [Done] — Story 3.3: Mark Notifications as Read
│   │   │   ├── ↳ **PPS-120** (Sub-task) [Done] — Story 3.4: Notification History View
│   │   │   ├── ↳ **PPS-121** (Sub-task) [Done] — Story 3.5: Notification Preferences API
│   │   │   ├── ↳ **PPS-122** (Sub-task) [Done] — Story 3.6: Notification Preferences Settings View
│   │   │   └── ↳ **PPS-123** (Sub-task) [Done] — Story 3.7: Notification Email Sending According to Preferences
│   │   ├── ✅ **PPS-124** (Task) [Done] — Epic 6: ERP Invoice Management
│   │   │   ├── ↳ **PPS-125** (Sub-task) [Done] — Story 6.1: Invoice List API
│   │   │   ├── ↳ **PPS-126** (Sub-task) [Done] — Story 6.2: Invoice List View
│   │   │   ├── ↳ **PPS-127** (Sub-task) [Done] — Story 6.3: Invoice Detail API
│   │   │   ├── ↳ **PPS-128** (Sub-task) [Done] — Story 6.4: Invoice Detail Panel
│   │   │   ├── ↳ **PPS-129** (Sub-task) [Done] — Story 6.5: Invoice Payment and Partial Payment API
│   │   │   ├── ↳ **PPS-130** (Sub-task) [Done] — Story 6.6: Stripe Checkout Flow for Invoices
│   │   │   └── ↳ **PPS-131** (Sub-task) [Done] — Story 6.7: RabbitMQ Consumer for Invoice Payment Confirmation
│   │   ├── 📋 **PPS-133** (Historia) [Done] — Story 99.1: Refactor appsettings to partial configurations for each service
│   │   ├── 📋 **PPS-135** (Historia) [Done] — Refactor - Remove Email Sending Logic from Portal Backend
│   │   ├── ✅ **PPS-136** (Task) [Done] — Proactive Control with Thresholds
│   │   │   ├── ↳ **PPS-137** (Sub-task) [Done] — Story 4.1: Threshold Query API
│   │   │   ├── ↳ **PPS-138** (Sub-task) [Done] — Story 4.2: Threshold Configuration API
│   │   │   ├── ↳ **PPS-139** (Sub-task) [Done] — Story 4.3: ThresholdConfig Component
│   │   │   └── ↳ **PPS-140** (Sub-task) [Done] — Story 4.4: Threshold Integration in DetailPanel
│   │   ├── ✅ **PPS-149** (Task) [Done] — Story 99.3: Switch from Mocks to Real Services
│   │   ├── ✅ **PPS-150** (Task) [Done] — CC-01: Subscription Endpoint Migration
│   │   ├── ✅ **PPS-164** (Task) [Done] — Epica 5: Gestión de Addons con Pagos
│   │   │   ├── ↳ **PPS-165** (Sub-task) [Done] — Story 5.1: Addon Catalog API
│   │   │   ├── ↳ **PPS-166** (Sub-task) [Done] — Story 5.2: Addon Catalog View
│   │   │   ├── ↳ **PPS-167** (Sub-task) [Done] — Story 5.3: Addon Purchase Initiation API
│   │   │   ├── ↳ **PPS-168** (Sub-task) [Done] — Story 5.4: Payment Gateway Checkout Flow for Addons
│   │   │   ├── ↳ **PPS-169** (Sub-task) [Done] — Story 5.5: RabbitMQ Consumer for Addon Confirmation
│   │   │   └── ↳ **PPS-170** (Sub-task) [Done] — Story 5.6: Addon Impact Visualization
│   │   ├── ✅ **PPS-174** (Task) [Done] — Integracion contra ERP Manager - Consulta de Facturas
│   │   ├── ✅ **PPS-180** (Task) [Done] — Epic 7: Transaction History
│   │   │   ├── ↳ **PPS-181** (Sub-task) [Done] — Story 7.1: Transaction History API
│   │   │   ├── ↳ **PPS-182** (Sub-task) [Done] — Story 7.2: Transaction History View
│   │   │   └── ↳ **PPS-183** (Sub-task) [Done] — Story 7.3: Transaction Detail
│   │   ├── ✅ **PPS-198** (Task) [Done] — Refactor: Fix ERP Manager X-Client-ID Header
│   │   ├── ✅ **PPS-208** (Task) [Done] — 99-5: Enhance User Sync with NitTercero
│   │   ├── ✅ **PPS-209** (Task) [Done] — Fix: Remove Notification Polling & Enhance Real-time UX
│   │   ├── 📋 **PPS-215** (Historia) [Done] — Epic 30: Billing - Payment Confirmation Flow (Existing Invoice)
│   │   │   ├── ↳ **PPS-216** (Sub-task) [Done] — Story 30.1: Database Schema - Payment Fields
│   │   │   ├── ↳ **PPS-217** (Sub-task) [Done] — Story 30.2: HTTP Clients Extension - SM & ERP Payment Methods
│   │   │   ├── ↳ **PPS-218** (Sub-task) [Done] — Story 30.3: ERP RabbitMQ Consumer - Payment Results
│   │   │   ├── ↳ **PPS-219** (Sub-task) [Done] — Story 30.4: Confirm Payment Endpoint - Full Orchestration
│   │   │   ├── ↳ **PPS-220** (Sub-task) [Done] — Story 30.5: Payment Confirmation Pass-through Mode
│   │   │   └── ↳ **PPS-221** (Sub-task) [Done] — Story 30.6: Payment Confirmation Flow Refinements
│   │   ├── ✅ **PPS-222** (Task) [Done] — Enterprise Invoice Management (Epic 32)
│   │   │   ├── ↳ **PPS-223** (Sub-task) [Done] — Refactor Invoice Query for Pagination (Story 32.1)
│   │   │   ├── ↳ **PPS-224** (Sub-task) [Done] — Invoice Summary Endpoint (Story 32.2)
│   │   │   └── ↳ **PPS-284** (Sub-task) [Done] — UI Improvements Testing & Documentation (Story 32.3)
│   │   ├── ✅ **PPS-225** (Task) [Done] — Epic 10: Advanced Billing Management
│   │   │   ├── ↳ **PPS-226** (Sub-task) [Done] — Story 10.1: Invoice Listing API with Pagination
│   │   │   ├── ↳ **PPS-227** (Sub-task) [Done] — Story 10.2: Financial Summary API
│   │   │   ├── ↳ **PPS-228** (Sub-task) [Done] — Story 10.3: Unified Invoice View
│   │   │   ├── ↳ **PPS-229** (Sub-task) [Done] — Story 10.4: Export Invoices to Excel
│   │   │   └── ↳ **PPS-254** (Sub-task) [Done] — Ajustes sobre la entrega  30 ene 2026
│   │   ├── 📋 **PPS-230** (Historia) [Done] — [ELIMINAR] Creada por error - usar PPS-232
│   │   ├── 📋 **PPS-234** (Historia) [Done] — Epic 9: Executive Dashboard and Navigation Improvements
│   │   │   ├── ↳ **PPS-235** (Sub-task) [Done] — Story 9.1: Dashboard Metrics API Integration
│   │   │   ├── ↳ **PPS-236** (Sub-task) [Done] — Story 9.2: Payment History Dashlet API
│   │   │   ├── ↳ **PPS-237** (Sub-task) [Done] — Story 9.3: Executive Dashboard View
│   │   │   ├── ↳ **PPS-238** (Sub-task) [Done] — Story 9.4: Navigation Restructure
│   │   │   ├── ↳ **PPS-239** (Sub-task) [Done] — Story 9.5: Subscription Status Filter
│   │   │   ├── ↳ **PPS-257** (Sub-task) [Done] — Story 9.6: Dashboard Visual Enhancement - Vibrant & Dynamic Style
│   │   │   ├── ↳ **PPS-258** (Sub-task) [Done] — Story 9.7: Active Plans Count Dashlet
│   │   │   ├── ↳ **PPS-259** (Sub-task) [Done] — Story 9.8: Add Financial Summary Dashlets to Dashboard
│   │   │   ├── ↳ **PPS-260** (Sub-task) [Done] — Story 9.9: Reorganize Dashboard Grid into 2 Rows
│   │   │   ├── ↳ **PPS-261** (Sub-task) [Done] — Story 9.10: Redesign Subscriptions View with Horizontal Layout
│   │   │   ├── ↳ **PPS-262** (Sub-task) [Done] — Story 9.11: Integrate Addons Inline in Subscription View
│   │   │   ├── ↳ **PPS-263** (Sub-task) [Done] — Story 9.12: Update /subscriptions Page for New Layout
│   │   │   ├── ↳ **PPS-264** (Sub-task) [Done] — Story 9.13: Consumption Visualization Components
│   │   │   ├── ↳ **PPS-265** (Sub-task) [Done] — Story 9.14: Consumption Data Integration
│   │   │   ├── ↳ **PPS-266** (Sub-task) [Done] — 9.15: Consumption Data Integration
│   │   │   └── ↳ **PPS-272** (Sub-task) [Done] — Story 9.16: Store View - Product Catalog with Shopping Cart
│   │   ├── ✅ **PPS-247** (Task) [In Progress] — Reportar tiempo en plataforma Google Skill Boost
│   │   │   ├── ↳ **PPS-248** (Sub-task) [Done] — Google Cloud Fundamentals: Core Infrastructure
│   │   │   ├── ↳ **PPS-249** (Sub-task) [Done] — Developing Containerized Applications on Google Cloud
│   │   │   ├── ↳ **PPS-250** (Sub-task) [Done] — Develop Serverless Applications on Cloud Run
│   │   │   └── ↳ **PPS-251** (Sub-task) [In Progress] — Security & Identity Fundamentals
│   │   ├── ✅ **PPS-253** (Task) [Done] — Implement Invoice Pagination & Filtering Fix
│   │   ├── ✅ **PPS-255** (Task) [Done] — Validar implementación de siesa-ui-kit
│   │   ├── ✅ **PPS-270** (Task) [Done] — Migración de Payment Gateway: Stripe → Nuvei
│   │   ├── 📋 **PPS-273** (Historia) [Done] — Epic 11: Dashboard Row 1 Visualizations
│   │   │   ├── ↳ **PPS-274** (Sub-task) [Done] — Story 11.1: Consumption History Backend Proxy
│   │   │   ├── ↳ **PPS-275** (Sub-task) [Done] — Story 11.2: Consumption History Frontend Integration
│   │   │   ├── ↳ **PPS-276** (Sub-task) [Done] — Story 11.3: Consumption History Chart Component
│   │   │   ├── ↳ **PPS-277** (Sub-task) [Done] — Story 11.4: Dashboard Grid Reorganization
│   │   │   ├── ↳ **PPS-278** (Sub-task) [Done] — Story 11.5: Invoice Aging Backend Integration
│   │   │   ├── ↳ **PPS-279** (Sub-task) [Done] — Story 11.6: Invoice Aging Pie Chart Component
│   │   │   └── ↳ **PPS-285** (Sub-task) [Done] — Story 11.7: UI Improvements Testing & Validation
│   │   ├── 📋 **PPS-282** (Historia) [Done] — Ajuste para producción Subscriber Portal
│   │   ├── ✅ **PPS-299** (Task) [Done] — Admin Portal - Internationalization (i18n)
│   │   ├── ✅ **PPS-300** (Task) [Done] — Epic 12: Multilanguage Support (i18n)
│   │   ├── ✅ **PPS-306** (Task) [Done] — Implementación de Búsqueda de Facturas por Número e ID (Frontend)
│   │   ├── ✅ **PPS-307** (Task) [Done] — Migración de Búsqueda de Facturas a Server-Side (Frontend & Backend)
│   │   ├── 📋 **PPS-308** (Historia) [Done] — Epic 35: External Catalog Data API
│   │   │   ├── ↳ **PPS-309** (Sub-task) [Done] — Story 35.1: PC-Service - Shared Charge Model Helper & Plans Catalog-Data Endpoint
│   │   │   ├── ↳ **PPS-310** (Sub-task) [Done] — Story 35.2: PC-Service - Addons Catalog-Data Endpoint
│   │   │   ├── ↳ **PPS-311** (Sub-task) [Done] — Story 35.3: SM-Service - External Catalog-Data Proxy Endpoints
│   │   │   ├── ↳ **PPS-313** (Sub-task) [Done] — [DUPLICADO - ELIMINAR] Story 35.2: PC-Service - Addons Catalog-Data Endpoint
│   │   │   └── ↳ **PPS-314** (Sub-task) [Done] — [DUPLICADO - ELIMINAR] Story 35.3: SM-Service - External Catalog-Data Proxy Endpoints
│   │   ├── 📋 **PPS-312** (Historia) [Done] — Epic 13: Store Catalog Integration with Real Data
│   │   │   ├── ↳ **PPS-315** (Sub-task) [Done] — Story 13.1: Store Catalog Backend — Models & API Client
│   │   │   ├── ↳ **PPS-316** (Sub-task) [Done] — Story 13.2: Store Service & Endpoints
│   │   │   └── ↳ **PPS-317** (Sub-task) [Done] — Story 13.3: Store Frontend Integration
│   │   ├── ✅ **PPS-318** (Task) [Done] — Story 32.4: Invoice Query Search Filter
│   │   ├── ✅ **PPS-319** (Task) [Done] — Correcciones de reportes
│   │   ├── ✅ **PPS-320** (Task) [Done] — Mejoras de UI/UX en Filtros de Facturas y Dashboard (Frontend)
│   │   ├── ✅ **PPS-323** (Task) [Done] — mejorar diseño boton  modo claro / oscuro
│   │   ├── ✅ **PPS-324** (Task) [Done] — Terminar de implementar tienda con datos reales hasta la pantalla de nuvei  
│   │   │   ├── ↳ **PPS-346** (Sub-task) [Done] — 13-1: Store Catalog Backend — Modelos y API Client SM-Service
│   │   │   ├── ↳ **PPS-347** (Sub-task) [Done] — 13-2: Store Service y Endpoints REST
│   │   │   ├── ↳ **PPS-348** (Sub-task) [Done] — 13-3: Store Frontend — Integración con datos reales
│   │   │   ├── ↳ **PPS-349** (Sub-task) [Done] — 13-4: Store Backend — Campos de pricing (setup_fee, tiers, billing_cycle)
│   │   │   ├── ↳ **PPS-350** (Sub-task) [Done] — 13-5: Store Frontend — Visualización de tipos de pricing
│   │   │   └── ↳ **PPS-351** (Sub-task) [Done] — 13-6: Store Checkout — Carrito y redirección a Nuvei HPP
│   │   ├── ✅ **PPS-325** (Task) [Done] — Revisar / Optimizar listview de las facturas
│   │   ├── ✅ **PPS-326** (Task) [Done] — Mostrar el consumo que se excede al consumir un plan que sobrepasa el 100%
│   │   ├── ✅ **PPS-342** (Task) [Done] — Quitar lo pagado del informe de cartera del subs portal
│   │   ├── ✅ **PPS-343** (Task) [Done] — Quitar baldosa pagado del dashboard del subs portal 
│   │   ├── ✅ **PPS-345** (Task) [Done] — El botón de "Marcar todo como leído" no funciona correctamente
│   │   ├── ✅ **PPS-352** (Task) [Backlog] — ACL/RBAC en el portal del cliente. Multiples Roles por subscriptor.
│   │   └── ✅ **PPS-353** (Task) [Done] — Agregar métricas de compras de addons al portal 
│   │       ├── ↳ **PPS-354** (Sub-task) [Done] — [SM 37.1] Balance Manager — Consumption History by Bucket IDs
│   │       ├── ↳ **PPS-355** (Sub-task) [Done] — [SM 37.2] SM-Service — Addon Charts Unified Endpoint
│   │       ├── ↳ **PPS-356** (Sub-task) [Done] — [SM 37.3] SM-Service — Addon Pricing Metrics & Last Acquired
│   │       ├── ↳ **PPS-357** (Sub-task) [Done] — [Portal 16.1] Backend BFF — Models, API Client & Endpoint
│   │       ├── ↳ **PPS-358** (Sub-task) [Done] — [Portal 16.2] Frontend — Charts Components + Data Layer
│   │       ├── ↳ **PPS-359** (Sub-task) [Done] — [Portal 16.3] Frontend — Dashboard Integration & i18n
│   │       └── ↳ **PPS-360** (Sub-task) [Done] — [Portal 16.4] Addon Cost Dashlet & Pricing Fields
│   └── 🟣 **PPS-76** (Epic) [Backlog] — ERP Manager
│       ├── ✅ **PPS-77** (Task) [Done] — Empalme / instalacion Suscription Manager
│       ├── ✅ **PPS-78** (Task) [Done] — Creacion Documentacion BRIEF PRD
│       ├── ✅ **PPS-79** (Task) [Done] — Implementacion
│       ├── ✅ **PPS-141** (Task) [Done] — Epic 29: ERP Integration Microservice
│       │   ├── ↳ **PPS-142** (Sub-task) [Done] — Story 29.1: Project Initialization & Foundation
│       │   ├── ↳ **PPS-143** (Sub-task) [Done] — Story 29.2: Multi-Client Configuration Management
│       │   ├── ↳ **PPS-144** (Sub-task) [Done] — Story 29.3: Invoice Query Endpoint (SQL Server)
│       │   ├── ↳ **PPS-145** (Sub-task) [Done] — Story 29.4: Invoice Send Endpoint (SOAP - Cash Receipts)
│       │   ├── ↳ **PPS-146** (Sub-task) [Done] — Story 29.5: Invoice Create Endpoint (SOAP - Invoices)
│       │   ├── ↳ **PPS-147** (Sub-task) [Done] — Story 29.6: RabbitMQ Result Notifications
│       │   ├── ↳ **PPS-148** (Sub-task) [Done] — Story 29.7: Production Readiness
│       │   ├── ↳ **PPS-171** (Sub-task) [Done] — Integracion con los otros servicios
│       │   ├── ↳ **PPS-172** (Sub-task) [Done] — Pruebas y ajustes
│       │   └── ↳ **PPS-246** (Sub-task) [In Progress] — CC-12: Invoice Create Endpoint - Corregir formato a Service Financial Document
│       ├── 📋 **PPS-245** (Historia) [Done] — CC-12: Invoice Create Endpoint - Corregir formato a Service Financial Document
│       └── 📋 **PPS-286** (Historia) [Done] — Epic 34: SOAP/SQL to Connekta REST API Migration
├── 🔷 **PPS-6** (Feature) [Backlog] — BMAD
│   ├── 🟣 **PPS-8** (Epic) [Done] — Agente de calidad
│   │   └── ✅ **PPS-13** (Task) [Done] — Revisión flujo pruebas bmad v4 para informe
│   ├── 🟣 **PPS-9** (Epic) [Done] — Agente documentación usuarios final
│   │   └── ✅ **PPS-66** (Task) [Done] — MVP para presentación al equipo de documentación
│   ├── 🟣 **PPS-10** (Epic) [Done] — integración Jira (v4)
│   │   └── ✅ **PPS-64** (Task) [Done] — MVP
│   ├── 🟣 **PPS-23** (Epic) [Done] — Documentación SPs
│   │   └── ✅ **PPS-59** (Task) [Done] — Entrega forma al equipo POS para generar video/capacitación
│   ├── 🟣 **PPS-25** (Epic) [Backlog] — Core Siesa Agents Bmad
│   │   ├── ✅ **PPS-57** (Task) [Backlog] — Investigación para plan de trabajo
│   │   │   ├── ↳ **PPS-58** (Sub-task) [Backlog] — Daniel investiga y hace pruebas de concepto para entender toda la versión y posteriormente generar plan de trabajo 
│   │   │   └── ↳ **PPS-63** (Sub-task) [Done] — Investigación y detalle del funcionamiento de la v6 para capacitación
│   │   └── ✅ **PPS-99** (Task) [Backlog] — MVP de Siesa agents v2.0.0 con base en bmad v6
│   │       ├── ↳ **PPS-100** (Sub-task) [Done] — Definición workflow desarrollo con base en alcance inicial
│   │       ├── ↳ **PPS-101** (Sub-task) [Done] — Agregar UI kit a Siesa agents
│   │       ├── ↳ **PPS-102** (Sub-task) [Done] — Agregar integración con Jira
│   │       ├── ↳ **PPS-103** (Sub-task) [Done] — Agregar flujo para documentación de tipo usuario final
│   │       ├── ↳ **PPS-104** (Sub-task) [Backlog] — Definición de proceso de calidad e inclusión en el flujo de desarrollo
│   │       ├── ↳ **PPS-184** (Sub-task) [Done] — PostgreSQL 18 en Siesa Agents
│   │       ├── ↳ **PPS-210** (Sub-task) [Done] — Integrar Gitflow en Siesa-Agents
│   │       ├── ↳ **PPS-211** (Sub-task) [Done] — Actualizar arquitectura del Front a Vite + TanStack
│   │       ├── ↳ **PPS-212** (Sub-task) [Done] — Actualizar las Fuentes del Siesa-Agents y Siesa-UI-Kit
│   │       ├── ↳ **PPS-213** (Sub-task) [Done] — Integrar estandares/convenciones de bases de datos en Siesa-Agents
│   │       ├── ↳ **PPS-214** (Sub-task) [Backlog] — Siesa Agents y Procesos: Consolidar estrategia de generacion de casos
│   │       └── ↳ **PPS-271** (Sub-task) [Done] — GitFlow: Actualizar estandares en Siesa-Agents
│   ├── 🟣 **PPS-31** (Epic) [Backlog] — POCs
│   │   ├── ✅ **PPS-55** (Task) [Done] — Vertex
│   │   │   └── ↳ **PPS-56** (Sub-task) [Done] — Pagar cuenta y hacer pryebas con Ivan mientras está desarrollando el balance/subscription service
│   │   └── ✅ **PPS-67** (Task) [Done] — Siesa agents usando diferentes modelos de ia
│   └── 🟣 **PPS-288** (Epic) [Backlog] — BMAD 6-Beta
│       ├── 📋 **PPS-289** (Historia) [Backlog] — Definición de Estrategia de Extensión para Agentes y Workflows 
│       │   ├── ↳ **PPS-295** (Sub-task) [Done] — Sebas: Investigacion arquitectura de extensión de workflows
│       │   ├── ↳ **PPS-296** (Sub-task) [Done] — Santi: Investigacion arquitectura de extensión de workflows
│       │   └── ↳ **PPS-297** (Sub-task) [Backlog] — Investigacion arquitectura de extensión de workflows
│       ├── ✅ **PPS-290** (Task) [Done] — Migración de Integración con Jira hacia nueva version Siesa-Agents
│       ├── ✅ **PPS-291** (Task) [Done] — Migración del Workflow de Generación de Documentación de Usuario Final
│       ├── ✅ **PPS-292** (Task) [Done] — Migración del Sistema GitFlow Corporativo
│       ├── ✅ **PPS-293** (Task) [Done] — Implementación de Estándares Corporativos
│       ├── ✅ **PPS-294** (Task) [In Progress] — Implementación de Especificaciones UI (UI Kit)
│       ├── 📋 **PPS-298** (Historia) [Done] — Implementacion del nuevo Prompt maestro de procesos
│       └── 📋 **PPS-301** (Historia) [Backlog] — Labs Siesa-Agents new version Beta
│           ├── ↳ **PPS-302** (Sub-task) [Done] — Desarrollar con todo el flujo Siesa-Agents el submódulo de Financiero
│           ├── ↳ **PPS-303** (Sub-task) [Done] — Desarrollar con todo el flujo Siesa-Agents el submódulo de HR
│           ├── ↳ **PPS-304** (Sub-task) [In Progress] — Desarrollar con todo el flujo Siesa-Agents el submódulo de Inventory
│           └── ↳ **PPS-305** (Sub-task) [In Progress] — Desarrollar con todo el flujo Siesa-Agents el App Shell
└── 🔷 **PPS-28** (Feature) [Backlog] — Otros
    ├── 🟣 **PPS-29** (Epic) [Done] — Desing system
    │   ├── ✅ **PPS-65** (Task) [Done] — Migración a cuenta empresarial
    │   ├── ✅ **PPS-68** (Task) [Done] — Empalmar BMAD - Siesa UI KIT
    │   └── ✅ **PPS-95** (Task) [Done] — Edit Workflow generate-project-context
    └── 🟣 **PPS-30** (Epic) [Selected for Development] — Gestor comercial v CoreApp
        └── ✅ **PPS-84** (Task) [Done] — Docto con puntos de integracion CRM + GC en ERP

## Detalle de issues

| Key | Tipo | Resumen | Estado | Asignado |
|-----|------|---------|--------|----------|
| PPS-2 | Feature | Servicios de plataforma | Backlog | Sin asignar |
| PPS-6 | Feature | BMAD | Backlog | Sin asignar |
| PPS-8 | Epic | Agente de calidad | Done | Sin asignar |
| PPS-9 | Epic | Agente documentación usuarios final | Done | Sin asignar |
| PPS-10 | Epic | integración Jira (v4) | Done | Sin asignar |
| PPS-13 | Task | Revisión flujo pruebas bmad v4 para informe | Done | Sin asignar |
| PPS-15 | Epic | Identity manager | Backlog | Sin asignar |
| PPS-16 | Epic | Subscription manager | Backlog | Sin asignar |
| PPS-17 | Epic | Balance manager | Backlog | Sin asignar |
| PPS-18 | Epic | Billing service | Backlog | Sin asignar |
| PPS-19 | Epic | Notification service | Done | Sin asignar |
| PPS-20 | Epic | Paymets service | Backlog | Sin asignar |
| PPS-21 | Epic | Credential service | Backlog | Sin asignar |
| PPS-22 | Epic | Provisioning service | Backlog | Sin asignar |
| PPS-23 | Epic | Documentación SPs | Done | Sin asignar |
| PPS-24 | Epic | Subscriber portal | In Progress | Sin asignar |
| PPS-25 | Epic | Core Siesa Agents Bmad | Backlog | Sin asignar |
| PPS-28 | Feature | Otros | Backlog | Sin asignar |
| PPS-29 | Epic | Desing system | Done | Sin asignar |
| PPS-30 | Epic | Gestor comercial v CoreApp | Selected for Development | Sin asignar |
| PPS-31 | Epic | POCs | Backlog | Sin asignar |
| PPS-35 | Task | Refinamiento | Backlog | Sin asignar |
| PPS-36 | Sub-task | Reunión de refinamiento jueves 18 de diciembre 10 am | Done | Sin asignar |
| PPS-37 | Task | Refinamiento | Done | Sin asignar |
| PPS-38 | Sub-task | Reunión de refinamiento jueves 18 a las 8:30 | Done | Sin asignar |
| PPS-39 | Task | Despliegue | Done | Sin asignar |
| PPS-40 | Sub-task | Despliegue en GCP para entregar servicio a los equipos de desarrollo | Done | Sin asignar |
| PPS-41 | Sub-task | Crear manual de integración en confluence para entregarlo a los equipos de desarrollo | Backlog | Sin asignar |
| PPS-42 | Task | Refinamiento | Done | Sin asignar |
| PPS-43 | Sub-task | Reunión jueves 18 de 8:30 a 10 am | Done | Sin asignar |
| PPS-44 | Task | Despliegue | Backlog | Sin asignar |
| PPS-45 | Sub-task | Desplegarlo en GCP para entregar endpoints a los demás equipos de desarrollo | Backlog | Sin asignar |
| PPS-46 | Sub-task | Generar documentación de usuario final en confluence para entregar a los demás equipos de desarrollo | Backlog | Sin asignar |
| PPS-47 | Task | MVP | Done | Sin asignar |
| PPS-48 | Sub-task | Pendiente desplegar los ajustes de Ivan sistema legado | Done | Sin asignar |
| PPS-49 | Task | MVP | Done | Sin asignar |
| PPS-50 | Sub-task | Pendiente presentación del MVP semana del 15 de diciembre | Done | Sin asignar |
| PPS-51 | Task | Despliegue | Backlog | Sin asignar |
| PPS-52 | Sub-task | Despliegue en GCP para integrarlo con los demás servicios del grupo del subscription manager | Backlog | Sin asignar |
| PPS-53 | Task | MVP | Done | Sin asignar |
| PPS-54 | Sub-task | Documentación en confluence para entregar a los equipos de desarrollo | Backlog | Sin asignar |
| PPS-55 | Task | Vertex | Done | Sin asignar |
| PPS-56 | Sub-task | Pagar cuenta y hacer pryebas con Ivan mientras está desarrollando el balance/subscription service | Done | Sin asignar |
| PPS-57 | Task | Investigación para plan de trabajo | Backlog | Sin asignar |
| PPS-58 | Sub-task | Daniel investiga y hace pruebas de concepto para entender toda la versión y posteriormente generar plan de trabajo  | Backlog | Sin asignar |
| PPS-59 | Task | Entrega forma al equipo POS para generar video/capacitación | Done | Sin asignar |
| PPS-61 | Task | Construcción del brieft y el prd | Done | Sin asignar |
| PPS-62 | Task | Construcción del brieft y el prd | Done | Sin asignar |
| PPS-63 | Sub-task | Investigación y detalle del funcionamiento de la v6 para capacitación | Done | Sin asignar |
| PPS-64 | Task | MVP | Done | Sin asignar |
| PPS-65 | Task | Migración a cuenta empresarial | Done | Sin asignar |
| PPS-66 | Task | MVP para presentación al equipo de documentación | Done | Sin asignar |
| PPS-67 | Task | Siesa agents usando diferentes modelos de ia | Done | Sin asignar |
| PPS-68 | Task | Empalmar BMAD - Siesa UI KIT | Done | Sin asignar |
| PPS-69 | Historia | Flujo de Renovacion de planes postpago y prepago | Done | Sin asignar |
| PPS-70 | Historia | Liquidacion flujo prepago | Done | Sin asignar |
| PPS-71 | Task | Implementacion ERP Manager en Billing | Done | Sin asignar |
| PPS-72 | Task | Epica 24 - Fundacion Backend  | Done | Sin asignar |
| PPS-73 | Task | Epic 1: Authentication and Portal Foundation | Done | Sin asignar |
| PPS-74 | Task | Epic 2: Dashboard y Visibilidad de Consumo | Done | Sin asignar |
| PPS-75 | Historia | Publicar cola/mensaje para ser consumido por el portal / Usuario Nuevo | Done | Sin asignar |
| PPS-76 | Epic | ERP Manager | Backlog | Sin asignar |
| PPS-77 | Task | Empalme / instalacion Suscription Manager | Done | Sin asignar |
| PPS-78 | Task | Creacion Documentacion BRIEF PRD | Done | Sin asignar |
| PPS-79 | Task | Implementacion | Done | Sin asignar |
| PPS-80 | Task | #27 EndPoint/trigger Create User | Done | Sin asignar |
| PPS-81 | Task | Enviar moneda usuario al billing | Done | Sin asignar |
| PPS-82 | Sub-task | Generar factura a travez del erp manager | Done | Sin asignar |
| PPS-83 | Sub-task | Consultar factura desde el erp manager | Done | Sin asignar |
| PPS-84 | Task | Docto con puntos de integracion CRM + GC en ERP | Done | Sin asignar |
| PPS-85 | Sub-task | 27.1: Internal Event SPR → SM | Done | Sin asignar |
| PPS-86 | Task | Epic 26 - Envio Emails / Interfaz Usuario Admin | Done | Sin asignar |
| PPS-87 | Sub-task | 27.2: Event Consumer in SM | Done | Sin asignar |
| PPS-88 | Sub-task | Planeación Epica | Done | Sin asignar |
| PPS-89 | Sub-task | 27.3: Domain Event SM → External Services | Done | Sin asignar |
| PPS-90 | Sub-task | 27.4: Endpoint GET /api/v1/subscribers/:uuid in SM | Done | Sin asignar |
| PPS-91 | Sub-task | 27.5: Endpoint PATCH /api/v1/subscribers/:uuid in SM | Done | Sin asignar |
| PPS-92 | Sub-task | 27.6: Validate currency Field in Billing Flow | Done | Sin asignar |
| PPS-93 | Sub-task | 27.7: Add subscriber_currency Field to billing_liquidations | Done | Sin asignar |
| PPS-94 | Sub-task | 27.8: Propagate Currency in Billing Service | Done | Sin asignar |
| PPS-95 | Task | Edit Workflow generate-project-context | Done | Sin asignar |
| PPS-96 | Sub-task | Story 2.1: Main Layout with Navigation | Done | Sin asignar |
| PPS-97 | Sub-task | Story 2.2: Subscription List API | Done | Sin asignar |
| PPS-98 | Sub-task | Story 2.3: Subscription Summary View (Dashboard) | Done | Sin asignar |
| PPS-99 | Task | MVP de Siesa agents v2.0.0 con base en bmad v6 | Backlog | Sin asignar |
| PPS-100 | Sub-task | Definición workflow desarrollo con base en alcance inicial | Done | Sin asignar |
| PPS-101 | Sub-task | Agregar UI kit a Siesa agents | Done | Sin asignar |
| PPS-102 | Sub-task | Agregar integración con Jira | Done | Sin asignar |
| PPS-103 | Sub-task | Agregar flujo para documentación de tipo usuario final | Done | Sin asignar |
| PPS-104 | Sub-task | Definición de proceso de calidad e inclusión en el flujo de desarrollo | Backlog | Sin asignar |
| PPS-105 | Sub-task | Story 2.4: Subscription Detail API with Plans | Done | Sin asignar |
| PPS-106 | Sub-task | Story 2.5: Subscription Detail View with Plans | Done | Sin asignar |
| PPS-107 | Sub-task | Story 2.6: Consumption by Charge API | Done | Sin asignar |
| PPS-108 | Sub-task | Story 2.7: Consumption Visualization by Charge | Done | Sin asignar |
| PPS-109 | Sub-task | Story 2.8: Charge Detail Panel (Drill-down) | Done | Sin asignar |
| PPS-110 | Sub-task | Story 2.4: Subscription Detail API with Plans | Done | Sin asignar |
| PPS-111 | Sub-task | Story 2.4: Subscription Detail API with Plans | Done | Sin asignar |
| PPS-112 | Sub-task | Story 2.5: Subscription Detail View with Plans | Done | Sin asignar |
| PPS-113 | Sub-task | Story 2.6: Consumption by Charge API | Done | Sin asignar |
| PPS-114 | Sub-task | Story 2.7: Consumption Visualization by Charge | Done | Sin asignar |
| PPS-115 | Sub-task | Story 2.8: Charge Detail Panel (Drill-down) | Done | Sin asignar |
| PPS-116 | Task | Epic 3: Notification System | Done | Sin asignar |
| PPS-117 | Sub-task | Story 3.1: Notifications API | Done | Sin asignar |
| PPS-118 | Sub-task | Story 3.2: Bell Icon with Badge and Dropdown | Done | Sin asignar |
| PPS-119 | Sub-task | Story 3.3: Mark Notifications as Read | Done | Sin asignar |
| PPS-120 | Sub-task | Story 3.4: Notification History View | Done | Sin asignar |
| PPS-121 | Sub-task | Story 3.5: Notification Preferences API | Done | Sin asignar |
| PPS-122 | Sub-task | Story 3.6: Notification Preferences Settings View | Done | Sin asignar |
| PPS-123 | Sub-task | Story 3.7: Notification Email Sending According to Preferences | Done | Sin asignar |
| PPS-124 | Task | Epic 6: ERP Invoice Management | Done | Sin asignar |
| PPS-125 | Sub-task | Story 6.1: Invoice List API | Done | Sin asignar |
| PPS-126 | Sub-task | Story 6.2: Invoice List View | Done | Sin asignar |
| PPS-127 | Sub-task | Story 6.3: Invoice Detail API | Done | Sin asignar |
| PPS-128 | Sub-task | Story 6.4: Invoice Detail Panel | Done | Sin asignar |
| PPS-129 | Sub-task | Story 6.5: Invoice Payment and Partial Payment API | Done | Sin asignar |
| PPS-130 | Sub-task | Story 6.6: Stripe Checkout Flow for Invoices | Done | Sin asignar |
| PPS-131 | Sub-task | Story 6.7: RabbitMQ Consumer for Invoice Payment Confirmation | Done | Sin asignar |
| PPS-132 | Sub-task | Consulta facturas para el portal  | Done | Sin asignar |
| PPS-133 | Historia | Story 99.1: Refactor appsettings to partial configurations for each service | Done | Sin asignar |
| PPS-134 | Sub-task | Test y Validación | Done | Sin asignar |
| PPS-135 | Historia | Refactor - Remove Email Sending Logic from Portal Backend | Done | Sin asignar |
| PPS-136 | Task | Proactive Control with Thresholds | Done | Sin asignar |
| PPS-137 | Sub-task | Story 4.1: Threshold Query API | Done | Sin asignar |
| PPS-138 | Sub-task | Story 4.2: Threshold Configuration API | Done | Sin asignar |
| PPS-139 | Sub-task | Story 4.3: ThresholdConfig Component | Done | Sin asignar |
| PPS-140 | Sub-task | Story 4.4: Threshold Integration in DetailPanel | Done | Sin asignar |
| PPS-141 | Task | Epic 29: ERP Integration Microservice | Done | Sin asignar |
| PPS-142 | Sub-task | Story 29.1: Project Initialization & Foundation | Done | Sin asignar |
| PPS-143 | Sub-task | Story 29.2: Multi-Client Configuration Management | Done | Sin asignar |
| PPS-144 | Sub-task | Story 29.3: Invoice Query Endpoint (SQL Server) | Done | Sin asignar |
| PPS-145 | Sub-task | Story 29.4: Invoice Send Endpoint (SOAP - Cash Receipts) | Done | Sin asignar |
| PPS-146 | Sub-task | Story 29.5: Invoice Create Endpoint (SOAP - Invoices) | Done | Sin asignar |
| PPS-147 | Sub-task | Story 29.6: RabbitMQ Result Notifications | Done | Sin asignar |
| PPS-148 | Sub-task | Story 29.7: Production Readiness | Done | Sin asignar |
| PPS-149 | Task | Story 99.3: Switch from Mocks to Real Services | Done | Sin asignar |
| PPS-150 | Task | CC-01: Subscription Endpoint Migration | Done | Sin asignar |
| PPS-151 | Task | Epica 28 Creacion del payload Billing -> ERP creacionde facturas | Done | Sin asignar |
| PPS-152 | Sub-task | 28.1: Implement document Field in SPR Service | Done | Sin asignar |
| PPS-153 | Sub-task | Planeacion | Done | Sin asignar |
| PPS-154 | Sub-task | Story 28.2: Update Admin Portal Subscriber Form with document Field | Done | Sin asignar |
| PPS-155 | Sub-task | Story 28.3: Extend SM Billing Data with Subscriber Fields | Done | Sin asignar |
| PPS-156 | Sub-task | Story 28.4: Refactor Billing Snapshot Payload Naming | Done | Sin asignar |
| PPS-157 | Sub-task | Story 28.5: Prepare Billing Data Models for ERP | Done | Sin asignar |
| PPS-158 | Sub-task | Story 28.6: Implement ERP Manager HTTP Client | Done | Sin asignar |
| PPS-159 | Sub-task | Story 28.7: Integrate ERP Manager in Billing Logic | Done | Sin asignar |
| PPS-160 | Sub-task | Story 28.8: Unit Tests for ERP Integration | Done | Sin asignar |
| PPS-161 | Sub-task | Story 28.9: Integration & E2E Tests for ERP Flow | Done | Sin asignar |
| PPS-162 | Sub-task | Story 28.10: Documentation for ERP Manager Integration | Done | Sin asignar |
| PPS-163 | Sub-task | Story 28.11: Trigger Billing on Prepaid/Add-on Acquisition | Done | Sin asignar |
| PPS-164 | Task | Epica 5: Gestión de Addons con Pagos | Done | Sin asignar |
| PPS-165 | Sub-task | Story 5.1: Addon Catalog API | Done | Sin asignar |
| PPS-166 | Sub-task | Story 5.2: Addon Catalog View | Done | Sin asignar |
| PPS-167 | Sub-task | Story 5.3: Addon Purchase Initiation API | Done | Sin asignar |
| PPS-168 | Sub-task | Story 5.4: Payment Gateway Checkout Flow for Addons | Done | Sin asignar |
| PPS-169 | Sub-task | Story 5.5: RabbitMQ Consumer for Addon Confirmation | Done | Sin asignar |
| PPS-170 | Sub-task | Story 5.6: Addon Impact Visualization | Done | Sin asignar |
| PPS-171 | Sub-task | Integracion con los otros servicios | Done | Sin asignar |
| PPS-172 | Sub-task | Pruebas y ajustes | Done | Sin asignar |
| PPS-174 | Task | Integracion contra ERP Manager - Consulta de Facturas | Done | Sin asignar |
| PPS-175 | Sub-task | Story 28.12: Add Plan and Add-on Fee Lines to Liquidations | Done | Sin asignar |
| PPS-176 | Sub-task | Story 28.13: Fix Add-on Bucket Lines to Use Addon LineType | Done | Sin asignar |
| PPS-177 | Sub-task | Story 28.14: Integration Tests for Fee Lines | Done | Sin asignar |
| PPS-180 | Task | Epic 7: Transaction History | Done | Sin asignar |
| PPS-181 | Sub-task | Story 7.1: Transaction History API | Done | Sin asignar |
| PPS-182 | Sub-task | Story 7.2: Transaction History View | Done | Sin asignar |
| PPS-183 | Sub-task | Story 7.3: Transaction Detail | Done | Sin asignar |
| PPS-184 | Sub-task | PostgreSQL 18 en Siesa Agents | Done | Sin asignar |
| PPS-191 | Task | Integración entre servicios y presentación | Done | Sin asignar |
| PPS-192 | Task | Correcciones en Epica 9 | Done | Sin asignar |
| PPS-193 | Sub-task | Planeación | Done | Sin asignar |
| PPS-194 | Sub-task | Story 9.9: Balance Calculated Amount - Simple Charge Models | Done | Sin asignar |
| PPS-195 | Sub-task | Story 9.10: Balance Calculated Amount - Complex Charge Models + Component Aggregation | Done | Sin asignar |
| PPS-196 | Sub-task | Pruebas y Validación | Done | Sin asignar |
| PPS-197 | Task | Correcciones integraciones entre servicios | Done | Sin asignar |
| PPS-198 | Task | Refactor: Fix ERP Manager X-Client-ID Header | Done | Sin asignar |
| PPS-199 | Task | Bugs Subscription Manager | Done | Sin asignar |
| PPS-200 | Sub-task | subscriber => columna activo no obedece al formulario creacion/edicion | Done | Sin asignar |
| PPS-201 | Sub-task | email debe ser requerido, legacy tenand id debe ser nullable, subscriber key (requerido) | Done | Sin asignar |
| PPS-202 | Sub-task | Se debe mejorar el manejo de errores | Done | Sin asignar |
| PPS-203 | Sub-task | al actualizar un usuario suscriptor no lo esta permitiendo por el tema de el tipo de usuario En el modulo del suscriptor | Done | Sin asignar |
| PPS-204 | Sub-task | En la miga de pan no debe mostrar el guid, mostrar el nombre | Done | Sin asignar |
| PPS-205 | Sub-task | . En ver suscripciones del suscriptior al dar clic sobre el guid en la miga de pan esta direccionando a una 404 | Done | Sin asignar |
| PPS-206 | Sub-task |  Cuando se cancele/inactive la suscription no debe permitir seguir consumiendo | Done | Sin asignar |
| PPS-207 | Sub-task | en la edicion de metricas/plan/cargo la etapa no esta cargando los campos select | Done | Sin asignar |
| PPS-208 | Task | 99-5: Enhance User Sync with NitTercero | Done | Sin asignar |
| PPS-209 | Task | Fix: Remove Notification Polling & Enhance Real-time UX | Done | Sin asignar |
| PPS-210 | Sub-task | Integrar Gitflow en Siesa-Agents | Done | Sin asignar |
| PPS-211 | Sub-task | Actualizar arquitectura del Front a Vite + TanStack | Done | Sin asignar |
| PPS-212 | Sub-task | Actualizar las Fuentes del Siesa-Agents y Siesa-UI-Kit | Done | Sin asignar |
| PPS-213 | Sub-task | Integrar estandares/convenciones de bases de datos en Siesa-Agents | Done | Sin asignar |
| PPS-214 | Sub-task | Siesa Agents y Procesos: Consolidar estrategia de generacion de casos | Backlog | Sin asignar |
| PPS-215 | Historia | Epic 30: Billing - Payment Confirmation Flow (Existing Invoice) | Done | Sin asignar |
| PPS-216 | Sub-task | Story 30.1: Database Schema - Payment Fields | Done | Sin asignar |
| PPS-217 | Sub-task | Story 30.2: HTTP Clients Extension - SM & ERP Payment Methods | Done | Sin asignar |
| PPS-218 | Sub-task | Story 30.3: ERP RabbitMQ Consumer - Payment Results | Done | Sin asignar |
| PPS-219 | Sub-task | Story 30.4: Confirm Payment Endpoint - Full Orchestration | Done | Sin asignar |
| PPS-220 | Sub-task | Story 30.5: Payment Confirmation Pass-through Mode | Done | Sin asignar |
| PPS-221 | Sub-task | Story 30.6: Payment Confirmation Flow Refinements | Done | Sin asignar |
| PPS-222 | Task | Enterprise Invoice Management (Epic 32) | Done | Sin asignar |
| PPS-223 | Sub-task | Refactor Invoice Query for Pagination (Story 32.1) | Done | Sin asignar |
| PPS-224 | Sub-task | Invoice Summary Endpoint (Story 32.2) | Done | Sin asignar |
| PPS-225 | Task | Epic 10: Advanced Billing Management | Done | Sin asignar |
| PPS-226 | Sub-task | Story 10.1: Invoice Listing API with Pagination | Done | Sin asignar |
| PPS-227 | Sub-task | Story 10.2: Financial Summary API | Done | Sin asignar |
| PPS-228 | Sub-task | Story 10.3: Unified Invoice View | Done | Sin asignar |
| PPS-229 | Sub-task | Story 10.4: Export Invoices to Excel | Done | Sin asignar |
| PPS-230 | Historia | [ELIMINAR] Creada por error - usar PPS-232 | Done | Sin asignar |
| PPS-231 | Historia | Epic 31: Subscriber Dashboard API | Done | Sin asignar |
| PPS-232 | Sub-task | 31.1 - Notification-Service - Enable API Key Authentication on Admin Notifications | Done | Sin asignar |
| PPS-233 | Sub-task | 31.2 - SM-Service - Environment Configuration for Notification Service | Done | Sin asignar |
| PPS-234 | Historia | Epic 9: Executive Dashboard and Navigation Improvements | Done | Sin asignar |
| PPS-235 | Sub-task | Story 9.1: Dashboard Metrics API Integration | Done | Sin asignar |
| PPS-236 | Sub-task | Story 9.2: Payment History Dashlet API | Done | Sin asignar |
| PPS-237 | Sub-task | Story 9.3: Executive Dashboard View | Done | Sin asignar |
| PPS-238 | Sub-task | Story 9.4: Navigation Restructure | Done | Sin asignar |
| PPS-239 | Sub-task | Story 9.5: Subscription Status Filter | Done | Sin asignar |
| PPS-240 | Sub-task | 31.3 - SM-Service - Notification HTTP Client | Done | Sin asignar |
| PPS-241 | Sub-task | 31.4 - SM-Service - Subscriber Dashboard Endpoint | Done | Sin asignar |
| PPS-242 | Sub-task | 31.5 - Documentation - Fix Notification Service Port | Done | Sin asignar |
| PPS-243 | Historia | Story 8.18: Rich Text Editor for Add-on Description | Done | Sin asignar |
| PPS-244 | Task | Story 8.18: Rich Text Editor for Add-on Description | Done | Sin asignar |
| PPS-245 | Historia | CC-12: Invoice Create Endpoint - Corregir formato a Service Financial Document | Done | Sin asignar |
| PPS-246 | Sub-task | CC-12: Invoice Create Endpoint - Corregir formato a Service Financial Document | In Progress | Sin asignar |
| PPS-247 | Task | Reportar tiempo en plataforma Google Skill Boost | In Progress | Sin asignar |
| PPS-248 | Sub-task | Google Cloud Fundamentals: Core Infrastructure | Done | Sin asignar |
| PPS-249 | Sub-task | Developing Containerized Applications on Google Cloud | Done | Sin asignar |
| PPS-250 | Sub-task | Develop Serverless Applications on Cloud Run | Done | Sin asignar |
| PPS-251 | Sub-task | Security & Identity Fundamentals | In Progress | Sin asignar |
| PPS-252 | Sub-task | 31.6 - SM-Service - Active Plans Count Dashboard | Done | Sin asignar |
| PPS-253 | Task | Implement Invoice Pagination & Filtering Fix | Done | Sin asignar |
| PPS-254 | Sub-task | Ajustes sobre la entrega  30 ene 2026 | Done | Sin asignar |
| PPS-255 | Task | Validar implementación de siesa-ui-kit | Done | Sin asignar |
| PPS-256 | Sub-task | Ajustes sobre entrega 30 Enero | Done | Sin asignar |
| PPS-257 | Sub-task | Story 9.6: Dashboard Visual Enhancement - Vibrant & Dynamic Style | Done | Sin asignar |
| PPS-258 | Sub-task | Story 9.7: Active Plans Count Dashlet | Done | Sin asignar |
| PPS-259 | Sub-task | Story 9.8: Add Financial Summary Dashlets to Dashboard | Done | Sin asignar |
| PPS-260 | Sub-task | Story 9.9: Reorganize Dashboard Grid into 2 Rows | Done | Sin asignar |
| PPS-261 | Sub-task | Story 9.10: Redesign Subscriptions View with Horizontal Layout | Done | Sin asignar |
| PPS-262 | Sub-task | Story 9.11: Integrate Addons Inline in Subscription View | Done | Sin asignar |
| PPS-263 | Sub-task | Story 9.12: Update /subscriptions Page for New Layout | Done | Sin asignar |
| PPS-264 | Sub-task | Story 9.13: Consumption Visualization Components | Done | Sin asignar |
| PPS-265 | Sub-task | Story 9.14: Consumption Data Integration | Done | Sin asignar |
| PPS-266 | Sub-task | 9.15: Consumption Data Integration | Done | Sin asignar |
| PPS-267 | Sub-task | 31.7 - Mejora en vista de subscripciones para mostrar planes | Done | Sin asignar |
| PPS-268 | Sub-task | 31.8 - Consumir endpoints de facturas para baldosas | Done | Sin asignar |
| PPS-269 | Sub-task | 31.9 - Reporte de consumo de plan para dashlet | Done | Sin asignar |
| PPS-270 | Task | Migración de Payment Gateway: Stripe → Nuvei | Done | Sin asignar |
| PPS-271 | Sub-task | GitFlow: Actualizar estandares en Siesa-Agents | Done | Sin asignar |
| PPS-272 | Sub-task | Story 9.16: Store View - Product Catalog with Shopping Cart | Done | Sin asignar |
| PPS-273 | Historia | Epic 11: Dashboard Row 1 Visualizations | Done | Sin asignar |
| PPS-274 | Sub-task | Story 11.1: Consumption History Backend Proxy | Done | Sin asignar |
| PPS-275 | Sub-task | Story 11.2: Consumption History Frontend Integration | Done | Sin asignar |
| PPS-276 | Sub-task | Story 11.3: Consumption History Chart Component | Done | Sin asignar |
| PPS-277 | Sub-task | Story 11.4: Dashboard Grid Reorganization | Done | Sin asignar |
| PPS-278 | Sub-task | Story 11.5: Invoice Aging Backend Integration | Done | Sin asignar |
| PPS-279 | Sub-task | Story 11.6: Invoice Aging Pie Chart Component | Done | Sin asignar |
| PPS-280 | Historia | Story 10.6: Configurable Overage Limit for Package Charges - Backend | Done | Sin asignar |
| PPS-281 | Historia | Story 10.7: Configurable Overage Limit for Package Charges - Admin Portal UI | Done | Sin asignar |
| PPS-282 | Historia | Ajuste para producción Subscriber Portal | Done | Sin asignar |
| PPS-283 | Historia | Ajuste para producción del Subscription Manager | Done | Sin asignar |
| PPS-284 | Sub-task | UI Improvements Testing & Documentation (Story 32.3) | Done | Sin asignar |
| PPS-285 | Sub-task | Story 11.7: UI Improvements Testing & Validation | Done | Sin asignar |
| PPS-286 | Historia | Epic 34: SOAP/SQL to Connekta REST API Migration | Done | Sin asignar |
| PPS-287 | Sub-task | Story 1.8: Global Session Expiration Handler | Done | Sin asignar |
| PPS-288 | Epic | BMAD 6-Beta | Backlog | Sin asignar |
| PPS-289 | Historia | Definición de Estrategia de Extensión para Agentes y Workflows  | Backlog | Sin asignar |
| PPS-290 | Task | Migración de Integración con Jira hacia nueva version Siesa-Agents | Done | Sin asignar |
| PPS-291 | Task | Migración del Workflow de Generación de Documentación de Usuario Final | Done | Sin asignar |
| PPS-292 | Task | Migración del Sistema GitFlow Corporativo | Done | Sin asignar |
| PPS-293 | Task | Implementación de Estándares Corporativos | Done | Sin asignar |
| PPS-294 | Task | Implementación de Especificaciones UI (UI Kit) | In Progress | Sin asignar |
| PPS-295 | Sub-task | Sebas: Investigacion arquitectura de extensión de workflows | Done | Sin asignar |
| PPS-296 | Sub-task | Santi: Investigacion arquitectura de extensión de workflows | Done | Sin asignar |
| PPS-297 | Sub-task | Investigacion arquitectura de extensión de workflows | Backlog | Sin asignar |
| PPS-298 | Historia | Implementacion del nuevo Prompt maestro de procesos | Done | Sin asignar |
| PPS-299 | Task | Admin Portal - Internationalization (i18n) | Done | Sin asignar |
| PPS-300 | Task | Epic 12: Multilanguage Support (i18n) | Done | Sin asignar |
| PPS-301 | Historia | Labs Siesa-Agents new version Beta | Backlog | Sin asignar |
| PPS-302 | Sub-task | Desarrollar con todo el flujo Siesa-Agents el submódulo de Financiero | Done | Sin asignar |
| PPS-303 | Sub-task | Desarrollar con todo el flujo Siesa-Agents el submódulo de HR | Done | Sin asignar |
| PPS-304 | Sub-task | Desarrollar con todo el flujo Siesa-Agents el submódulo de Inventory | In Progress | Sin asignar |
| PPS-305 | Sub-task | Desarrollar con todo el flujo Siesa-Agents el App Shell | In Progress | Sin asignar |
| PPS-306 | Task | Implementación de Búsqueda de Facturas por Número e ID (Frontend) | Done | Sin asignar |
| PPS-307 | Task | Migración de Búsqueda de Facturas a Server-Side (Frontend & Backend) | Done | Sin asignar |
| PPS-308 | Historia | Epic 35: External Catalog Data API | Done | Sin asignar |
| PPS-309 | Sub-task | Story 35.1: PC-Service - Shared Charge Model Helper & Plans Catalog-Data Endpoint | Done | Sin asignar |
| PPS-310 | Sub-task | Story 35.2: PC-Service - Addons Catalog-Data Endpoint | Done | Sin asignar |
| PPS-311 | Sub-task | Story 35.3: SM-Service - External Catalog-Data Proxy Endpoints | Done | Sin asignar |
| PPS-312 | Historia | Epic 13: Store Catalog Integration with Real Data | Done | Sin asignar |
| PPS-313 | Sub-task | [DUPLICADO - ELIMINAR] Story 35.2: PC-Service - Addons Catalog-Data Endpoint | Done | Sin asignar |
| PPS-314 | Sub-task | [DUPLICADO - ELIMINAR] Story 35.3: SM-Service - External Catalog-Data Proxy Endpoints | Done | Sin asignar |
| PPS-315 | Sub-task | Story 13.1: Store Catalog Backend — Models & API Client | Done | Sin asignar |
| PPS-316 | Sub-task | Story 13.2: Store Service & Endpoints | Done | Sin asignar |
| PPS-317 | Sub-task | Story 13.3: Store Frontend Integration | Done | Sin asignar |
| PPS-318 | Task | Story 32.4: Invoice Query Search Filter | Done | Sin asignar |
| PPS-319 | Task | Correcciones de reportes | Done | Sin asignar |
| PPS-320 | Task | Mejoras de UI/UX en Filtros de Facturas y Dashboard (Frontend) | Done | Sin asignar |
| PPS-321 | Historia | Ajustar filtro producto en listview de metricas, y tamaño de texto en demas filtros | Done | Sin asignar |
| PPS-322 | Task | El nit no deberia consultarse desde la liquidacion del billing | Done | Sin asignar |
| PPS-323 | Task | mejorar diseño boton  modo claro / oscuro | Done | Sin asignar |
| PPS-324 | Task | Terminar de implementar tienda con datos reales hasta la pantalla de nuvei   | Done | Sin asignar |
| PPS-325 | Task | Revisar / Optimizar listview de las facturas | Done | Sin asignar |
| PPS-326 | Task | Mostrar el consumo que se excede al consumir un plan que sobrepasa el 100% | Done | Sin asignar |
| PPS-327 | Task | Epic 35: Centralizar cálculo de precios en Billing-Service y exponer API de catálogo para la tienda | Done | Sin asignar |
| PPS-328 | Task | cambiar icono de siesa en los correos de las notificaiones | Done | Sin asignar |
| PPS-329 | Task | Revisar por que en el pago de una factura estan llegando duplicados correos  | Done | Sin asignar |
| PPS-330 | Task | scripts de migracion de desde contratos CRM hacia el suscription  | Backlog | Sin asignar |
| PPS-331 | Task | Migrar SM a BMAD 6 Siesa Agents | In Progress | Sin asignar |
| PPS-332 | Task | Cantidad de resultados en los listviews muestra valores incorrectos | Done | Sin asignar |
| PPS-333 | Task | El campo id legacy debe ser nullable y opcional  | In Progress | Sin asignar |
| PPS-334 | Task | campo clave del subscriptor debe cambiarsele el nombre por  id instancia Google Cloud Platform | Backlog | Sin asignar |
| PPS-335 | Sub-task | Story 35.1: PC-Service - Shared Charge Model Helper & Plans External Catalog-Data Endpoint | Done | Sin asignar |
| PPS-336 | Sub-task | Story 35.2: PC-Service - Addons External Catalog-Data Endpoint | Done | Sin asignar |
| PPS-337 | Sub-task | Story 35.3: SM-Service - External Catalog-Data Proxy Endpoints | Done | Sin asignar |
| PPS-338 | Sub-task | Story 35.4: Pricing Calculation Unification — Single Source of Truth via Billing-Service | Done | Sin asignar |
| PPS-339 | Sub-task | Story 35.5: Catalog Pricing Type Metadata & Base Price Calculation | Done | Sin asignar |
| PPS-340 | Sub-task | Story 35.6: Balance-Manager Pricing Delegation — Complete Single Source of Truth | Done | Sin asignar |
| PPS-341 | Bug | spr-service: unique constraint on subscriber_legacy_tenant_id blocks nullable behavior | In Progress | Sin asignar |
| PPS-342 | Task | Quitar lo pagado del informe de cartera del subs portal | Done | Sin asignar |
| PPS-343 | Task | Quitar baldosa pagado del dashboard del subs portal  | Done | Sin asignar |
| PPS-344 | Task | El código del plan debe permitir minúsculas, caso legacy  | Done | Sin asignar |
| PPS-345 | Task | El botón de "Marcar todo como leído" no funciona correctamente | Done | Sin asignar |
| PPS-346 | Sub-task | 13-1: Store Catalog Backend — Modelos y API Client SM-Service | Done | Sin asignar |
| PPS-347 | Sub-task | 13-2: Store Service y Endpoints REST | Done | Sin asignar |
| PPS-348 | Sub-task | 13-3: Store Frontend — Integración con datos reales | Done | Sin asignar |
| PPS-349 | Sub-task | 13-4: Store Backend — Campos de pricing (setup_fee, tiers, billing_cycle) | Done | Sin asignar |
| PPS-350 | Sub-task | 13-5: Store Frontend — Visualización de tipos de pricing | Done | Sin asignar |
| PPS-351 | Sub-task | 13-6: Store Checkout — Carrito y redirección a Nuvei HPP | Done | Sin asignar |
| PPS-352 | Task | ACL/RBAC en el portal del cliente. Multiples Roles por subscriptor. | Backlog | Sin asignar |
| PPS-353 | Task | Agregar métricas de compras de addons al portal  | Done | Sin asignar |
| PPS-354 | Sub-task | [SM 37.1] Balance Manager — Consumption History by Bucket IDs | Done | Sin asignar |
| PPS-355 | Sub-task | [SM 37.2] SM-Service — Addon Charts Unified Endpoint | Done | Sin asignar |
| PPS-356 | Sub-task | [SM 37.3] SM-Service — Addon Pricing Metrics & Last Acquired | Done | Sin asignar |
| PPS-357 | Sub-task | [Portal 16.1] Backend BFF — Models, API Client & Endpoint | Done | Sin asignar |
| PPS-358 | Sub-task | [Portal 16.2] Frontend — Charts Components + Data Layer | Done | Sin asignar |
| PPS-359 | Sub-task | [Portal 16.3] Frontend — Dashboard Integration & i18n | Done | Sin asignar |
| PPS-360 | Sub-task | [Portal 16.4] Addon Cost Dashlet & Pricing Fields | Done | Sin asignar |

---

> **Nota API:** Los Subproyectos (nivel 3) no aparecen en resultados JQL. Solo son visibles como campo `parent` en sus issues hijos.
> Datos obtenidos con: `POST /rest/api/3/search/jql` con paginación `nextPageToken`.