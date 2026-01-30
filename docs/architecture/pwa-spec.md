# Architecture Blueprint: Puente PWA & Landing Page 🌉

> **Vision**: A "Tangible-First" experience. High-conversion landing page ensuring trust, funneling users into a frictionless, installed Vault environment.

## 1. UX Strategy & Mobile-First Principles

- **Thumb-Zone Navigation**: Primary actions (Connect, Send, Install) placed in the bottom 30% of the screen.
- **Scroll-Snap Logic**:
  - `scroll-snap-type: y proximity`: Fluid scrolling that gently "locks" to key sections without trapping the user.
  - **Why**: Creates a presentation-like feel on mobile, increasing engagement with feature cards.
- **Micro-Interactions**:
  - Use `framer-motion` for slide-ins and fade-ups.
  - "Alive" elements: Pulse effects on the Balance card to show real-time connectivity.

## 2. Visual Identity (The "Bridge" Look)

| Element        | Specification               | Hex       |
| :------------- | :-------------------------- | :-------- |
| **Primary**    | Trust Mint (Success/Action) | `#2EB078` |
| **Background** | Clean Light Gray            | `#F9FAFB` |
| **Surface**    | Pure White (Cards/Modals)   | `#FFFFFF` |
| **Text**       | Deep Navy (Readability)     | `#111827` |
| **Accent**     | Soft Green (Containers)     | `#E8F5EE` |

- **Typography**: `Inter` (Body) / `Plus Jakarta Sans` (Headers).

## 3. Landing Page Structure (The Funnel)

1.  **Hero Section (Viewport 1)**:
    - **Visual**: iPhone 15 Pro Mockup displaying the Dashboard.
    - **Hook**: "Gestiona tus activos sin fricciones."
    - **CTA**: Floating "Abrir Web App" (Bottom Right or Sticky Footer).

2.  **Social Proof (Trust Bar)**:
    - Scrolling ticker of partner logos or metrics ("Built on Celo", "Secured by Privy").

3.  **Features (Scrollable Cards)**:
    - **Card 1**: "Envíos Globales" (Map visual).
    - **Card 2**: "Cero Comisiones" (Comparison chart).
    - **Card 3**: "Identidad Móvil" (Phone number demo).

4.  **Install Prompt (PWA)**:
    - Explicit instruction: "Add to Home Screen" to use full screen.

## 4. Web App Dashboard (The "Vault" Experience)

Once inside the app (`/dashboard` or authenticated state):

- **Header**: Network Status (Celo Sepolia) + User Avatar.
- **Hero Balance**: Large formatted balance (e.g., `$ 150.00 cUSD`).
- **Action Ring (Quick Access)**:
  - `[ ⬇️ Receive ]` `[ ↗️ Send ]` `[ 🔄 Swap ]` `[ 👥 Contacts ]`
- **Tabbed View**:
  - **Assets**: Token list with icons.
  - **Activity**: Transaction history (Time-ago format).
- **Navigation Bar (Bottom)**:
  - `Home` | `Scan` | `Settings`

## 5. Technical Stack

- **Framework**: Next.js 14 (App Router).
- **Styling**: Tailwind CSS + `clsx`.
- **Motion**: `framer-motion`.
- **Icons**: `lucide-react`.
- **PWA**: `next-pwa` or Manual Manifest configuration.

## 6. Implementation Stages

1.  **Foundation**: Install dependencies (`framer-motion`, `plus-jakarta-sans`).
2.  **Landing Page**: Build the Scroll-Snap layout in `page.tsx` (Guest View).
3.  **Dashboard Refactor**: Transform `UserDashboard.tsx` into the MetaMask-style layout.
4.  **Network Guard**: Force Celo Sepolia connection.
