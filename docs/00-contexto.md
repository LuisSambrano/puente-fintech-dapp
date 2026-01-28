# LatAm Hubs Buildathon 2026 - One Man Army

## Contexto

Esto es un buildathon de VibeCoding. No se trata de vender humo, sino de construir en público y mostrar el proceso real de desarrollo.

---

## Información Básica

**Equipo**: One Man Army  
**Periodo**: 19 enero - 27 febrero 2026  
**Deadline**: 27 febrero, 20:59 hora Argentina (23:59 UTC)

### Tracks Disponibles

**Open Track** (proyectos nuevos)

- 1er lugar: 1,000 CELO + 200 cUSD
- 2do lugar: 700 CELO + 70 cUSD
- 3er lugar: 300 CELO + 30 cUSD

**MiniApps Track** (se permiten proyectos existentes)

- 1er lugar: 3,000 CELO + 300 cUSD
- 2do lugar: 2,000 CELO + 150 cUSD
- 3er lugar: 1,000 CELO + 50 cUSD

**Bounties de Sponsors**

- Human.Tech: $1,000 USDC (por integrar WaaP o Passport)
- v0: $1,000 en créditos (por usar v0 y publicar template)

### Requisitos Técnicos

- Desplegar en Celo Mainnet (obligatorio)
- URL pública funcionando
- Repositorio GitHub público
- Video demo (máx 3 min)
- Presentación
- Entregar vía Karma Gap

**Bonus**: Proyectos con más transacciones en Mainnet tienen consideración especial para premios más altos.

---

## Nuestro Enfoque

### Por Qué VibeCoding

Este buildathon es de VibeCoding. Eso significa:

1. **Construir en público**: Mostrar el proceso, no solo el resultado
2. **Transparencia total**: Documentar decisiones, errores, aprendizajes
3. **Razonamiento visible**: Explicar el "por qué" detrás de cada decisión técnica
4. **Proceso iterativo**: Mostrar cómo evolucionan las ideas

### Cómo Integramos Nuestras Herramientas

Tenemos un arsenal de skills, workflows y reglas que ya usamos. La idea es:

**Documentar cómo aplicamos nuestras propias herramientas al proyecto del buildathon.**

Esto incluye:

- Nuestros workflows de GitHub Actions (que acabamos de endurecer)
- Nuestras skills personalizadas de Antigravity
- Nuestras reglas de desarrollo
- Nuestro proceso de toma de decisiones

### El Meta-Proyecto

No solo vamos a construir una app. Vamos a documentar:

1. **Brainstorming**: Cómo llegamos a la idea
2. **Decisiones técnicas**: Por qué elegimos X sobre Y
3. **Arquitectura**: Cómo razonamos la estructura
4. **Problemas encontrados**: Qué falló y cómo lo resolvimos
5. **Integración de herramientas**: Cómo usamos nuestras skills/workflows

---

## Estructura de Documentación

### Lo Que Vamos a Documentar

```
one-man-army/
├── docs/
│   ├── 00-contexto.md              # Este archivo
│   ├── 01-brainstorming.md         # Proceso de ideación
│   ├── 02-decisiones-tecnicas.md   # Por qué elegimos cada tech
│   ├── 03-arquitectura.md          # Razonamiento de arquitectura
│   ├── 04-integracion-skills.md    # Cómo usamos nuestras skills
│   ├── 05-workflows.md             # Workflows aplicados al proyecto
│   ├── 06-problemas.md             # Log de problemas y soluciones
│   └── 07-aprendizajes.md          # Qué aprendimos
```

### Formato de Documentación

**Español natural, sin hype**. Ejemplo:

❌ MAL:

```
¡Revolucionaria arquitectura que transformará el ecosistema!
```

✅ BIEN:

```
Decidimos usar Next.js porque:
1. Ya lo conocemos bien
2. Tiene buen soporte para Celo
3. v0 genera componentes de Next.js
```

---

## Decisiones Iniciales a Tomar

### 1. ¿Qué Track?

**Opciones**:

- Open Track: Libertad total, menos premio
- MiniApps: Más premio, más restricciones (Farcaster/MiniPay)

**Pregunta para ti**: ¿Tienes experiencia con Farcaster o MiniPay? ¿O prefieres libertad total?

### 2. ¿Qué Bounties?

**Human.Tech** ($1,000 USDC)

- Requiere integrar Passport (proof-of-personhood)
- Útil para prevenir bots/sybils
- ¿Tu proyecto necesita verificación de identidad?

**v0** ($1,000 créditos)

- Requiere usar v0 para UI
- Publicar como template público
- Mostrar branding de v0
- ¿Te sirve para acelerar desarrollo de UI?

### 3. ¿Qué Vamos a Construir?

Necesitamos una idea que:

1. Resuelva un problema real
2. Sea factible en 5 semanas
3. Genere transacciones (para el bonus)
4. Se alinee con tus intereses/experiencia

---

## Nuestro Proceso de Trabajo

### Cómo Vamos a Trabajar

1. **Documentar antes de codear**: Razonamiento primero, código después
2. **Commits atómicos**: Como acabamos de hacer con los workflows
3. **Workflows automatizados**: Aplicar lo que ya sabemos
4. **Skills reutilizables**: Usar nuestras skills de Antigravity
5. **Construcción en público**: Todo el proceso visible

### Herramientas Que Ya Tenemos

**GitHub Actions** (recién endurecidos):

- Changelog automático
- Stats reports semanales
- CI/CD robusto con error handling

**Antigravity Skills**:

- Skill creator
- Architect (para decisiones de arquitectura)
- Otros que tengamos

**Workflows**:

- Los que ya definimos en `.agent/workflows/`

### Cómo Las Vamos a Integrar

**Ejemplo concreto**:

Si usamos nuestro workflow de changelog:

```
docs/05-workflows.md:
"Aplicamos nuestro workflow hardened de changelog porque:
- Genera changelog automático en cada release
- Ya lo probamos y funciona
- Demuestra que usamos nuestras propias herramientas
- Es parte de nuestra metodología de trabajo"
```

---

## Próximos Pasos Reales

### Lo Que Necesito Saber

1. **Idea de proyecto**: ¿Ya tienes algo en mente? ¿O brainstormeamos juntos?

2. **Experiencia técnica**:
   - ¿Has trabajado con Celo antes?
   - ¿Conoces Farcaster/MiniPay?
   - ¿Nivel de experiencia con Web3?

3. **Track preferido**:
   - ¿Open (libertad) o MiniApps (más premio)?

4. **Bounties**:
   - ¿Te interesa Human.Tech Passport?
   - ¿Quieres usar v0?

### Estructura Inicial

Una vez tengamos claridad, crearemos:

```
/Users/luissambrano/Proyectos/Lab/one-man-army/
```

Con:

- Repositorio GitHub
- Estructura de proyecto
- Documentación de proceso
- Setup inicial

---

## Filosofía del Proyecto

**Esto NO es**:

- Marketing
- Promesas vacías
- Hype artificial

**Esto ES**:

- Proceso real de desarrollo
- Decisiones documentadas
- Problemas y soluciones reales
- Construcción transparente en público

**Para VibeCoding**: Mostrar cómo pensamos, cómo decidimos, cómo construimos.

---

## Preguntas para Ti

1. ¿Qué tipo de aplicación te gustaría construir?
2. ¿Prefieres enfocarte en un track específico o ir por varios bounties?
3. ¿Cuál es tu nivel de comodidad con las tecnologías del buildathon?
4. ¿Hay alguna idea que ya tengas en mente?

Una vez tengamos esto claro, armamos el proyecto y empezamos a documentar el proceso de construcción.
