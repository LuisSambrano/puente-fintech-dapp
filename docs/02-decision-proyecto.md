# Decisión del Proyecto - One Man Army

## Transparencia Total

**Experiencia del equipo**:

- Celo: No
- Farcaster/MiniPay: No
- Web3/blockchain: Poco
- Next.js/React: Nada

**Herramientas que SÍ tenemos**:

- Google AI Pro (de pago)
- Gemini Pro High
- Google AI Studio / Labs
- Google NotebookLM
- Gems de Google
- Supabase
- Vercel
- GitHub
- Antigravity (Claude Sonnet 4.5)
- v0

**Estrategia**: Usar IA como co-piloto intensivo para compensar gaps técnicos. Documentar TODO el proceso de aprendizaje.

---

## El Problema Real

### Contexto: Venezuela

**Situación actual**:

- Economía dolarizada de facto
- Remesas son línea de vida para muchas familias
- Acceso bancario limitado
- Muchas personas sin tarjetas de crédito/débito
- Servicios tradicionales (Western Union, etc.) son caros y lentos

**Problema específico**:
Enviar y recibir dinero en Venezuela es:

1. Caro (comisiones altas)
2. Lento (días de espera)
3. Requiere documentación/cuentas bancarias
4. No accesible para todos

### Oportunidad

**Celo + Passport = Solución**

- **Celo**: Blockchain móvil-first, transacciones baratas
- **Passport**: Verificación de identidad sin necesidad de documentos tradicionales
- **MiniPay**: Wallet accesible desde el teléfono

**Propuesta**: Plataforma de remesas peer-to-peer con verificación de identidad pero sin necesidad de cuenta bancaria.

---

## Decisión de Track

### MiniApps Track (All In)

**Por qué**:

1. **Premio mayor**: 3,000 CELO vs 1,000 CELO (3x más)
2. **Alineación con problema**: MiniPay es perfecto para remesas
3. **Aprendizaje valioso**: Aunque no conocemos Farcaster/MiniPay, es el momento de aprender
4. **Documentación**: El proceso de aprendizaje ES el contenido de VibeCoding

**Riesgo**:

- Curva de aprendizaje empinada
- 5 semanas para aprender + construir

**Mitigación**:

- Usar IA intensivamente (Gemini, v0, Claude)
- Mentorías del buildathon
- Documentar cada paso del aprendizaje

---

## Decisión de Bounties

### Human.Tech Passport ✅

**Por qué es ideal**:

- Remesas necesitan verificación de identidad (KYC/AML)
- Passport permite verificar sin documentos tradicionales
- Muchos venezolanos no tienen documentos válidos
- Previene fraude y sybil attacks

**Caso de uso concreto**:

```
Usuario venezolano sin pasaporte válido:
1. Verifica identidad con Passport (proof-of-personhood)
2. Puede recibir remesas sin cuenta bancaria
3. Receptor verificado = más confianza para el remitente
```

### v0 ✅

**Por qué**:

- No tenemos experiencia con React/Next.js
- v0 genera componentes listos
- Acelera desarrollo de UI significativamente
- Podemos enfocarnos en lógica de negocio

**Trade-off**:

- Tenemos que publicar como template público
- Mostrar branding de v0
- **Esto está bien**: Es transparente, es VibeCoding

---

## El Proyecto: "Puente"

### Nombre

**Puente** (Bridge en español)

**Por qué**:

- Conecta personas entre países
- Puente entre quien envía y quien recibe
- Puente entre economías
- Simple, memorable, en español

### Descripción de Una Línea

"Remesas peer-to-peer para Venezuela usando Celo, sin necesidad de banco ni documentos tradicionales."

### Funcionalidad Core (MVP)

**Para el remitente** (ej: familiar en USA):

1. Conecta wallet (MiniPay o cualquier wallet)
2. Ingresa monto en USD
3. Ingresa identificador del receptor (teléfono o wallet)
4. Envía CELO/cUSD

**Para el receptor** (ej: persona en Venezuela):

1. Verifica identidad con Passport (una sola vez)
2. Recibe notificación de remesa
3. Acepta la transferencia
4. Fondos en su wallet de MiniPay
5. Puede convertir a bolívares o usar directamente

**Características clave**:

- Sin cuenta bancaria necesaria
- Verificación de identidad con Passport
- Transacciones en minutos, no días
- Comisiones mínimas (solo gas de Celo)
- Accesible desde el teléfono

---

## Stack Técnico

### Frontend

```
- Framework: Next.js 14 (App Router)
- UI: v0 + TailwindCSS
- Wallet: RainbowKit o similar
- Estado: React Context (empezar simple)
```

**Razonamiento**:

- Next.js porque v0 lo genera
- v0 porque no sabemos React
- RainbowKit porque simplifica wallets
- Context porque es más simple que Zustand para empezar

### Backend

```
- Hosting: Vercel (integración directa con Next.js)
- Database: Supabase (ya lo conocemos)
- API: Next.js API Routes
```

**Razonamiento**:

- Vercel porque ya lo tenemos
- Supabase porque ya lo conocemos (ventaja competitiva)
- API Routes porque vienen con Next.js

### Blockchain

```
- Red: Celo Mainnet
- SDK: @celo/contractkit o viem
- Wallet: MiniPay (para MiniApps track)
- Identidad: Human.Tech Passport
```

**Razonamiento**:

- Celo porque es requisito
- MiniPay porque es el track elegido
- Passport porque es el bounty + necesidad real

### Smart Contracts

```
- Lenguaje: Solidity
- Framework: Hardhat
- Testing: Hardhat + Chai
```

**Razonamiento**:

- Hardhat porque tiene buena documentación
- Empezar con contrato simple (escrow básico)
- Iterar según necesidad

---

## Estrategia de Aprendizaje

### Cómo Vamos a Aprender

**No sabemos**:

- Celo
- MiniPay
- React/Next.js
- Solidity (poco)

**Estrategia**:

1. **IA como maestro**:
   - Gemini Pro para explicaciones conceptuales
   - Claude (Antigravity) para código y arquitectura
   - v0 para componentes de UI
   - NotebookLM para sintetizar documentación

2. **Mentorías**:
   - Sesión 1 (Semana 1): Arquitectura general + Celo basics
   - Sesión 2 (Semana 3): MiniPay integration + optimización
   - Sesión 3 (Semana 5): Review pre-submission

3. **Documentación oficial**:
   - Celo docs
   - MiniPay docs
   - Human.Tech Passport docs
   - v0 docs

4. **Construcción iterativa**:
   - Empezar con lo más simple posible
   - Agregar complejidad gradualmente
   - Documentar cada decisión

### Cronograma Realista

**Semana 1 (Ene 19-25): Aprendizaje + Setup**

- Días 1-3: Tutoriales de Celo, Next.js, MiniPay
- Días 4-5: Setup de proyecto, primer deploy
- Días 6-7: Primer componente funcional

**Semana 2 (Ene 26 - Feb 1): MVP Básico**

- Wallet connection
- Envío simple de CELO
- UI básica con v0

**Semana 3 (Feb 2-8): Passport + Lógica Core**

- Integración de Passport
- Lógica de remesas
- Base de datos (Supabase)

**Semana 4 (Feb 9-15): Features Completas**

- Notificaciones
- Historial de transacciones
- Optimizaciones

**Semana 5 (Feb 16-22): Polish + Testing**

- UI/UX refinamiento
- Testing exhaustivo
- Optimización de gas

**Semana 6 (Feb 23-27): Submission**

- Video demo
- Presentación
- Documentación
- Submit

---

## Ventajas Competitivas

### 1. Problema Real

No es un proyecto "de juguete". Las remesas a Venezuela son un problema real que afecta a millones.

### 2. Herramientas de IA

Tenemos acceso a herramientas de IA de pago que la mayoría no tiene:

- Google AI Pro
- Gemini Pro High
- NotebookLM

Esto compensa nuestra falta de experiencia técnica.

### 3. Supabase

Ya conocemos Supabase. Esto es una ventaja real para el backend.

### 4. VibeCoding

El proceso de aprendizaje documentado ES contenido valioso. Mostrar cómo alguien sin experiencia construye algo real.

---

## Riesgos y Mitigaciones

### Riesgo 1: Curva de Aprendizaje

**Riesgo**: Aprender Celo + MiniPay + React en 5 semanas

**Mitigación**:

- Empezar con tutoriales oficiales
- Usar IA intensivamente
- Mentorías estratégicas
- Scope reducido (MVP primero)

### Riesgo 2: Complejidad Técnica

**Riesgo**: Smart contracts + frontend + backend

**Mitigación**:

- Empezar con contrato simple (transferencia básica)
- Usar templates de v0
- Copiar de ejemplos oficiales (con atribución)

### Riesgo 3: Tiempo

**Riesgo**: 5 semanas no es mucho

**Mitigación**:

- MVP ultra-enfocado
- Features "nice to have" para después
- Priorización ruthless

### Riesgo 4: Generación de Transacciones

**Riesgo**: Necesitamos volumen para el bonus

**Mitigación**:

- Deploy en Semana 2 (temprano)
- Invitar a venezolanos a probar
- Incentivos para early adopters (si es posible)

---

## Métricas de Éxito

### Para el Buildathon

- [ ] Proyecto funcional en Celo Mainnet
- [ ] Passport integrado correctamente
- [ ] UI construida con v0
- [ ] Al menos 50 transacciones reales
- [ ] Video demo profesional
- [ ] Documentación completa

### Para VibeCoding

- [ ] Proceso de aprendizaje documentado
- [ ] Decisiones técnicas explicadas
- [ ] Errores y soluciones compartidos
- [ ] Código comentado y claro
- [ ] README que explica el "por qué"

### Para el Impacto Real

- [ ] Al menos 10 usuarios reales lo prueban
- [ ] Feedback positivo de venezolanos
- [ ] Potencial de uso post-buildathon

---

## Próximos Pasos Inmediatos

1. **Crear estructura de proyecto**
   - Directorio local
   - Repositorio GitHub
   - Documentación base

2. **Empezar tutoriales**
   - Celo Academy (en español)
   - MiniPay docs
   - Next.js tutorial

3. **Primera mentoría**
   - Validar arquitectura
   - Confirmar viabilidad técnica
   - Obtener recursos recomendados

4. **Setup inicial**
   - Next.js project
   - Supabase project
   - Celo wallet para testing

---

## Filosofía del Proyecto

**Esto NO es**:

- Un proyecto perfecto
- Código de producción enterprise
- Una solución completa a todos los problemas

**Esto ES**:

- Un MVP funcional
- Un proceso de aprendizaje documentado
- Una solución real a un problema real
- Construcción transparente en público

**Para VibeCoding**: Mostrar que alguien sin experiencia puede construir algo valioso con las herramientas correctas y transparencia total.

---

## Siguiente Documento

Vamos a crear:

- `02-arquitectura.md`: Diseño técnico del sistema
- `03-plan-aprendizaje.md`: Qué necesitamos aprender y cómo
- `04-setup.md`: Pasos para inicializar el proyecto

¿Procedemos a crear la estructura del proyecto?
