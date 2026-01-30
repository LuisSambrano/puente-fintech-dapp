# 🎨 Puente "Glass Vault" System - Style Guide

> **Status**: Living Document  
> **Version**: 1.0 (Solaris/Obsidian Update)  
> **Brand Core**: "Tangible Trust"

---

## 1. Color Protocol (Solaris vs Obsidian)

We use a semantic dual-theme system. Hardcoded HEX values are strictly forbidden in UI components.

### ☀️ Light Mode: "Solaris"

_Designed for clarity, clinical precision, and daylight visibility._

| Token             | Semantic Role     | Value (HSL / HEX)                  | Logic                               |
| :---------------- | :---------------- | :--------------------------------- | :---------------------------------- |
| `bg-background`   | **Canvas**        | `hsl(210 20% 98%)` / `#F9FAFB`     | Not pure white. Reduces eye strain. |
| `text-foreground` | **Primary Text**  | `hsl(221.2 39.3% 11%)` / `#111827` | "Deep Ink". Never #000000.          |
| `bg-white/70`     | **Glass Surface** | `hsla(0 0% 100% / 0.7)`            | "Frosted Ice" effect.               |
| `border-white/10` | **Glass Edge**    | `hsla(0 0% 100% / 0.1)`            | Subtle refraction definition.       |

### 🌑 Dark Mode: "Obsidian"

_Designed for depth, battery saving, and "Premium Night" aesthetic._

| Token             | Semantic Role     | Value (HSL / HEX)                | Logic                                  |
| :---------------- | :---------------- | :------------------------------- | :------------------------------------- |
| `bg-background`   | **Canvas**        | `hsl(240 5.9% 4.1%)` / `#0A0A0B` | "Obsidian Deep". Preserves OLED depth. |
| `text-foreground` | **Primary Text**  | `hsl(0 0% 100%)` / `#FFFFFF`     | Maximum contrast against obsidian.     |
| `bg-black/40`     | **Glass Surface** | `hsla(0 0% 0% / 0.4)`            | "Smoked Quartz" effect.                |
| `border-white/5`  | **Glass Edge**    | `hsla(0 0% 100% / 0.05)`         | "Catch-light" edge highlight.          |

### 🟢 Brand Core (Constant)

_These values persist across both modes to ensure Brand Recognition._

| Token              | Role               | HEX       | Usage                                 |
| :----------------- | :----------------- | :-------- | :------------------------------------ |
| `text-primary`     | **Action/Success** | `#2EB078` | "MiniPay Mint". CTAs, Success States. |
| `text-destructive` | **Danger**         | `#FF4444` | Errors, Logout, Slippage Warnings.    |

---

## 2. The "Glass Vault" Physics

Our UI mimics physical materials. It is not flat; it has depth, refraction, and weight.

### Surface: `glass-deep-frost`

The standard container for all high-level UI elements (Cards, Headers, Modals).

```css
.glass-deep-frost {
  /* Surface */
  background: bg-white/70 (Light) | bg-black/40 (Dark);

  /* Refraction */
  backdrop-filter: blur(20px) (Light) | blur(25px) (Dark);

  /* Depth Shadow */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  /* The "Ice Edge" (Inner Border) */
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
}
```

### Interactions

- **Active State**: `scale(0.98)` (Spring Physics).
- **Hover**: No opacity change on background, only on borders or icon brightness.

---

## 3. Typography & Hierarchy

Font Family: **Inter** (Google Fonts).

| Level            | Size       | Weight           | Tracking  | Usage                             |
| :--------------- | :--------- | :--------------- | :-------- | :-------------------------------- |
| **Hero Balance** | `text-7xl` | `Bold (700)`     | `-0.05em` | The Main Vault Balance.           |
| **Header**       | `text-2xl` | `Bold (700)`     | Normal    | Page Titles.                      |
| **Label**        | `text-xs`  | `Semibold (600)` | `Wide`    | Metadata (e.g., "VAULT BALANCE"). |
| **Body**         | `text-sm`  | `Regular (400)`  | Normal    | Instructional text.               |

---

## 4. Asset Protocol (3D)

- **Format**: WebP (Lossless).
- **Shadows**: Baked-in soft shadows for isometric depth.
- **Lighting**: Top-Left aligned light source.
