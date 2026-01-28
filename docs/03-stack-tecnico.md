# Stack Técnico - Puente (Actualizado)

## Cambio Importante

**Descubrimiento**: Celo tiene herramientas oficiales que simplifican todo.

**Decisión anterior**: Empezar desde cero con Next.js  
**Decisión actualizada**: Usar **Celo Composer** con template de MiniPay

**Por qué cambiamos**:

1. No reinventar la rueda
2. Template oficial ya optimizado para MiniPay
3. Configuración de Viem pre-configurada
4. Ejemplos de fee abstraction (pagar gas con cUSD)

---

## Herramientas Oficiales del Ecosistema

### 1. Celo Composer (CLI Oficial)

**Qué es**: Generador de proyectos oficial de Celo

**Comando**:

```bash
npx @celo/celo-composer@latest create
```

**Qué incluye**:

- Next.js 14/15 configurado
- Hardhat para smart contracts
- Viem/Wagmi pre-configurado
- Template de MiniPay listo

**Por qué lo usamos**:

- Ahorra días de configuración
- Best practices oficiales
- Mantenido por Celo
- Ejemplos funcionales incluidos

**Repositorio**: https://github.com/celo-org/celo-composer

---

### 2. MiniPay Template

**Qué es**: Template específico para MiniPay dentro de Celo Composer

**Repositorio**: https://github.com/celo-org/minipay-template

**Características**:

- Detección automática de MiniPay
- Oculta botón "Connect Wallet" cuando está en MiniPay
- Fee abstraction configurada (pagar gas con cUSD)
- UI móvil-first

**Por qué lo usamos**:

- Exactamente lo que necesitamos
- Ya resuelve problemas comunes de MiniPay
- Menos bugs, más rápido

---

### 3. Proyectos de Referencia

#### RentPay

**Repositorio**: https://github.com/Amity808/rentpay

**Qué hace**: Pagar renta y servicios con MiniPay

**Qué aprendemos**:

- Estructura de proyecto real
- Lógica de pagos recurrentes
- Integración con MiniPay
- UI/UX para remesas

**Por qué es útil**: Es casi exactamente nuestro caso de uso

---

#### Nexus

**Repositorio**: https://github.com/celo-org/nexus

**Qué hace**: SocialConnect (mapear teléfono → wallet)

**Qué aprendemos**:

- Cómo vincular números de teléfono
- Útil para notificaciones
- Identificación de usuarios

**Por qué es útil**: Podemos usar teléfono en vez de wallet address

---

#### Paycraft

**Repositorio**: https://github.com/paycraft-network

**Qué hace**: Nómina descentralizada

**Qué aprendemos**:

- Contratos de pagos recurrentes
- Lógica de escrow
- Manejo de múltiples pagos

**Por qué es útil**: Similar a nuestra lógica de remesas

---

## Stack Técnico Actualizado

### Frontend

```
Framework: Next.js 14/15 (vía Celo Composer)
Blockchain: Viem + Wagmi (pre-configurado)
UI: Shadcn/UI + TailwindCSS
Wallet: MiniPay (detección automática)
```

**Cambios vs decisión anterior**:

- ✅ Usamos Celo Composer en vez de `create-next-app`
- ✅ Viem en vez de RainbowKit (recomendación oficial de Celo)
- ✅ Shadcn/UI en vez de solo v0 (más componentes móvil-first)

**Razonamiento**:

- Viem tiene soporte nativo de fee abstraction de Celo
- Shadcn/UI es el estándar en el ecosistema
- Template de MiniPay ya tiene todo configurado

---

### Backend

```
Hosting: Vercel
Database: Supabase
API: Next.js API Routes
Testing local: ngrok (para probar en MiniPay real)
```

**Sin cambios**: Supabase y Vercel siguen siendo la mejor opción.

**Nuevo**: ngrok para testing

- MiniPay es una app móvil
- Necesitamos exponer localhost para probar
- ngrok crea URL pública temporal

---

### Blockchain

```
Red: Celo Mainnet
SDK: Viem (oficial de Celo)
Wallet: MiniPay
Identidad: Human.Tech Passport
Fee Currency: cUSD (pagar gas con stablecoin)
```

**Cambios clave**:

- ✅ Viem en vez de @celo/contractkit (más moderno)
- ✅ Fee abstraction configurada (usuarios pagan gas con cUSD)

**Por qué Viem**:

- Recomendación oficial de Celo
- Soporte nativo de fee abstraction
- Más rápido y ligero
- Mejor TypeScript support

---

### Smart Contracts

```
Lenguaje: Solidity
Framework: Hardhat (viene con Celo Composer)
Testing: Hardhat + Chai
Network: Celo Alfajores (testnet) → Celo Mainnet
```

**Sin cambios**: Hardhat sigue siendo la mejor opción.

**Ventaja**: Ya viene configurado en Celo Composer.

---

## Características Específicas de MiniPay

### 1. Detección de MiniPay

```typescript
// Detectar si el usuario está en MiniPay
const isMiniPay = window.ethereum?.isMiniPay

// Ocultar botón de connect si está en MiniPay
{!isMiniPay && <ConnectButton />}
```

**Por qué**: En MiniPay la wallet ya está conectada implícitamente.

---

### 2. Fee Abstraction (Gas con cUSD)

```typescript
// Configurar Viem para pagar gas con cUSD
const walletClient = createWalletClient({
  chain: celo,
  transport: custom(window.ethereum),
  feeCurrency: cUSD_ADDRESS, // Pagar gas con cUSD
});
```

**Por qué**: Usuarios no necesitan CELO nativo, solo cUSD.

---

### 3. Testing con ngrok

```bash
# Exponer localhost para probar en teléfono
ngrok http 3000

# Usar URL de ngrok en MiniPay
https://abc123.ngrok.io
```

**Por qué**: MiniPay es una app móvil, necesitamos URL pública.

---

## Comparación: Antes vs Ahora

| Aspecto            | Decisión Anterior | Decisión Actualizada | Por Qué                                |
| ------------------ | ----------------- | -------------------- | -------------------------------------- |
| **Setup**          | `create-next-app` | Celo Composer        | Template oficial optimizado            |
| **Blockchain Lib** | RainbowKit        | Viem + Wagmi         | Recomendación oficial, fee abstraction |
| **UI Components**  | Solo v0           | Shadcn/UI + v0       | Más componentes móvil-first            |
| **Referencia**     | Ninguna           | RentPay, Nexus       | Aprender de proyectos reales           |
| **Testing**        | Solo browser      | ngrok + MiniPay      | Probar en app real                     |

---

## Plan de Implementación Actualizado

### Fase 0: Setup (Día 1)

```bash
# 1. Crear proyecto con Celo Composer
npx @celo/celo-composer@latest create

# Durante setup, seleccionar:
# - Template: MiniPay
# - Framework: Next.js
# - Smart contracts: Hardhat
# - Styling: TailwindCSS

# 2. Instalar dependencias adicionales
cd puente
pnpm install

# 3. Setup Supabase
# (crear proyecto en dashboard)

# 4. Setup ngrok
brew install ngrok
ngrok config add-authtoken <token>
```

---

### Fase 1: Exploración (Días 2-3)

**Estudiar el template**:

- [ ] Revisar estructura de carpetas
- [ ] Entender configuración de Viem
- [ ] Ver ejemplos de MiniPay detection
- [ ] Probar deploy local

**Estudiar proyectos de referencia**:

- [ ] Clonar RentPay
- [ ] Analizar lógica de pagos
- [ ] Ver integración con MiniPay
- [ ] Copiar patterns útiles (con atribución)

---

### Fase 2: Customización (Días 4-7)

**Adaptar template para "Puente"**:

- [ ] Cambiar branding
- [ ] Modificar UI para remesas
- [ ] Integrar Supabase
- [ ] Agregar Passport

**Testing**:

- [ ] Probar con ngrok
- [ ] Probar en MiniPay real
- [ ] Validar fee abstraction

---

## Recursos de Aprendizaje

### Documentación Oficial

- [Celo Composer Docs](https://github.com/celo-org/celo-composer)
- [MiniPay Docs](https://docs.celo.org/developer/build-on-minipay)
- [Viem Celo Guide](https://viem.sh/docs/chains/celo)
- [Fee Abstraction Guide](https://docs.celo.org/protocol/transaction/erc20-transaction-fees)

### Tutoriales Específicos

- [Building on MiniPay](https://docs.celo.org/developer/build-on-minipay/overview)
- [SocialConnect Guide](https://docs.celo.org/protocol/identity/odis-use-case-phone-number-privacy)
- [Celo Academy (español)](https://www.celo.mx/academy)

---

## Ventajas de Este Enfoque

### 1. Velocidad

- Setup en minutos, no días
- Ejemplos funcionales incluidos
- Menos configuración manual

### 2. Best Practices

- Código mantenido por Celo
- Patterns probados en producción
- Menos bugs potenciales

### 3. Aprendizaje

- Código de referencia de calidad
- Ejemplos reales de uso
- Comunidad activa

### 4. Competitividad

- Mismo stack que proyectos ganadores
- Optimizado para el buildathon
- Más tiempo para features únicas

---

## Próximos Pasos

1. **Ejecutar Celo Composer**

   ```bash
   npx @celo/celo-composer@latest create
   ```

2. **Explorar template generado**
   - Ver estructura
   - Ejecutar localmente
   - Probar con ngrok

3. **Estudiar RentPay**
   - Clonar repo
   - Analizar código
   - Identificar patterns útiles

4. **Documentar aprendizajes**
   - Qué funciona
   - Qué no entendemos
   - Preguntas para mentoría

---

## Documentación de Iteraciones

**Versión 1** (original): Stack desde cero  
**Versión 2** (actual): Stack con herramientas oficiales

**Cambio documentado**: Este archivo

**Razón del cambio**: Investigación reveló herramientas oficiales que simplifican desarrollo

**Aprendizaje**: Siempre investigar el ecosistema antes de empezar desde cero

---

## Siguiente Documento

Vamos a crear:

- `03-setup-inicial.md`: Pasos exactos para inicializar el proyecto
- `04-analisis-referencias.md`: Qué aprendimos de RentPay/Nexus
- `05-iteraciones.md`: Log de cambios y versiones

¿Procedemos a ejecutar Celo Composer?
