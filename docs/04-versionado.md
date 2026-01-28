# Sistema de Versionado - Puente

## Por Qué Necesitamos Esto

**VibeCoding** significa mostrar el proceso, no solo el resultado. Eso incluye:

- Decisiones que cambiamos
- Por qué las cambiamos
- Qué aprendimos

Este documento explica cómo vamos a documentar iteraciones.

---

## Estructura de Documentación

### Documentos Base (No Cambian)

```
docs/
├── 00-contexto.md           # Contexto del buildathon (fijo)
├── 01-brainstorming.md      # Proceso de ideación (fijo)
└── 02-decision-proyecto.md  # Decisión inicial (fijo)
```

Estos documentos son **históricos**. No los modificamos, muestran nuestro pensamiento inicial.

---

### Documentos Vivos (Se Actualizan)

```
docs/
├── 03-stack-tecnico.md      # Stack actual (se actualiza)
├── 04-arquitectura.md       # Diseño actual (se actualiza)
├── 05-setup.md              # Pasos de setup (se actualiza)
└── 99-iteraciones.md        # Log de cambios (append-only)
```

Estos documentos **evolucionan**. Cada cambio se documenta en `99-iteraciones.md`.

---

## Formato de Iteraciones

### En `99-iteraciones.md`

```markdown
## Iteración 2 - 2026-01-28

### Cambio

Actualización del stack técnico para usar Celo Composer

### Razón

Investigación reveló herramientas oficiales que simplifican desarrollo

### Qué Cambió

- **Antes**: Setup manual con create-next-app
- **Ahora**: Celo Composer con template de MiniPay

### Archivos Afectados

- `03-stack-tecnico.md` (actualizado)
- `buildathon-tasks.md` (actualizado)

### Aprendizaje

Siempre investigar el ecosistema antes de empezar desde cero

### Próximo Paso

Ejecutar Celo Composer y explorar template generado
```

---

## Versionado en Git

### Commits Descriptivos

**Formato**:

```
tipo(scope): descripción corta

Explicación más larga de:
- Qué cambió
- Por qué cambió
- Qué aprendimos
```

**Ejemplo**:

```bash
git commit -m "docs(stack): actualizar a Celo Composer

Cambios:
- Reemplazar setup manual por Celo Composer
- Agregar Viem en vez de RainbowKit
- Incluir proyectos de referencia (RentPay, Nexus)

Razón:
- Investigación reveló herramientas oficiales
- Template de MiniPay ya optimizado
- Ahorra días de configuración

Aprendizaje:
- Ecosistema Celo tiene tooling maduro
- Vale la pena investigar antes de empezar

Archivos:
- docs/03-stack-tecnico.md
- docs/99-iteraciones.md
"
```

---

### Branches para Experimentación

**Estrategia**:

```
main              # Versión estable, documentada
├── feature/passport-integration
├── feature/ui-components
└── experiment/socialconnect
```

**Reglas**:

1. `main` siempre tiene documentación actualizada
2. Features se documentan antes de merge
3. Experiments pueden fallar (y se documenta por qué)

---

## Documentación Local vs GitHub

### Local (`/Users/luissambrano/Proyectos/Lab/puente/`)

```
puente/
├── docs/              # Documentación completa
│   ├── 00-contexto.md
│   ├── 01-brainstorming.md
│   ├── ...
│   └── 99-iteraciones.md
├── src/               # Código
├── contracts/         # Smart contracts
└── README.md          # Overview para GitHub
```

**Todo se versiona en Git**.

---

### GitHub (Público)

**README.md** (conciso, profesional):

```markdown
# Puente

Remesas peer-to-peer para Venezuela usando Celo.

## Problema

[Descripción breve]

## Solución

[Descripción breve]

## Stack

- Celo + MiniPay
- Human.Tech Passport
- Next.js + Viem

## Documentación Completa

Ver carpeta `/docs` para proceso completo de desarrollo.

## VibeCoding

Este proyecto documenta todo el proceso de construcción,
incluyendo decisiones, cambios, y aprendizajes.
```

**Carpeta `/docs`** (completa, transparente):

- Todo el proceso de razonamiento
- Decisiones y cambios
- Aprendizajes y errores

---

## Ejemplo de Iteración Completa

### Situación

Descubrimos Celo Composer después de decidir stack inicial.

### Proceso

**1. Documentar el descubrimiento**

```markdown
# En 99-iteraciones.md

## Iteración 2 - Descubrimiento de Celo Composer

[Detalles del cambio]
```

**2. Actualizar documentos afectados**

```bash
# Actualizar stack técnico
vim docs/03-stack-tecnico.md

# Actualizar tasks
vim docs/buildathon-tasks.md
```

**3. Commit con contexto**

```bash
git add docs/
git commit -m "docs(stack): actualizar a Celo Composer

[Mensaje detallado con razón y aprendizaje]
"
```

**4. Push a GitHub**

```bash
git push origin main
```

**5. Actualizar README si es necesario**

```bash
# Si el cambio afecta el overview
vim README.md
git commit -m "docs: actualizar README con nuevo stack"
```

---

## Tracking de Decisiones

### Decisiones Mayores

**Formato en `99-iteraciones.md`**:

```markdown
### Decisión: Usar Celo Composer

**Contexto**: Necesitábamos setup de Next.js + Celo

**Opciones consideradas**:

1. Setup manual desde cero
2. Usar Celo Composer
3. Fork de proyecto existente

**Decisión**: Opción 2 (Celo Composer)

**Razón**:

- Template oficial optimizado
- Ahorra tiempo de configuración
- Best practices incluidas

**Trade-offs**:

- Menos control sobre setup inicial
- Dependencia de template oficial
- Pero: Vale la pena por velocidad

**Resultado esperado**:

- Setup en 1 día en vez de 3-4 días
- Más tiempo para features únicas
```

---

### Decisiones Menores

**En commits**:

```bash
git commit -m "feat: agregar validación de monto

Decisión: Validar monto antes de enviar transacción

Razón: Prevenir errores de usuario y gas desperdiciado

Implementación: Zod schema en frontend
"
```

---

## Aprendizajes Documentados

### Formato

````markdown
## Aprendizaje: Fee Abstraction en Celo

**Qué aprendimos**:
Celo permite pagar gas con cUSD en vez de CELO nativo

**Por qué importa**:
Usuarios no necesitan dos tokens (CELO + cUSD), solo cUSD

**Cómo se implementa**:

```typescript
const walletClient = createWalletClient({
  feeCurrency: cUSD_ADDRESS,
});
```
````

**Fuente**:

- Docs de Viem
- Ejemplo en RentPay
- Mentoría 1

**Aplicación en Puente**:
Configurado en `lib/viem.ts`

```

---

## Métricas de Documentación

### Qué Medimos

- **Commits por día**: Frecuencia de cambios
- **Iteraciones documentadas**: Cambios mayores
- **Aprendizajes capturados**: Conocimiento nuevo
- **Decisiones registradas**: Cambios de dirección

### Por Qué

**Para VibeCoding**: Mostrar proceso activo de construcción

**Para nosotros**: No olvidar por qué hicimos algo

**Para jueces**: Demostrar pensamiento crítico

---

## Herramientas

### Para Documentación

- **Editor**: VSCode con Markdown Preview
- **Diagramas**: Mermaid (en markdown)
- **Screenshots**: Incluir en `/docs/assets/`
- **Videos**: Links a YouTube/Loom

### Para Versionado

- **Git**: Control de versiones
- **GitHub**: Repositorio público
- **Conventional Commits**: Formato estándar

---

## Próximos Pasos

1. **Crear `99-iteraciones.md`**
   - Inicializar con Iteración 1 (decisión inicial)
   - Agregar Iteración 2 (Celo Composer)

2. **Setup Git**
   - Inicializar repo
   - Primer commit con docs actuales
   - Push a GitHub

3. **Establecer workflow**
   - Documentar antes de codear
   - Commit frecuente con contexto
   - Actualizar iteraciones al final del día

¿Procedemos a crear el repositorio e inicializar el proyecto?
```
