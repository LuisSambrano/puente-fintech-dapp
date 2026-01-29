<div align="center">

# 🌉 Puente

### La Super-App Financiera para la Diáspora Venezolana

**Remesas • Ayudas • Donaciones**

_Construido en público para [LatAm Hubs Buildathon 2026](https://latamhubs.lat/)_

[![Built with Celo](https://img.shields.io/badge/Built%20with-Celo-FCFF52?style=for-the-badge&logo=celo&logoColor=black)](https://celo.org)
[![MiniApps Track](https://img.shields.io/badge/Track-MiniApps-00D4AA?style=for-the-badge)](https://latamhubs.lat)
[![VibeCoding](https://img.shields.io/badge/VibeCoding-Transparent%20Build-FF6B6B?style=for-the-badge)](docs/99-iteraciones.md)

[![Privy](https://img.shields.io/badge/Auth%20%26%20Wallet-Privy-1C1B1B?style=flat-square&logo=privy)](https://privy.io)
[![Human.Tech](https://img.shields.io/badge/Identity-Human.Tech%20Passport-4A90E2?style=flat-square)](https://human.tech)
[![v0](https://img.shields.io/badge/UI-v0-000000?style=flat-square&logo=vercel)](https://v0.dev)

[🚀 Demo en Vivo](https://puente-remesas.vercel.app) • [📖 Documentación](#-documentación) • [🎥 Video Demo](#) • [💬 Comunidad](#-comunidad-y-crecimiento)

</div>

---

## 📑 Tabla de Contenidos

- [🎯 El Problema Fragmentado](#-el-problema-fragmentado)
- [💡 La Solución Híbrida](#-la-solución-híbrida)
- [🛠️ Stack Técnico (Moderno)](#️-stack-técnico-moderno)
- [📊 Validación de Mercado](#-validación-de-mercado)
- [🏆 Panorama Competitivo](#-panorama-competitivo)
- [🚀 Roadmap 2026](#-roadmap-2026)
- [🎓 VibeCoding & IA](#-vibecoding--ia)
- [📚 Documentación](#-documentación)

---

## 🎯 El Problema Fragmentado

La diáspora venezolana (8 millones de personas) vive con su economía fragmentada en 3 problemas costosos:

1. **Remesas (Familia)**: Usan Western Union y pierden **15%**.
2. **Emergencias (Salud)**: Usan GoFundMe y no pueden **retirar el dinero** en Venezuela.
3. **Creadores (Ingresos)**: Usan Cafecito/Patreon y pierden **10-15%** en fees.

> **Resultado**: Una economía ineficiente donde los intermediarios ganan más que los usuarios.

---

## 💡 La Solución Híbrida

**Puente** unifica estas 3 necesidades en una sola "Super-App" construida sobre Celo.

### 1. Remesas (El Zelle de LATAM)

- **Costo**: <1% (vs 15%).
- **Velocidad**: Instantánea.
- **UX**: Login con Email (Privy) -> Enviar a teléfono.

### 2. Crowdfunding (El GoFundMe Crypto)

- **Caso de uso**: Emergencias médicas.
- **Ventaja**: Retiro directo a wallet en segundos. Sin bloqueos geográficos.

### 3. Donaciones (El Cafecito Global)

- **Caso de uso**: Apoyar a creadores/periodistas.
- **Ventaja**: Micro-pagos de $1 viables (fees de centavos).

---

## 🛠️ Stack Técnico (Moderno)

Hemos iterado para encontrar el **"Holy Grail"** de la UX Web3:

<div align="center">

| Componente        | Tecnología                                                            | Por Qué (La decisión difícil)                                               |
| :---------------- | :-------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| **Auth & Wallet** | ![Privy](https://img.shields.io/badge/-Privy-1C1B1B?style=flat)       | **Adiós RainbowKit**. Necesitamos login con Email/SMS para adopción masiva. |
| **Blockchain**    | ![Celo](https://img.shields.io/badge/-Celo-FCFF52?style=flat)         | Mobile-first, fees inexistentes, stablecoins nativas.                       |
| **Identidad**     | ![Passport](https://img.shields.io/badge/-Passport-4A90E2?style=flat) | Verificación Sybil-resistant **sin documentos** (para indocumentados).      |
| **UI**            | ![v0](https://img.shields.io/badge/-v0-000000?style=flat)             | Interfaz generada con IA, pulida y responsive.                              |
| **Data**          | ![Supabase](https://img.shields.io/badge/-Supabase-3ECF8E?style=flat) | Base de datos relacional para perfiles y campañas.                          |

</div>

---

## 📊 Validación de Mercado

### Contexto: Venezuela 2026

- **Transición**: Se espera apertura de canales formales (Western Union vuelve).
- **Crypto Adoption**: Ya ganó. 10%+ de compras en supermercados son en USDT.
- **Oportunidad**: Puente entra como la opción **nativa digital** y **más barata**.

### Métricas Clave

- **TAM**: $4-5 Billion/año en remesas.
- **Usuarios**: 7.89 Millones de migrantes.
- **Competencia**: Lenta (Bancos), Cara (WU) o Compleja (P2P Tradicional).

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

## 🚀 Roadmap 2026

### 🟢 Fase 1: Buildathon (Feb 2026) -> **FOCUS ACTUAL**

- [x] MVP de **Remesas P2P**.
- [x] Integración **Privy** (Email Login).
- [x] Integración **Passport** (Verificación).
- [ ] 100 transacciones en Mainnet.

### 🟡 Fase 2: Crowdfunding (Q2 2026)

- [ ] Módulo de Campañas de Salud.
- [ ] Smart Contracts de Escrow.
- [ ] Shareable Links virales.

### 🔴 Fase 3: Donaciones (Q3 2026)

- [ ] Perfiles de creadores.
- [ ] Widget "Invítame un Café".
- [ ] Suscripciones recurrentes (Flows).

---

## 🎓 VibeCoding & IA

Este proyecto es un experimento de **"One Man Army"** potenciado por IA.
No tenemos un equipo de 10 personas. Tenemos:

- **Gemini 2.0**: Arquitecto de Software.
- **Claude Antigravity**: Ingeniero DevOps y Backend.
- **v0**: Diseñador UI/UX.
- **NotebookLM**: Investigador de Mercado.

> **Transparencia Radical**: Documentamos cada error, pivote y decisión.
> [Leer historias de iteración →](docs/99-iteraciones.md)

---

## 📚 Documentación

### Core

- [Misión y Visión (Híbrida)](docs/07-mision-vision.md)
- [Stack Técnico (Privy)](docs/03-stack-tecnico.md)
- [Iteraciones (Log)](docs/99-iteraciones.md)

### Estratégica

- [GTM Strategy](docs/10-gtm-strategy.md)
- [Competidores](docs/11-competidores.md)
- [Contexto Venezuela](docs/00-contexto.md)

### Técnica

- [Estructura Proyecto](docs/16-estructura-proyecto.md)
- [Guía Supabase](docs/19-guia-supabase.md)

---

## 👥 Equipo

**One Man Army**
_Construyendo el futuro financiero de Venezuela._

---

<div align="center">

**[LatAm Hubs Buildathon 2026](https://latamhubs.lat/)** 🌎

</div>
