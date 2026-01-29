# Guía Paso a Paso: Crear Proyecto en Supabase

> **Tiempo**: 10 minutos  
> **Objetivo**: Obtener 3 valores para configurar el backend

---

## 📍 Paso 1: Ir al Dashboard

1. Abre tu navegador
2. Ve a: https://supabase.com/dashboard
3. Si no tienes cuenta:
   - Click "Sign Up"
   - Usa tu cuenta de GitHub (más rápido)
4. Si ya tienes cuenta:
   - Click "Sign In"

---

## 📍 Paso 2: Crear Nuevo Proyecto

1. Una vez en el dashboard, verás un botón verde **"New Project"**
2. Click en **"New Project"**
3. Te aparecerá un formulario con estos campos:

### Formulario de Nuevo Proyecto:

**Name** (Nombre del proyecto):

```
puente-prod
```

**Database Password** (Contraseña de la base de datos):

- Click en el icono de "generar" (🎲) para crear una contraseña segura
- **IMPORTANTE**: Copia esta contraseña y guárdala en un lugar seguro (1Password, Notes, etc.)
- La necesitarás si quieres conectarte directamente a la base de datos

**Region** (Región del servidor):

- Selecciona: **East US (North Virginia)**
- Es la más cercana a Venezuela

**Pricing Plan** (Plan de precios):

- Selecciona: **Free** (gratis)
- Incluye 500MB de database, suficiente para el buildathon

4. Click en el botón verde **"Create new project"**

---

## 📍 Paso 3: Esperar Setup Automático (2-3 minutos)

Después de crear el proyecto, verás una pantalla que dice:

```
Setting up project...
This may take a few minutes
```

**Qué está pasando**:

- Supabase está creando tu base de datos PostgreSQL
- Configurando APIs automáticas
- Generando tus credenciales

**Qué hacer**:

- ☕ Espera 2-3 minutos
- NO cierres la pestaña
- Cuando termine, la pantalla cambiará automáticamente

---

## 📍 Paso 4: Ir a Settings → API

Una vez que el proyecto esté listo:

1. En la barra lateral izquierda, busca el ícono de **engranaje** ⚙️
2. Click en **"Settings"**
3. En el menú de Settings, click en **"API"**

Ahora verás una página con tus credenciales.

---

## 📍 Paso 5: Copiar los 3 Valores

En la página de API, verás varias secciones. Necesitas copiar **3 valores**:

### Valor 1: **Project URL**

**Dónde está**:

- Sección: "Project URL" o "Config"
- Ejemplo: `https://abcdefghijk.supabase.co`

**Cómo copiarlo**:

- Hay un botón de copiar (📋) al lado
- Click en el botón
- O selecciona el texto y copia (Cmd+C)

**Pégame**:

```
URL: https://[tu-url-aqui].supabase.co
```

---

### Valor 2: **anon public key**

**Dónde está**:

- Sección: "Project API keys"
- Subsección: "anon public"
- Es un texto MUY largo que empieza con `eyJ...`

**Cómo copiarlo**:

- Click en el botón de copiar (📋) al lado de "anon public"
- O selecciona todo el texto y copia

**Pégame**:

```
ANON: eyJ[resto-de-la-key-muy-larga]
```

---

### Valor 3: **service_role key**

**Dónde está**:

- Misma sección: "Project API keys"
- Subsección: "service_role" (más abajo)
- También es un texto MUY largo que empieza con `eyJ...`

**IMPORTANTE**:

- Esta key es **secreta**, nunca la compartas públicamente
- Solo úsala en el backend (nunca en frontend)

**Cómo copiarlo**:

- Click en el botón de copiar (📋) al lado de "service_role"
- O selecciona todo el texto y copia

**Pégame**:

```
SERVICE: eyJ[resto-de-la-key-muy-larga]
```

---

## 📍 Paso 6: Pégame los 3 Valores

Una vez que tengas los 3 valores, pégamelos aquí en este formato:

```
URL: https://xxxxx.supabase.co
ANON: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SERVICE: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Yo haré**:

- Actualizar automáticamente el archivo `.env.local`
- Verificar que las keys sean válidas
- Commitear los cambios

---

## 🎯 Resumen Visual

```
1. Dashboard → "New Project"
   ↓
2. Llenar formulario:
   - Name: puente-prod
   - Password: [generar]
   - Region: East US
   - Plan: Free
   ↓
3. Click "Create new project"
   ↓
4. Esperar 2-3 min ☕
   ↓
5. Settings ⚙️ → API
   ↓
6. Copiar 3 valores:
   - Project URL
   - anon public key
   - service_role key
   ↓
7. Pégamelos aquí
```

---

## ❓ Preguntas Frecuentes

**P: ¿Cuánto tarda el setup?**
R: 2-3 minutos normalmente. Si tarda más de 5 minutos, refresca la página.

**P: ¿Dónde guardo la contraseña de la database?**
R: En un gestor de contraseñas (1Password, LastPass) o en Notes. La necesitarás si quieres conectarte directamente a PostgreSQL.

**P: ¿Las keys son seguras de compartir contigo?**
R: Sí, porque:

1. Estoy en tu máquina local
2. Solo las uso para configurar `.env.local`
3. `.env.local` NO se sube a GitHub (está en .gitignore)

**P: ¿Qué pasa si me equivoco al copiar?**
R: No pasa nada, puedo volver a pedirte los valores correctos.

---

## ✅ Checklist

- [ ] Ir a https://supabase.com/dashboard
- [ ] Login/Sign Up
- [ ] Click "New Project"
- [ ] Llenar: Name, Password, Region, Plan
- [ ] Click "Create new project"
- [ ] Esperar 2-3 minutos
- [ ] Ir a Settings → API
- [ ] Copiar Project URL
- [ ] Copiar anon public key
- [ ] Copiar service_role key
- [ ] Pegar los 3 valores aquí

---

¿Listo para empezar? Avísame cuando tengas los 3 valores! 🚀
