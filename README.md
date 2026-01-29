<div align="center">

# 🌉 Puente

### La Super-App Financiera para la Diáspora Venezolana

**Remesas • Ayudas • Donaciones**

_Construido en público para [LatAm Hubs Buildathon 2026](https://latamhubs.lat/)_

[![Built with Celo](https://img.shields.io/badge/Built%20with-Celo-FCFF52?style=for-the-badge&logo=celo&logoColor=black)](https://celo.org)
[![Status: Sprint 2 Complete](https://img.shields.io/badge/Status-MVP%20Operational-3ECF8E?style=for-the-badge)](docs/99-iteraciones.md)
[![Quality: Enterprise Grade](https://img.shields.io/badge/Quality-Enterprise-purple?style=for-the-badge)](.gemini/antigravity/brain/c491f889-deb1-46af-896b-080cee9fcfec/enterprise_audit_framework.md)

[![Privy](https://img.shields.io/badge/Auth%20%26%20Wallet-Privy-1C1B1B?style=flat-square&logo=privy)](https://privy.io)
[![Supabase](https://img.shields.io/badge/Data-Supabase-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com)
[![v0](https://img.shields.io/badge/UI-v0-000000?style=flat-square&logo=vercel)](https://v0.dev)

[🚀 Demo en Vivo (WIP)](https://puente-remesas.vercel.app) • [📖 Base de Conocimiento](#-base-de-conocimiento-estratégica) • [🎥 Video Demo](#)

</div>

---

## 📑 Tabla de Contenidos

- [🎯 El Problema Fragmentado](#-el-problema-fragmentado)
- [💡 La Solución Híbrida](#-la-solución-híbrida)
- [🧠 Base de Conocimiento Estratégica](#-base-de-conocimiento-estratégica)
- [🛠️ Stack Técnico (Enterprise)](#️-stack-técnico-enterprise)
- [📊 Validación de Mercado](#-validación-de-mercado)
- [🏆 Panorama Competitivo](#-panorama-competitivo)
- [🚀 Roadmap 2026](#-roadmap-2026)
- [🎓 VibeCoding & IA](#-vibecoding--ia)

---

## 🎯 El Problema Fragmentado

La diáspora venezolana (8 millones de personas) vive con su economía fragmentada en 3 problemas costosos:

1.  **Remesas (Familia)**: Usan Western Union y pierden **15%**.
2.  **Emergencias (Salud)**: Usan GoFundMe y no pueden **retirar el dinero** en Venezuela.
3.  **Creadores (Ingresos)**: Usan Cafecito/Patreon y pierden **10-15%** en fees.

> **Resultado**: Una economía ineficiente donde los intermediarios ganan más que los usuarios.

---

## 💡 La Solución Híbrida

**Puente** unifica estas 3 necesidades en una sola "Super-App" construida sobre Celo L2.

### 1. Remesas (El Zelle de LATAM - ✅ MVP Ready)

- **Costo**: <1% (vs 15%).
- **Velocidad**: Instantánea (Bloques de 5s en Celo).
- **UX**: Login con Email (Privy) -> Enviar a Wallet/Email.

### 2. Crowdfunding (El GoFundMe Crypto - Q2)

- **Caso de uso**: Emergencias médicas.
- **Ventaja**: Retiro directo a wallet en segundos. Sin bloqueos geográficos.

### 3. Donaciones (El Cafecito Global - Q3)

- **Caso de uso**: Apoyar a creadores/periodistas.
- **Ventaja**: Micro-pagos de $1 viables (fees de centavos).

---

## 🧠 Base de Conocimiento Estratégica

Documentación profunda generada por nuestro "One Man Army" de IA:

| Documento                                                                                                                | Foco    | Key Insight                                                                                 |
| :----------------------------------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------ |
| **[🏗️ Data Architecture Strategy](.gemini/antigravity/brain/c491f889-deb1-46af-896b-080cee9fcfec/data_architecture.md)** | Backend | **"Event-Driven Operational Warehouse"**. Supabase as Source of Truth + Events.             |
| **[📉 Logging & Observability](.gemini/antigravity/brain/c491f889-deb1-46af-896b-080cee9fcfec/logging_strategy.md)**     | DevOps  | **"Wide Events"**. No fragmented logs. Trace ID across Privy -> Next -> Chain.              |
| **[🌍 Ecosystem Strategy](.gemini/antigravity/brain/c491f889-deb1-46af-896b-080cee9fcfec/ecosystem_strategy.md)**        | Growth  | **SocialConnect** como la "Killer Feature" para UX móvil. Oportunidad Google Cloud ($200k). |
| **[🏦 Enterprise Audit](.gemini/antigravity/brain/c491f889-deb1-46af-896b-080cee9fcfec/enterprise_audit_framework.md)**  | Quality | **5-Star Security**. CI/CD, Testing (Vitest), y Git Hooks (Husky) activos.                  |

---

## 🛠️ Stack Técnico (Enterprise)

Hemos evolucionado de un Prototipo a una Infraestructura de Grado Empresarial:

| Capa        | Tecnología             | Características "Fort Knox"                                       |
| :---------- | :--------------------- | :---------------------------------------------------------------- |
| **Network** | **Celo Sepolia (L2)**  | Liquidación instantánea. Migrado desde Alfajores en Sprint 2.     |
| **Auth**    | **Privy**              | MFA + Sincronización Server-Side criptográfica.                   |
| **Quality** | **Vitest + Husky**     | **CI/CD Pipeline** en GitHub Actions. 0 commits rotos permitidos. |
| **Backend** | **Next.js + Supabase** | RLS (Row Level Security) activo. API Routes protegidas.           |
| **UI**      | **Shadcn/UI + v0**     | Componentes accesibles y rápidos.                                 |

---

## 📊 Validación de Mercado

### Contexto: Venezuela 2026

- **Transición**: Se espera apertura de canales formales (Western Union vuelve), pero con fees altos.
- **Crypto Adoption**: Ya ganó. 10%+ de compras en supermercados son en USDT.
- **Oportunidad**: Puente entra como la opción **nativa digital** y **más barata**.

### Métricas Clave

- **TAM**: $4-5 Billion/año en remesas.
- **Usuarios**: 7.89 Millones de migrantes.

---

## 🏆 Panorama Competitivo

| Feature         |    Puente 🌉    | Western Union |   GoFundMe   |  Cafecito  |  ElDorado   |
| :-------------- | :-------------: | :-----------: | :----------: | :--------: | :---------: |
| **Fees**        |     **<1%**     |      15%      | 2.9% + $0.30 |     5%     |    1-2%     |
| **Velocidad**   |  **Segundos**   |     Días      |     Días     |  Semanal   |   Minutos   |
| **Retiro Vzla** | **✅ Directo**  |  ❌ Difícil   | ❌ Imposible |   ❌ No    |   ✅ P2P    |
| **Identidad**   | **✅ Passport** |  📄 Papeles   |  📄 SSN/ID   |   📄 DNI   | ❌ Ninguna  |
| **Modelo**      |   **Híbrido**   |  Solo Remesa  |  Solo Ayuda  | Solo Donar | Solo Cambio |

---

## ⚡ Quick Start (Localhost)

Para correr este proyecto (Ahora con verificaciones de seguridad):

1.  **Clonar e Instalar**:
    ```bash
    pnpm install
    pnpm prepare # Instala Husky Hooks
    ```
2.  **Variables de Entorno** (`.env.local`):
    (Ver `env.example` para las llaves requeridas de Privy y Supabase).
3.  **Correr Tests**:
    ```bash
    pnpm test # Verifica lógica core
    ```
4.  **Correr Dev**:
    ```bash
    pnpm dev
    ```

---

## 🚀 Roadmap 2026

### 🟢 Fase 1: Buildathon (Enero - Feb 2026) -> **DONE**

- [x] **Infraestructura**: Clean Repo, Privy Setup, Supabase Migrations.
- [x] **Identity Sync**: Hook `useUserSync` + API Route segura.
- [x] **Send Flow**: Formulario de envío verificado en Celo Sepolia.
- [x] **Enterprise Upgrade**: CI/CD, Testing Framework y Auditoría de Seguridad.

### 🟡 Fase 2: The Social Layer (Sprint 3 - Feb 2026)

- [ ] **SocialConnect**: Enviar dinero a números de teléfono (Lookups).
- [ ] **MiniPay Integration**: Optimización UI para Opera Mini.
- [ ] **Smart Contracts**: Escrow básico para P2P seguro (opcional).

### 🔴 Fase 3: Growth (Post-Buildathon)

- [ ] Crowdfunding Features.
- [ ] Integration con Latam Hubs (Celo Colombia/México).

---

## 🎓 VibeCoding & IA

Este proyecto es un experimento de **"One Man Army"** potenciado por IA. No tenemos un equipo de 10 personas. Tenemos:

- **Gemini 2.0**: Arquitecto de Software.
- **Claude Antigravity**: Ingeniero DevOps y Backend.
- **v0**: Diseñador UI/UX.

> **Transparencia Radical**: Documentamos cada error, pivote y decisión.
> [Leer historias de iteración →](docs/99-iteraciones.md)

---

## 👥 Equipo

**One Man Army**
_Construyendo el futuro financiero de Venezuela._
