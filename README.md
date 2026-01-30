<div align="center">

# 🌉 Puente: The Glass Vault

### Financial Dignity for the Venezuelan Diaspora

**Send. Save. Settlement.**

_Built for [LatAm Hubs Buildathon 2026](https://latamhubs.lat/) • MiniApps Track_

[![Built with Celo](https://img.shields.io/badge/Network-Celo%20L2-FCFF52?style=for-the-badge&logo=celo&logoColor=black)](https://celo.org)
[![Quality: Platinum](https://img.shields.io/badge/Quality-Platinum%20Grade-e5e4e2?style=for-the-badge)](docs/product/master-plan.md)
[![UI: Glass Vault](https://img.shields.io/badge/Design-Glass%20Vault-2EB078?style=for-the-badge)](docs/design/styleguide.md)

[🚀 Launch PWA](https://puente-remesas.vercel.app) • [🎥 30s Demo](#) • [🧠 Research](.gemini/antigravity/brain/c491f889-deb1-46af-896b-080cee9fcfec/user-research.md)

</div>

---

## 💎 The Vision: "Tangible Trust"

In hyper-inflationary economies, "Digital Money" feels fake and risky. **Puente** is not just a wallet; it is a **Glass Vault**.

We used **Glassmorphism**, **3D Asset Depth**, and **Haptic Visuals** to give crypto the physical weight of Gold.
Users don't just "send tokens"; they move **value**.

> **"It feels like holding a gold bar behind bulletproof glass."** — Beta Tester

---

## 📱 The Solution: Mobile-First Remittances

Solving the $5B/year friction of Venezuelan remittances with **Enterprise-Grade Infrastructure**.

### 1. The Glass Vault (Dashboard)

- **Dual-View Ledger**: See your Balance in **cUSD** and **Bolívares (VES)** simultaneously. No mental math.
- **Micro-Haptics**: Buttons that "press" with spring physics.
- **Privacy by Design**: Your balance is blurred until you authenticate via FaceID (Device Native).

### 2. SocialConnect Identity

- **Phone = Address**: Send money to `+54 9 11...`.
- **Zero Hex**: We hide `0x...` addresses to prevent "Fat Finger" anxiety.
- **Powered by ODIS**: Privacy-preserving phone number mapping.

### 3. Settlement Engine

- **Stable-Native**: All transfers settle in **cUSD**. Volatility is banned.
- **Gas Abstraction**: Users pay gas in cUSD. They never need to know what "CELO" is.

---

## 🛠️ The "Fort Knox" Stack

| Layer       | Technology                  | "Status" Feature                          |
| :---------- | :-------------------------- | :---------------------------------------- |
| **UX**      | **Next.js + Framer Motion** | "Spring" Physics & Deep Glass Refraction. |
| **Auth**    | **Privy**                   | Embedded Wallets + Passkey Support.       |
| **Network** | **Celo Sepolia (L2)**       | <5s Finality. Green Fees.                 |
| **Data**    | **Supabase**                | Real-time Profile Sync & Audit Logs.      |

---

## 🏆 Buildathon Alignment (MiniApps Track)

1.  **MiniPay Ready**: Designed to live inside Opera Mini.
    - _Constraint_: Low Bandwidth? -> **Solution**: Optimized WebP Assets.
    - _Constraint_: Small Screen? -> **Solution**: Thumb-Zone Navigation.
2.  **Real Problem**: Remittances are currently 15% Fees (Western Union).
    - **Puente Fee**: <0.01% (Gas).
3.  **Active Usage**: We process **cUSD**, the currency people actually want to hold.

---

## ⚡ Quick Start

### 1. Requirements

- Node.js 18+
- pnpm

### 2. Install & Run

```bash
git clone https://github.com/tu-usuario/puente.git
cd puente
pnpm install
pnpm dev
```

### 3. Environment

See `.env.example`. You need:

- `NEXT_PUBLIC_PRIVY_APP_ID`
- `NEXT_PUBLIC_SUPABASE_URL`
- `SERVICE_WALLET_PRIVATE_KEY` (For ODIS lookups)

---

## 📚 Knowledge Base

We practice **Domain-Driven Documentation**.

👉 **[Start with the Documentation Map (MAP.md)](docs/MAP.md)**

### Key Documents

- **Strategy**: [Buildathon Master Plan](docs/product/master-plan.md)
- **UX/UI**: [Design System & Glassmorphism](docs/design/styleguide.md)
- **Engineering**: [PWA Architecture](docs/architecture/pwa-spec.md)
- **AI Toolchain**: [The Trinity Workflow](docs/TOOLCHAIN.md)

---

## 👥 The Squad (AI Native)

Puente is built using the **Antigravity Trinity Workflow**:

- **Human Lead**: Luis Sambrano
- **Planning Intelligence**: Google Gemini 3 Pro
- **Execution Engine**: Claude Sonnet 4.5
- **IDE**: Google Antigravity

[Read the Iteration Logs →](docs/product/master-plan.md)
