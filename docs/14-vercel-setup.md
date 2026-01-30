# Vercel Setup y Configuración de Integraciones

> **Fecha**: 28 Enero 2026  
> **Objetivo**: Configurar Vercel para deployment y conectar integraciones necesarias

---

## ✅ Paso 1: GitHub Conectado con Vercel

**Status**: ✅ Completado

Usuario ya conectó su cuenta de GitHub con Vercel. Esto permite:

- Deployments automáticos en cada push a `main`
- Preview deployments para cada PR
- Rollbacks instantáneos
- Environment variables sincronizadas

---

## 🔌 Integraciones Disponibles

### Instaladas

**Vercel AI Gateway** ✅

- **Tipo**: AI
- **Uso**: Gateway para APIs de IA (Antigravity Toolchain Gateway).
- **Status**: Ya instalado
- **Recomendación**: Mantener para futuras features de IA

---

### Integraciones Recomendadas para Puente

#### 1. **Supabase** (CRÍTICO)

**Por qué**:

- Backend completo (PostgreSQL + Auth + Storage + Edge Functions)
- Integración nativa con Vercel
- Environment variables automáticas
- Free tier generoso

**Qué hace**:

- Sincroniza `SUPABASE_URL` y `SUPABASE_ANON_KEY` automáticamente
- Configura connection pooling
- Habilita preview databases para PRs

**Cómo instalar**:

1. Click en "Supabase" en la lista de integraciones
2. Seleccionar proyecto Supabase (o crear uno nuevo)
3. Autorizar acceso
4. Seleccionar environments (Production, Preview, Development)

**Próximo paso**: Crear proyecto Supabase primero

---

#### 2. **Vercel Blob** (Recomendado)

**Por qué**:

- Storage simple para archivos
- Ideal para avatares de usuarios
- CDN global automático
- Pricing: $0.15/GB storage, $0.10/GB bandwidth

**Qué hace**:

- Almacenar avatares de usuarios
- Documentos KYC (si aplica)
- Assets estáticos

**Cómo instalar**:

1. Click en "Blob" en integraciones
2. Habilitar en el proyecto
3. Variables de entorno se configuran automáticamente

**Alternativa**: Usar Supabase Storage (ya incluido)

---

#### 3. **Groq** (Opcional - Post-Buildathon)

**Por qué**:

- LLM inference ultra-rápido
- Ideal para chatbot de soporte
- Free tier disponible

**Qué hace**:

- Chatbot para ayudar a usuarios con remesas
- Explicar proceso de Passport
- Responder FAQs en español

**Cómo instalar**:

1. Crear cuenta en Groq
2. Obtener API key
3. Agregar como environment variable en Vercel

**Prioridad**: Baja (post-buildathon)

---

### Integraciones NO Necesarias (por ahora)

**Upstash Redis** ❌

- **Por qué no**: Supabase tiene caching built-in
- **Cuándo sí**: Si necesitamos rate limiting avanzado

**Neon** ❌

- **Por qué no**: Ya usaremos Supabase PostgreSQL
- **Cuándo sí**: Si necesitamos múltiples databases

**Amazon Aurora/DynamoDB** ❌

- **Por qué no**: Overkill para MVP, Supabase es suficiente
- **Cuándo sí**: Si escalamos a millones de usuarios

**Stripe** ❌

- **Por qué no**: No procesamos pagos fiat
- **Cuándo sí**: Si agregamos top-up con tarjeta

**fal/Deep Infra** ❌

- **Por qué no**: No necesitamos generación de imágenes/video
- **Cuándo sí**: Si agregamos features de marketing

---

## 📋 Plan de Configuración

### Fase 1: Setup Básico (Ahora)

**1. Crear Proyecto Supabase**

```bash
# Opción A: Via Supabase Dashboard
https://supabase.com/dashboard

# Opción B: Via CLI
npx supabase init
npx supabase start
```

**Configuración**:

- **Nombre**: `puente-prod`
- **Región**: `us-east-1` (más cercana a Venezuela)
- **Plan**: Free tier (500MB database, 1GB bandwidth/mes)

**2. Conectar Supabase con Vercel**

- Ir a Vercel Dashboard → Integrations
- Click en "Supabase"
- Seleccionar proyecto `puente-prod`
- Autorizar y sincronizar

**3. Verificar Environment Variables**

```bash
# En Vercel Dashboard → Settings → Environment Variables
SUPABASE_URL=https://[project-id].supabase.co
SUPABASE_ANON_KEY=[anon-key]
SUPABASE_SERVICE_ROLE_KEY=[service-role-key]
```

---

### Fase 2: Deployment (Después de Celo Composer)

**1. Importar Proyecto a Vercel**

```bash
# Opción A: Via Vercel CLI
npm i -g vercel
cd /Users/luissambrano/Proyectos/Lab/puente
vercel

# Opción B: Via Dashboard
https://vercel.com/new
```

**Configuración**:

- **Framework Preset**: Next.js
- **Root Directory**: `./` (o donde esté el package.json)
- **Build Command**: `pnpm build` (o `npm run build`)
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`

**2. Configurar Environment Variables**

**Variables de Celo**:

```bash
NEXT_PUBLIC_CELO_NETWORK=mainnet
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=[from WalletConnect]
```

**Variables de Supabase** (auto-configuradas por integración):

```bash
NEXT_PUBLIC_SUPABASE_URL=[auto]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[auto]
SUPABASE_SERVICE_ROLE_KEY=[auto]
```

**Variables de Human.Tech Passport**:

```bash
NEXT_PUBLIC_PASSPORT_APP_ID=[from Human.Tech]
PASSPORT_SECRET_KEY=[from Human.Tech]
```

**3. Deploy**

```bash
vercel --prod
```

---

### Fase 3: Post-Deployment

**1. Configurar Custom Domain (Opcional)**

```bash
# En Vercel Dashboard → Settings → Domains
puente.app (si está disponible)
# o
puente-remesas.vercel.app
```

**2. Habilitar Analytics**

- Vercel Analytics (gratis)
- Vercel Speed Insights (gratis)

**3. Configurar Preview Deployments**

- Habilitar para todas las branches
- Comentarios automáticos en PRs

---

## 🔐 Security Checklist

**Environment Variables**:

- [ ] Nunca commitear `.env.local` a Git
- [ ] Usar `NEXT_PUBLIC_` solo para variables públicas
- [ ] Rotar keys después del buildathon
- [ ] Usar diferentes keys para Preview vs Production

**Supabase**:

- [ ] Habilitar Row Level Security (RLS)
- [ ] Configurar políticas de acceso
- [ ] Limitar API calls por IP (si es posible)

**Vercel**:

- [ ] Habilitar 2FA en cuenta
- [ ] Revisar logs de deployment
- [ ] Configurar alertas de errores

---

## 📊 Costos Estimados

### Free Tier (Buildathon)

**Vercel**:

- Hobby plan: $0/mes
- 100GB bandwidth
- Unlimited deployments
- **Límite**: 1 team member

**Supabase**:

- Free tier: $0/mes
- 500MB database
- 1GB bandwidth
- 2GB storage
- **Límite**: 2 proyectos

**Total**: **$0/mes** ✅

### Escalamiento (Post-Buildathon)

**Vercel Pro**:

- $20/mes
- 1TB bandwidth
- Team collaboration
- Advanced analytics

**Supabase Pro**:

- $25/mes
- 8GB database
- 50GB bandwidth
- 100GB storage
- Daily backups

**Total**: **$45/mes** (si ganamos funding)

---

## 🚀 Próximos Pasos

### Inmediato

1. **Crear proyecto Supabase**

   - Ir a https://supabase.com/dashboard
   - Click "New Project"
   - Nombre: `puente-prod`
   - Región: `us-east-1`
   - Password: [generar seguro]

2. **Conectar Supabase con Vercel**

   - Vercel Dashboard → Integrations → Supabase
   - Autorizar y sincronizar

3. **Ejecutar Celo Composer**

   ```bash
   cd /Users/luissambrano/Proyectos/Lab/puente
   npx @celo/celo-composer@latest create
   ```

4. **Importar a Vercel**
   ```bash
   vercel
   ```

### Post-Celo Composer

5. **Configurar environment variables**
6. **Primer deployment**
7. **Verificar que funciona**
8. **Documentar en `docs/15-deployment.md`**

---

## 📚 Referencias

**Vercel**:

- [Vercel Docs](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)

**Supabase**:

- [Supabase Docs](https://supabase.com/docs)
- [Vercel Integration](https://supabase.com/docs/guides/platform/vercel-integration)
- [Database Schema](https://supabase.com/docs/guides/database/tables)

**Celo**:

- [Celo Composer](https://github.com/celo-org/celo-composer)
- [MiniPay Docs](https://docs.celo.org/minipay)

---

## ✅ Checklist de Setup

- [x] GitHub conectado con Vercel
- [ ] Proyecto Supabase creado
- [ ] Integración Supabase-Vercel configurada
- [ ] Celo Composer ejecutado
- [ ] Proyecto importado a Vercel
- [ ] Environment variables configuradas
- [ ] Primer deployment exitoso
- [ ] Custom domain configurado (opcional)
- [ ] Analytics habilitado

**Siguiente**: Crear proyecto Supabase
