# Decisión del Proyecto - One Man Army

## Transparencia Total

**Experiencia del equipo**:

- Celo: No
- Farcaster/MiniPay: No
- Web3/blockchain: Poco
- Next.js/React: Nada

**Herramientas y Ventajas**:

- **Stack de Inteligencia (2026)**:
  - **IDE**: Google Antigravity.
  - **Planning**: Gemini 3 Pro (HPM).
  - **Execution**: Claude Sonnet 4.5.
- **Herramientas No-Code/Low-Code**: v0 para UI, Supabase para backend.
- **Infraestructura Moderna**: Privy para wallets, Celo para blockchain.

**Estrategia**: Usar IA para cerrar la brecha técnica y herramientas "best-in-class" (Privy) para cerrar la brecha de UX.

---

## 🎯 El Pivote: De Remesas a Modelo Híbrido

### ¿Por qué cambiar la visión?

Originalmente pensamos solo en remesas. Pero al analizar a los competidores (**ElDorado, Felix Pago, Cafecito**), descubrimos que **todos se enfocan en nichos aislados**:

1. **Solo Remesas** (Felix Pago, Western Union): Ignoran donaciones y emergencias.
2. **Solo Crowdfunding** (GoFundMe): Usado masivamente por venezolanos para emergencias médicas, pero con fees altísimos y difícil retiro.
3. **Solo Donaciones** (Cafecito, Patreon): Excluyen a la mayoría de Latinoamérica o cobran fees excesivos (10%+).

**La Oportunidad**:
Los usuarios son los mismos. La persona que envía remesas (Fase 1) es la misma que dona a una emergencia médica (Fase 2) y apoya a un creador de contenido (Fase 3).

### El Modelo 3-en-1

**Puente** unifica estos flujos en una sola plataforma financiera:

1. **Remesas P2P** (Core MVP)
2. **Crowdfunding** (Emergencias)
3. **Donaciones** (Creadores)

---

## El Problema Real (Validado)

### Contexto: Venezuela 2026

- **Economía**: Dolarizada de facto, pero digitalmente fragmentada.
- **Necesidad**: Mover dinero sin fricción, sin documentos tradicionales, y sin bancos intermediarios.
- **Gap de Mercado**: $4-5B anuales en remesas informales.

### Competencia vs Puente

| Característica   | ElDorado   | Felix Pago       | Cafecito   | **Puente**           |
| ---------------- | ---------- | ---------------- | ---------- | -------------------- |
| **Modelo**       | P2P Crypto | Remesas WhatsApp | Donaciones | **Híbrido (3-en-1)** |
| **Fee**          | ~1%        | $2.99            | ~10%       | **<1% (Blockchain)** |
| **Tiempo**       | Minutos    | Horas            | Días       | **Segundos**         |
| **Venezuela**    | Informal   | ❌ No            | ❌ No      | **✅ Sí (Nativo)**   |
| **Crowdfunding** | ❌ No      | ❌ No            | ❌ No      | **✅ Sí (Roadmap)**  |

---

## Decisión de Track y Bounties

### MiniApps Track (Foco Principal)

**MiniPay** es el vehículo perfecto para adopción masiva en África y ahora LATAM.

- **Decisión**: El MVP debe ser una PWA optimizada para MiniPay.

### Human.Tech Passport ✅

**El "Killer Feature"**: Verificación de identidad **sin documentos**.

- Muchos venezolanos tienen pasaportes vencidos o no tienen documentos aceptados internacionalmente.
- Passport permite verificar "humanidad" sin burocracia.

### v0 ✅

**Acelerador Crítico**:

- No sabemos React/Tailwind a nivel experto.
- v0 genera la UI, nosotros conectamos la lógica.

---

## El Proyecto: "Puente"

### Descripción

"La plataforma financiera todo-en-uno para la diáspora venezolana: Remesas, Crowdfunding y Donaciones en Celo."

### Funcionalidad Core (MVP - Fase 1)

Nos enfocaremos SOLO en **Remesas** para el buildathon para garantizar calidad y entrega.

1. **Onboarding Invisible**: Login con Email (Privy). Wallet creada en background.
2. **Enviar Dinero**: Interfaz simple "Zelle-like".
3. **Verificación**: Integración con Passport.
4. **Recibir**: Fondos instantáneos en cUSD.

_Crowdfunding y Donaciones quedan diseñados pero se implementan post-buildathon._

---

## Riesgos y Mitigaciones Actualizadas

### Riesgo: Scope Creep (Intentar hacer todo)

**Mitigación**:

- **Buildathon**: Solo Remesas P2P.
- **Post-Buildathon**: Agregar Crowdfunding/Donaciones.
- La arquitectura de base de datos sí contemplará el modelo híbrido desde el día 1, pero el frontend solo mostrará remesas.

### Riesgo: Adopción Técnica

**Mitigación**:

- Cambio de RainbowKit a **Privy**. RainbowKit es genial pero requiere "entender wallets". Privy permite experiencia "Web2" (email login) que es crítica para nuestros usuarios no técnicos.

---

## Próximos Pasos (Inmediatos)

1. Configurar **Privy** (Auth + Embedded Wallets).
2. Desplegar contratos básicos en Celo Mainnet.
3. Integrar Passport para verificado.
4. Construir UI de remesas con v0.
