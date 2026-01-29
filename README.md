<div align="center">

# 🌉 Puente

### La Super-App Financiera para la Diáspora Venezolana

**Remesas • Ayudas • Donaciones**

_Construido en público para [LatAm Hubs Buildathon 2026](https://latamhubs.lat/)_

[![Built with Celo](https://img.shields.io/badge/Built%20with-Celo-FCFF52?style=for-the-badge&logo=celo&logoColor=black)](https://celo.org)
[![Status: Sprint 2 Complete](https://img.shields.io/badge/Status-MVP%20Operational-3ECF8E?style=for-the-badge)](docs/99-iteraciones.md)
[![Network: Celo Sepolia](https://img.shields.io/badge/Network-Sepolia%20L2-4A90E2?style=for-the-badge)](https://celo.org)

[![Privy](https://img.shields.io/badge/Auth%20%26%20Wallet-Privy-1C1B1B?style=flat-square&logo=privy)](https://privy.io)
[![Supabase](https://img.shields.io/badge/Data-Supabase-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com)
[![v0](https://img.shields.io/badge/UI-v0-000000?style=flat-square&logo=vercel)](https://v0.dev)

[🚀 Demo en Vivo (WIP)](https://puente-remesas.vercel.app) • [📖 Base de Conocimiento](#-base-de-conocimiento-estratégica) • [💬 Comunidad](#)

</div>

---

## 🚀 Estado del Proyecto: Sprint 2 Completado

> **Hito Alcanzado (Enero 2026)**: "Identity Handshake & First Transaction"

Hemos completado el **MVP Técnico**. La aplicación es capaz de:

1.  **Auth Híbrida**: Login con Email/SMS (Privy) que genera una Wallet Custodial automática.
2.  **Sincronización de Identidad**: Cada login crea/actualiza un perfil en nuestra base de datos SQL (Supabase) automáticamente.
3.  **Transacciones Reales**: Envío de dinero (CELO) en la red **Celo Sepolia L2**.

---

## 🧠 Base de Conocimiento Estratégica

Documentación profunda generada por nuestro "One Man Army" de IA:

| Documento                                                                                                                | Foco    | Key Insight                                                                                 |
| :----------------------------------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------ |
| **[🏗️ Data Architecture Strategy](.gemini/antigravity/brain/c491f889-deb1-46af-896b-080cee9fcfec/data_architecture.md)** | Backend | **"Event-Driven Operational Warehouse"**. Supabase as Source of Truth + Events.             |
| **[📉 Logging & Observability](.gemini/antigravity/brain/c491f889-deb1-46af-896b-080cee9fcfec/logging_strategy.md)**     | DevOps  | **"Wide Events"**. No fragmented logs. Trace ID across Privy -> Next -> Chain.              |
| **[🌍 Ecosystem Strategy](.gemini/antigravity/brain/c491f889-deb1-46af-896b-080cee9fcfec/ecosystem_strategy.md)**        | Growth  | **SocialConnect** como la "Killer Feature" para UX móvil. Oportunidad Google Cloud ($200k). |

---

## 🛠️ Stack Técnico (Actualizado)

| Componente  | Tecnología              | Rol en la Arquitectura                                           |
| :---------- | :---------------------- | :--------------------------------------------------------------- |
| **Network** | **Celo Sepolia (L2)**   | Capa de liquidación rápida y barata. Migrado desde Alfajores.    |
| **Auth**    | **Privy**               | Onboarding progresivo (Email -> Wallet).                         |
| **Data**    | **Supabase (Postgres)** | Persistencia de perfiles y metadata de transacciones.            |
| **Backend** | **Next.js API Routes**  | Orquestación segura (`/api/auth/sync`) usando Service Role Keys. |
| **UI**      | **Shadcn/UI + v0**      | Componentes accesibles y rápidos.                                |

---

## ⚡ Quick Start (Localhost)

Para correr este proyecto localmente:

1.  **Clonar y Dependencias**:
    ```bash
    pnpm install
    ```
2.  **Variables de Entorno** (`.env.local`):
    ```env
    NEXT_PUBLIC_PRIVY_APP_ID=...
    PRIVY_APP_SECRET=...
    NEXT_PUBLIC_SUPABASE_URL=...
    NEXT_PUBLIC_SUPABASE_ANON_KEY=...
    SUPABASE_SERVICE_ROLE_KEY=...
    ```
3.  **Correr Web**:
    ```bash
    pnpm --filter web dev
    ```
4.  **Faucet**:
    [Google Cloud Web3 Faucet](https://faucet.google.com/) -> Select "Celo (Sepolia)".

---

## 🚀 Roadmap 2026

### 🟢 Fase 1: Buildathon (Enero - Feb 2026) -> **DONE**

- [x] **Infraestructura**: Clean Repo, Privy Setup, Supabase Migrations.
- [x] **Identity Sync**: Hook `useUserSync` + API Route segura.
- [x] **Send Flow**: Formulario de envío verificado en Celo Sepolia.
- [x] **Migración L2**: Switch a Celo Sepolia Testnet.

### 🟡 Fase 2: The Social Layer (Sprint 3 - Feb 2026)

- [ ] **SocialConnect**: Enviar dinero a números de teléfono (Lookups).
- [ ] **MiniPay Integration**: Optimización UI para Opera Mini.
- [ ] **Smart Contracts**: Escrow básico para P2P seguro (opcional).

### 🔴 Fase 3: Growth (Post-Buildathon)

- [ ] Crowdfunding Features.
- [ ] Integration con Latam Hubs (Celo Colombia/México).

---

## 👥 Equipo

**One Man Army** potenciado por Antigravity.
