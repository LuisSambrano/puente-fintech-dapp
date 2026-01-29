# LatAm Hubs Buildathon 2026 - One Man Army

## Contexto

Esto es un buildathon de VibeCoding. No se trata de vender humo, sino de construir en público y mostrar el proceso real de desarrollo.

---

## 🎯 Visión Híbrida: 3 Productos en 1

**Puente** no es solo una app de remesas. Es una **plataforma financiera completa** diseñada para la diáspora venezolana.

### El Problema de los Competidores

Los competidores actuales se enfocan en **UNA** sola cosa:

- **ElDorado**: Solo P2P (lento, complejo)
- **Felix Pago**: Solo remesas (caro, no Venezuela)
- **Cafecito**: Solo donaciones (caro, solo Argentina)
- **GoFundMe**: Solo crowdfunding (difícil retiro en LATAM)

### La Solución Puente

Un modelo híbrido que combina lo mejor de los tres mundos:

1. **Fase 1 (Buildathon)**: **Remesas P2P** 💸
   - MVP enfocado en el track MiniApps.
   - Enviar/Recibir cUSD instantáneo.
   - Verificación con Passport.

2. **Fase 2 (Post-Buildathon)**: **Crowdfunding** 🆘
   - Campañas para emergencias médicas (caso de uso crítico en Venezuela).
   - Comisiones del 2% (vs 5-10% de GoFundMe).

3. **Fase 3 (Expansión)**: **Donaciones a Creadores** ☕
   - Estilo "Cafecito" pero en blockchain.
   - Perfiles públicos para recibir tips.
   - Comisiones del 1% (vs 10% de Cafecito).

**Inspiración**: **Nubank**. Empezó solo con una tarjeta de crédito (un producto nicho) y hoy es un banco completo de $30B+. Nosotros empezamos con remesas.

---

## Información Básica

**Equipo**: One Man Army  
**Periodo**: 19 enero - 27 febrero 2026  
**Deadline**: 27 febrero, 20:59 hora Argentina (23:59 UTC)

### Tracks Disponibles

**MiniApps Track** (Nuestro Foco Principal)

- 1er lugar: 3,000 CELO + 300 cUSD
- Requisito: PWA integrada con MiniPay.

**Bounties de Sponsors**

- **Human.Tech**: Integrar Passport (Lo usaremos para KYC sin documentos).
- **v0**: Usar v0 para UI (Lo usaremos para acelerar frontend).

### Requisitos Técnicos

- Desplegar en Celo Mainnet (obligatorio).
- URL pública funcionando (Vercel).
- Repositorio GitHub público.
- Video demo (máx 3 min).
- Entregar vía Karma Gap.

**Bonus**: Proyectos con más transacciones en Mainnet tienen consideración especial. Por eso el MVP debe ser **usable** rápido.

---

## Nuestro Enfoque

### Por Qué VibeCoding

Este buildathon es de VibeCoding. Eso significa:

1. **Construir en público**: Mostrar el proceso, no solo el resultado.
2. **Transparencia total**: Documentar decisiones, errores, aprendizajes.
3. **Razonamiento visible**: Explicar el "por qué" detrás de cada decisión técnica.
4. **Proceso iterativo**: Mostrar cómo evolucionan las ideas (ej: de "solo remesas" a "modelo híbrido").

### El Meta-Proyecto

No solo vamos a construir una app. Vamos a documentar:

1. **Brainstorming**: Cómo llegamos a la idea híbrida.
2. **Decisiones técnicas**: Por qué Privy en vez de RainbowKit.
3. **Arquitectura**: Cómo manejamos 3 productos en una base de datos.
4. **Problemas encontrados**: Qué falló y cómo lo resolvimos.
5. **Integración de herramientas**: Cómo usamos IA para compensar ser "One Man Army".

---

## Estructura de Documentación

### Lo Que Vamos a Documentar

```
one-man-army/
├── docs/
│   ├── 00-contexto.md              # Este archivo (Visión General)
│   ├── 02-decision-proyecto.md     # Por qué el modelo híbrido
│   ├── 03-stack-tecnico.md         # Stack con Privy + Celo + Supabase
│   ├── 07-mision-vision.md         # Roadmap a 2027
│   ├── 10-gtm-strategy.md          # Cómo vamos a crecer
│   ├── 11-competidores.md          # Análisis profundo de competencia
│   └── 99-iteraciones.md           # Log de cambios (Pivot a Híbrido)
```

---

## Decisiones Iniciales (Actualizadas)

### 1. ¿Qué Track?

**MiniApps Track**. Es el que tiene mejor premio y se alinea perfecto con remesas móviles.

### 2. ¿Qué Bounties?

- **Human.Tech Passport**: CRÍTICO para nuestra identidad "sin documentos".
- **v0**: CRÍTICO para construir la UI rápido sin ser expertos en React.

### 3. ¿Qué Vamos a Construir?

**Puente MVP (Fase 1)**:

- Login con Email (Privy).
- Wallet no-custodial invisible.
- Enviar cUSD a otro usuario.
- Verificación básica con Passport.
- Historial de transacciones.

_Las fases de Crowdfunding y Donaciones quedan documentadas y en arquitectura, pero implementadas post-buildathon para garantizar entrega._

---

## Filosofía del Proyecto

**Esto NO es**:

- Un fork de un proyecto existente.
- Una "memecoin" o proyecto especulativo.

**Esto ES**:

- Una solución real a los $4-5B de remesas venezolanas.
- Un intento serio de competir con Western Union, Felix Pago y ElDorado.
- Un proyecto construido sobre infraestructura sólida (Celo + Privy + Supabase).

**Para VibeCoding**: Mostrar cómo pensamos, cómo decidimos, cómo pivotamos (a híbrido) y cómo construimos.
