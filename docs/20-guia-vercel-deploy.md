# Guía: Deploy a Vercel

> **Tiempo**: 10 minutos  
> **Objetivo**: Obtener URL pública de la app

---

## 📍 Paso 1: Importar Proyecto a Vercel

1. **Ir a**: https://vercel.com/new
2. **Login** con tu cuenta de GitHub (si no estás logueado)
3. **Buscar** el repositorio `LuisSambrano/puente`
4. **Click** en "Import"

---

## 📍 Paso 2: Configurar el Proyecto

Una vez que hagas click en "Import", verás una pantalla de configuración:

### **Framework Preset**

- Debería detectar automáticamente: **Next.js**
- Si no, selecciona "Next.js" del dropdown

### **Root Directory**

- **IMPORTANTE**: Click en "Edit"
- Cambiar a: `puente-app/apps/web`
- Esto le dice a Vercel dónde está el código del frontend

### **Build and Output Settings**

Vercel debería autodetectar, pero verifica:

- **Build Command**: `npm run build` (o `pnpm build`)
- **Output Directory**: `.next`
- **Install Command**: `npm install` (o `pnpm install`)

---

## 📍 Paso 3: Configurar Environment Variables

**CRÍTICO**: Antes de hacer deploy, debes agregar las environment variables.

En la sección **"Environment Variables"**, click en "Add" y agrega estas:

### Variable 1: WalletConnect

```
Name: NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID
Value: 8a45069a661709bc37c3324cf94f8330
```

### Variable 2: Supabase URL

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://emcmaqsigqhnskzepubp.supabase.co
```

### Variable 3: Supabase Anon Key

```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: sb_publishable_sYwqVOyK3zVB8vZRypHpdg_b-rNfk_9
```

### Variable 4: Supabase Service Key

```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtY21hcXNpZ3FobnNremVwdWJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY1Njc1MiwiZXhwIjoyMDg1MjMyNzUyfQ.unjq4_VU3NkKduUM57Sr9kA7ID5ysrlbWfv_Av4GikY
```

### Variable 5: Celo Network

```
Name: NEXT_PUBLIC_CELO_NETWORK
Value: mainnet
```

### Variable 6: Celo Chain ID

```
Name: NEXT_PUBLIC_CHAIN_ID
Value: 42220
```

**Nota**: Para cada variable, asegúrate de seleccionar **Production**, **Preview**, y **Development** environments.

---

## 📍 Paso 4: Deploy

1. **Verificar** que todo esté configurado:
   - ✅ Root Directory: `puente-app/apps/web`
   - ✅ Framework: Next.js
   - ✅ 6 Environment Variables agregadas

2. **Click** en el botón **"Deploy"**

3. **Esperar** 2-3 minutos mientras Vercel:
   - Clona el repositorio
   - Instala dependencias
   - Ejecuta el build
   - Deploya a producción

---

## 📍 Paso 5: Verificar Deployment

Una vez que termine, verás:

- ✅ "Congratulations!" o similar
- 🎉 Una URL de tu app (ejemplo: `https://puente-xyz.vercel.app`)

**Acciones**:

1. **Click** en "Visit" para abrir tu app
2. **Copiar** la URL completa
3. **Pégamela aquí**

---

## 🐛 Troubleshooting

### Error: "Build failed"

**Posibles causas**:

1. Root Directory incorrecto
   - **Solución**: Ir a Settings → General → Root Directory → Cambiar a `puente-app/apps/web`

2. Environment Variables faltantes
   - **Solución**: Settings → Environment Variables → Agregar las que falten

3. Dependencias faltantes
   - **Solución**: Vercel debería instalarlas automáticamente, pero verifica el log

### Error: "Module not found"

**Causa**: Probablemente el Root Directory está mal configurado

**Solución**:

1. Settings → General
2. Root Directory → `puente-app/apps/web`
3. Redeploy

---

## 📋 Checklist

- [ ] Ir a https://vercel.com/new
- [ ] Importar `LuisSambrano/puente`
- [ ] Configurar Root Directory: `puente-app/apps/web`
- [ ] Agregar 6 Environment Variables
- [ ] Click "Deploy"
- [ ] Esperar 2-3 minutos
- [ ] Copiar URL del deployment
- [ ] Pegar URL aquí

---

## 🎯 Qué Hacer Después

Una vez que me pases la URL, yo:

1. Verificaré que la app esté funcionando
2. Actualizaré la documentación con la URL
3. Procederemos con la integración Supabase-Vercel

**Pégame la URL** cuando esté listo! 🚀
