# Tareas Manuales del Usuario

> **Fecha**: 29 Enero 2026  
> **Objetivo**: Separar tareas que solo el usuario puede hacer vs las que Antigravity puede automatizar

---

## 🔴 Tareas que SOLO TÚ Puedes Hacer

### 1. **Crear Proyecto en WalletConnect Cloud** ⏳

**Por qué solo tú**:

- Requiere login con tu cuenta personal
- Puede tener captcha o 2FA

**Pasos**:

1. Ir a https://cloud.walletconnect.com
2. Login o Sign Up
3. Click "Create New Project"
4. Llenar:
   - **Project Name**: `Puente`
   - **Description**: `P2P remittance platform for Venezuela using Celo and MiniPay`
   - **Homepage URL**: `https://github.com/LuisSambrano/puente`
5. Click "Create"
6. **Copiar el Project ID** (string largo alfanumérico)

**Qué hacer después**:

```bash
# Crear archivo .env.local en apps/web/
cd /Users/luissambrano/Proyectos/Lab/puente/puente-app/apps/web
echo "NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=tu_project_id_aqui" > .env.local
```

**Tiempo estimado**: 5 minutos

---

### 2. **Crear Proyecto en Supabase** ⏳

**Por qué solo tú**:

- Requiere login con tu cuenta
- Puede requerir verificación de email

**Pasos**:

1. Ir a https://supabase.com/dashboard
2. Login o Sign Up
3. Click "New Project"
4. Llenar:
   - **Name**: `puente-prod`
   - **Database Password**: [generar uno seguro, guardar en 1Password]
   - **Region**: `East US (North Virginia)` (más cercano a Venezuela)
   - **Pricing Plan**: `Free`
5. Click "Create new project"
6. Esperar 2-3 minutos (setup de database)
7. **Copiar credenciales**:
   - Project URL
   - Anon key
   - Service role key (en Settings → API)

**Qué hacer después**:

```bash
# Agregar a apps/web/.env.local
echo "NEXT_PUBLIC_SUPABASE_URL=https://tu-project-id.supabase.co" >> apps/web/.env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key" >> apps/web/.env.local
echo "SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key" >> apps/web/.env.local
```

**Tiempo estimado**: 10 minutos

---

### 3. **Conectar Supabase con Vercel** ⏳

**Por qué solo tú**:

- Requiere autorización OAuth entre cuentas

**Pasos**:

1. Ir a https://vercel.com/dashboard
2. Click en tu proyecto (cuando lo importes)
3. Settings → Integrations
4. Buscar "Supabase"
5. Click "Add Integration"
6. Autorizar acceso
7. Seleccionar proyecto `puente-prod`
8. Seleccionar environments (Production, Preview, Development)

**Resultado**: Variables de entorno se sincronizan automáticamente

**Tiempo estimado**: 5 minutos

---

### 4. **Importar Proyecto a Vercel** ⏳

**Por qué solo tú**:

- Requiere autorización de GitHub

**Pasos**:

1. Ir a https://vercel.com/new
2. Click "Import Git Repository"
3. Seleccionar `LuisSambrano/puente`
4. Configurar:
   - **Framework Preset**: Next.js
   - **Root Directory**: `puente-app/apps/web`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Click "Deploy"

**Tiempo estimado**: 5 minutos

---

### 5. **Crear Perfil en Karma Gap** ⏳

**Por qué solo tú**:

- Requiere wallet connection
- Puede requerir verificación

**Pasos**:

1. Ir a https://gap.karmahq.xyz/
2. Connect Wallet (usar MetaMask)
3. Crear perfil
4. Crear nuevo proyecto "Puente"
5. Agregar:
   - GitHub repo
   - Demo URL
   - Video demo (cuando esté listo)
   - Pitch deck (cuando esté listo)

**Tiempo estimado**: 15 minutos (después de tener materiales)

---

### 6. **Registrar App en Human.Tech** ⏳

**Por qué solo tú**:

- Requiere cuenta y verificación

**Pasos**:

1. Ir a https://human.tech/
2. Sign Up / Login
3. Dashboard → Create New App
4. Llenar:
   - **App Name**: `Puente`
   - **Description**: `P2P remittance platform for Venezuela`
   - **Callback URL**: `https://puente-remesas.vercel.app/auth/callback`
5. **Copiar credenciales**:
   - App ID
   - Secret Key

**Qué hacer después**:

```bash
# Agregar a apps/web/.env.local
echo "NEXT_PUBLIC_PASSPORT_APP_ID=tu_app_id" >> apps/web/.env.local
echo "PASSPORT_SECRET_KEY=tu_secret_key" >> apps/web/.env.local
```

**Tiempo estimado**: 10 minutos

---

### 7. **Grabar Video Demo** ⏳

**Por qué solo tú**:

- Requiere tu voz y presentación

**Pasos**:

1. Preparar script (yo te lo puedo generar)
2. Usar Loom o QuickTime
3. Grabar demo (2-3 minutos):
   - Problema (30 seg)
   - Solución (1 min)
   - Demo en vivo (1 min)
   - Impacto (30 seg)
4. Subir a YouTube (unlisted)
5. Copiar link

**Tiempo estimado**: 30-45 minutos

---

### 8. **Crear Pitch Deck** ⏳

**Por qué solo tú**:

- Requiere tu visión y narrativa

**Pasos**:

1. Usar template que yo genere
2. Personalizar con tu voz
3. Exportar a PDF
4. Subir a Google Drive (público)

**Tiempo estimado**: 1-2 horas (yo genero template, tú personalizas)

---

### 9. **Reclutar Early Testers** ⏳

**Por qué solo tú**:

- Requiere tu red personal

**Pasos**:

1. Contactar 10-20 venezolanos
2. Explicar el proyecto
3. Pedirles que prueben la app
4. Recolectar feedback

**Tiempo estimado**: Ongoing (1-2 horas/semana)

---

### 10. **Submission Final a Karma Gap** ⏳

**Por qué solo tú**:

- Requiere tu wallet y autorización

**Pasos**:

1. Ir a formulario de submission
2. Pegar link de Karma Gap
3. Confirmar con wallet
4. Submit antes del deadline (Feb 27, 23:59 UTC)

**Tiempo estimado**: 5 minutos

---

## 🟢 Tareas que YO (Antigravity) Puedo Hacer

### 1. **Configurar Environment Variables Localmente** ✅

**Qué hago**:

```bash
# Crear archivo .env.local con placeholders
cd puente-app/apps/web
cat > .env.local << EOF
# WalletConnect
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=PLACEHOLDER_WALLETCONNECT_ID

# Supabase
NEXT_PUBLIC_SUPABASE_URL=PLACEHOLDER_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=PLACEHOLDER_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=PLACEHOLDER_SUPABASE_SERVICE_KEY

# Human.Tech Passport
NEXT_PUBLIC_PASSPORT_APP_ID=PLACEHOLDER_PASSPORT_APP_ID
PASSPORT_SECRET_KEY=PLACEHOLDER_PASSPORT_SECRET_KEY

# Celo
NEXT_PUBLIC_CELO_NETWORK=mainnet
NEXT_PUBLIC_CHAIN_ID=42220
EOF
```

**Tú solo reemplazas** los PLACEHOLDER con los valores reales.

---

### 2. **Escribir Smart Contracts** ✅

**Qué hago**:

- Crear `RemittanceEscrow.sol`
- Crear `PassportVerifier.sol`
- Escribir tests
- Configurar deployment scripts

**Tú solo**: Revisas y apruebas

---

### 3. **Generar Componentes UI con v0** ✅

**Qué hago**:

- Crear prompts para v0
- Copiar código generado
- Integrar en el proyecto
- Ajustar styling

**Tú solo**: Revisas diseño final

---

### 4. **Integrar Passport SDK** ✅

**Qué hago**:

- Instalar dependencias
- Crear hooks de React
- Implementar flujo de verificación
- Documentar uso

**Tú solo**: Pruebas que funcione

---

### 5. **Configurar Supabase Schema** ✅

**Qué hago**:

- Crear tablas (users, transactions, etc.)
- Configurar RLS policies
- Crear Edge Functions
- Generar TypeScript types

**Tú solo**: Ejecutas migrations en Supabase

---

### 6. **Generar Script de Video Demo** ✅

**Qué hago**:

- Escribir guión completo
- Timing de cada sección
- Bullet points clave
- Sugerencias de tomas

**Tú solo**: Grabas siguiendo el script

---

### 7. **Generar Template de Pitch Deck** ✅

**Qué hago**:

- Crear 10-15 slides
- Contenido completo
- Sugerencias de diseño
- Datos y métricas

**Tú solo**: Personalizas y exportas

---

### 8. **Documentar Todo** ✅

**Qué hago**:

- README updates
- Documentación técnica
- Guías de uso
- Changelog

**Tú solo**: Revisas

---

### 9. **Testing y Debugging** ✅

**Qué hago**:

- Escribir tests unitarios
- Tests de integración
- Identificar bugs
- Proponer fixes

**Tú solo**: Apruebas fixes

---

### 10. **Preparar Submission Materials** ✅

**Qué hago**:

- Compilar todos los links
- Verificar checklist
- Generar resumen ejecutivo
- Preparar FAQ

**Tú solo**: Haces el submit final

---

## 📋 Checklist de Tareas Manuales (Orden Recomendado)

### **Ahora (Semana 1)**

- [ ] 1. Crear proyecto WalletConnect (5 min)
- [ ] 2. Crear proyecto Supabase (10 min)
- [ ] 3. Registrar app en Human.Tech (10 min)
- [ ] 4. Importar proyecto a Vercel (5 min)
- [ ] 5. Conectar Supabase con Vercel (5 min)

**Total**: ~45 minutos

---

### **Después (Semana 2-3)**

- [ ] 6. Reclutar early testers (ongoing)
- [ ] 7. Crear perfil en Karma Gap (15 min)

---

### **Final (Semana 4)**

- [ ] 8. Grabar video demo (45 min)
- [ ] 9. Personalizar pitch deck (2 horas)
- [ ] 10. Submission final (5 min)

---

## 🎯 Flujo de Trabajo Recomendado

### **Para cada tarea manual**:

1. **Yo te preparo**:
   - Documentación clara
   - Pasos exactos
   - Screenshots de ejemplo
   - Comandos listos para copiar

2. **Tú ejecutas**:
   - Sigues los pasos
   - Copias los valores
   - Me los pasas

3. **Yo integro**:
   - Actualizo .env.local
   - Configuro el código
   - Hago commit
   - Verifico que funcione

---

## 💡 Ejemplo de Flujo

**Tarea**: Configurar WalletConnect

**Yo hago**:

```bash
# Crear .env.local con placeholder
echo "NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=PLACEHOLDER" > apps/web/.env.local
```

**Tú haces**:

1. Ir a cloud.walletconnect.com
2. Crear proyecto
3. Copiar Project ID: `abc123xyz789`

**Me pasas**:

> "Project ID: abc123xyz789"

**Yo hago**:

```bash
# Reemplazar placeholder
sed -i '' 's/PLACEHOLDER/abc123xyz789/' apps/web/.env.local
git add apps/web/.env.local
git commit -m "config: add WalletConnect Project ID"
```

---

## ✅ Próximo Paso Inmediato

**Tarea 1: WalletConnect** (5 minutos)

1. Abre https://cloud.walletconnect.com
2. Crea proyecto "Puente"
3. Copia el Project ID
4. Pégamelo aquí

Mientras tanto, yo preparo el archivo .env.local con placeholders.

¿Listo para empezar?
