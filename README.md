<div align="center">

# Puente

### Enterprise-Grade Remittance Bridge for Latin America

_Built for [LatAm Hubs Buildathon 2026](https://latamhubs.lat/) • MiniApps Track_

[![Network: Celo](https://img.shields.io/badge/Network-Celo%20L2-FCFF52?style=for-the-badge&logo=celo&logoColor=black)](https://celo.org)
[![Stack: Next.js 14](https://img.shields.io/badge/Stack-Next.js%2014-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Auth: Privy](https://img.shields.io/badge/Auth-Privy-blue?style=for-the-badge)](https://privy.io)

</div>

---

## 📋 Overview

**Puente** is a non-custodial remittance platform designed to solve the friction of cross-border payments in hyper-inflationary economies. Leveraging the **Celo L2** blockchain and **cUSD** stablecoin, it provides an instant, low-fee settlement layer wrapped in a premium, enterprise-grade user interface.

## 🎯 Value Proposition

- **Stability**: Transactions settle exclusively in **cUSD** (Celo Dollar), protecting users from local currency volatility.
- **Speed**: leveraging Celo's sub-5 second finality for near-instant transfers.
- **Cost**: Gas abstraction and L2 optimizations result in negligible transaction fees (<$0.01), significantly undercutting traditional remittance corridors (avg. 15%).
- **Accessibility**: Mobile-first PWA design optimized for **MiniPay** (Opera Mini), ensuring performance on low-bandwidth networks.

## ✨ Key Features

### 1. UX/UI: High-Fidelity Design System

A professional implementation of **Glassmorphism 2.0**, offering depth, hierarchy, and visual feedback without compromising performance.

- **Dynamic Theming**: Context-aware UI that adapts to light/dark modes (Solaris/Obsidian).
- **Haptic Design**: Visual micro-interactions that provide tactile confirmation for actions.
- **Privacy-First Dashboard**: Sensitive balances are obfuscated by default via CSS filters until authenticated interaction.

### 2. Identity & SocialConnect

Eliminating the complexity of hexadecimal wallet addresses.

- **Phone-to-Address Mapping**: Powered by **ODIS (Oblivious Decentralized Identity Service)**, allowing users to send funds using phone numbers.
- **Social Discovery**: Secure lookup of recipients via verified social identifiers.

### 3. Fortified Infrastructure

- **Authentication**: **Privy** integration for seamless embedded wallets and passkey support.
- **Data Layer**: **Supabase** for real-time user profiles and transactional audit logging.
- **Smart Contracts**: Verified contracts on Celo Sepolia for secure fund routing.

## 🛠️ Technology Stack

| Component       | Technology                       | Role                                                   |
| :-------------- | :------------------------------- | :----------------------------------------------------- |
| **Frontend**    | **Next.js 14 (App Router)**      | Core application framework.                            |
| **Styling**     | **Tailwind CSS + Framer Motion** | Responsive design and hardware-accelerated animations. |
| **Blockchain**  | **Celo (Sepolia Testnet)**       | Settlement layer.                                      |
| **Auth/Wallet** | **Privy**                        | Embedded wallet management and authentication.         |
| **Backend**     | **Supabase**                     | Relational database (PostgreSQL) and Edge Functions.   |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
git clone https://github.com/LuisSambrano/puente.git
cd puente
pnpm install
```

### Environment Setup

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
# ... other required variables
```

### Development

```bash
pnpm dev
```

## 🏆 Celo Buildathon Alignment

This project specifically targets the **MiniApps Track**, demonstrating:

1.  **MiniPay Integration**: Fully compatible with the Opera Mini browser wallet environment.
2.  **Real-World Utility**: Addressing a critical financial use case (remittances) in the LATAM region.
3.  **UX Excellence**: Prioritizing a seamless, "Web2-like" experience for Web3 technology.

---

<div align="center">
  <sub>Designed & Engineered by Luis Sambrano</sub>
</div>
