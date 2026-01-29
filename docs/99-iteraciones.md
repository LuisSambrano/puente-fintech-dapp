# Iteraciones - Puente

## Propósito

Este documento registra TODOS los cambios mayores, decisiones, y aprendizajes del proyecto.

**Formato**: Append-only (solo agregar, nunca borrar)

---

## Iteración 1 - Definición Inicial

**Fecha**: 2026-01-28

### Decisión

Proyecto "Puente" - Plataforma de remesas para Venezuela

### Contexto

- Buildathon LatAm Hubs 2026
- Equipo: One Man Army (solo)
- Experiencia: Poca en Web3/React
- Herramientas: Google AI Pro, Supabase, Vercel

### Stack Inicial Decidido

- Frontend: Next.js (desde cero)
- Blockchain: Celo + RainbowKit
- Backend: Supabase
- UI: v0

### Razonamiento

- Problema real (remesas Venezuela)
- MiniApps track (premio mayor)
- Human.Tech Passport (verificación)
- v0 (acelerar UI)

### Archivos Creados

- `00-contexto.md`
- `01-brainstorming.md`
- `02-decision-proyecto.md`
- `buildathon-tasks.md`

### Próximo Paso

Inicializar proyecto con Next.js

---

## Iteración 2 - Descubrimiento de Celo Composer

**Fecha**: 2026-01-28 (tarde)

### Cambio

Actualización completa del stack técnico

### Qué Descubrimos

Usuario investigó con Gemini y encontró:

- **Celo Composer**: CLI oficial para generar proyectos
- **MiniPay Template**: Template específico para MiniPay
- **Viem**: Librería recomendada (no RainbowKit)
- **Proyectos de referencia**: RentPay, Nexus, Paycraft

### Decisiones Actualizadas

**Antes**:

- Setup manual con `create-next-app`
- RainbowKit para wallets
- Sin proyectos de referencia

**Ahora**:

- Celo Composer con template MiniPay
- Viem + Wagmi (recomendación oficial)
- Estudiar RentPay como referencia
- Shadcn/UI + v0 para componentes

### Razonamiento del Cambio

**Por qué Celo Composer**:

1. Template oficial optimizado para MiniPay
2. Configuración de Viem pre-hecha
3. Fee abstraction configurada (gas con cUSD)
4. Ahorra 3-4 días de setup

**Por qué Viem**:

1. Recomendación oficial de Celo
2. Soporte nativo de fee abstraction
3. Más moderno que contractkit
4. Mejor TypeScript support

**Por qué RentPay como referencia**:

1. Caso de uso similar (pagos/remesas)
2. Usa MiniPay
3. Código de calidad
4. Podemos aprender patterns

### Trade-offs

**Ventajas**:

- ✅ Velocidad (setup en minutos)
- ✅ Best practices oficiales
- ✅ Menos bugs potenciales
- ✅ Ejemplos funcionales

**Desventajas**:

- ⚠️ Menos control sobre setup inicial
- ⚠️ Dependencia de template
- ⚠️ Curva de aprendizaje de Viem

**Conclusión**: Ventajas superan desventajas ampliamente

### Archivos Afectados

- `03-stack-tecnico.md` (creado/actualizado)
- `04-versionado.md` (creado)
- `99-iteraciones.md` (este archivo, creado)
- `buildathon-tasks.md` (necesita actualización)

### Aprendizajes

**Lección 1**: Siempre investigar el ecosistema antes de empezar

- No asumimos que había herramientas oficiales
- Investigación de 30 minutos ahorró días de trabajo

**Lección 2**: Las comunidades maduras tienen tooling maduro

- Celo tiene años de desarrollo
- Templates oficiales son de alta calidad
- Vale la pena usar herramientas oficiales

**Lección 3**: Proyectos de referencia son oro

- Ver código real > leer docs
- RentPay resuelve problemas similares
- Podemos copiar patterns (con atribución)

### Herramientas Nuevas Identificadas

**Celo Composer**:

- Comando: `npx @celo/celo-composer@latest create`
- Repo: https://github.com/celo-org/celo-composer

**MiniPay Template**:

- Repo: https://github.com/celo-org/minipay-template

**RentPay** (referencia):

- Repo: https://github.com/Amity808/rentpay

**Nexus** (SocialConnect):

- Repo: https://github.com/celo-org/nexus

**ngrok** (testing):

- Para probar en MiniPay real
- Expone localhost a internet

### Próximos Pasos Actualizados

1. ✅ Documentar cambio (este archivo)
2. ⏳ Actualizar `buildathon-tasks.md`
3. ⏳ Ejecutar Celo Composer
4. ⏳ Explorar template generado
5. ⏳ Clonar y estudiar RentPay
6. ⏳ Documentar aprendizajes de RentPay

### Métricas

**Tiempo invertido en investigación**: ~1 hora  
**Tiempo ahorrado estimado**: 3-4 días  
**ROI**: Excelente

---

## Template para Próximas Iteraciones

```markdown
## Iteración X - [Título del Cambio]

**Fecha**: YYYY-MM-DD

### Cambio

[Qué cambió]

### Contexto

[Por qué consideramos el cambio]

### Decisión

[Qué decidimos hacer]

### Razonamiento

[Por qué esta decisión]

### Trade-offs

**Ventajas**:

- [Lista]

**Desventajas**:

- [Lista]

### Archivos Afectados

- [Lista de archivos]

### Aprendizajes

[Qué aprendimos]

### Próximos Pasos

[Qué sigue]
```

---

## Notas

- Este archivo crece con el proyecto
- Cada iteración se agrega al final
- Nunca borramos iteraciones anteriores
- Formato consistente para fácil lectura
- Commits frecuentes de este archivo

---

## Iteración 3 - Registro del Equipo y Organización de Recursos

**Fecha**: 2026-01-28 (noche)

### Cambio

Registro oficial del equipo y organización de documentación de referencia

### Acciones Completadas

**1. Setup de MetaMask y Celo**

- Configurado Celo Mainnet en MetaMask
- Cuenta "One Man Army" creada
- Dirección de wallet obtenida

**2. Registro del Equipo**

- Equipo registrado en LatAm Hubs
- Esperando confirmación
- 3 CELO pendientes de recibir

**3. Repositorio GitHub**

- Creado: https://github.com/LuisSambrano/puente
- Documentación inicial pusheada (8 archivos, 2,327 líneas)
- RentPay clonado para referencia

**4. Organización de Recursos**

- Creado `06-recursos-referencia.md`
- Documentación oficial organizada por prioridad
- FAQ del buildathon documentado

**5. Identidad del Proyecto**

- Creado `07-mision-vision.md`
- Misión, visión y objetivos definidos
- Estructura de pitch deck preparada
- Narrativa para jueces desarrollada

### Documentación Agregada

**Recursos de Referencia**:

- Human.Tech (docs, WaaP, Passport)
- v0 (docs, templates)
- Celo Academy (tutoriales en español)
- Videos de VibeCoding
- FAQ completo del buildathon

**Misión y Visión**:

- Historia del proyecto
- Propuesta de valor (remitente y receptor)
- Diferenciadores vs competencia
- Estructura de pitch deck (10 slides)
- Narrativa para presentación

### Aprendizajes

**Lección 1**: Configuración de redes en MetaMask

- Algunos RPCs de Celo Alfajores no funcionan
- Mainnet es suficiente para empezar
- Alfajores solo necesario para testing

**Lección 2**: Importancia de la narrativa

- No es solo código, es una historia
- Misión/visión ayudan a enfocar desarrollo
- Pitch deck se construye desde el principio

**Lección 3**: Documentación como ventaja

- Organizar recursos ahorra tiempo después
- FAQ del buildathon tiene info crítica
- Referencia centralizada facilita desarrollo

### Recursos Clave Identificados

**Para Passport**:

- https://docs.passport.xyz/building-with-passport/embed/introduction
- Embeds son el approach recomendado

**Para v0**:

- https://v0.app/templates
- Publicar como template es requisito

**Para MiniApp**:

- https://www.celo.mx/academy/construye-tu-miniapp-en-farcaster
- Tutorial completo en español

### Criterios de Evaluación Confirmados

1. **Impacto** - Problema real, solución real
2. **Calidad** - Código limpio, bien documentado
3. **Demo** - Clara y convincente
4. **Historia** - Narrativa compelling
5. **Transacciones** - Más volumen = mejor consideración

### Estrategia de Bounties Confirmada

**Human.Tech** ($1,000 USDC):

- Enfocarnos en Passport embeds ($250 x 2)
- Implementación de calidad > cantidad

**v0** ($1,000 créditos):

- Usar v0 para todos los componentes
- Publicar como template público
- Mostrar branding claramente

### Próximos Pasos Inmediatos

1. ✅ Equipo registrado
2. ⏳ Esperar confirmación y 3 CELO
3. ⏳ Ejecutar Celo Composer
4. ⏳ Explorar estructura generada
5. ⏳ Estudiar RentPay
6. ⏳ Primer componente con v0

### Archivos Afectados

- `docs/06-recursos-referencia.md` (creado)
- `docs/07-mision-vision.md` (creado)
- `docs/99-iteraciones.md` (este archivo)

---

**Última actualización**: 2026-01-28  
**Total de iteraciones**: 3  
**Próxima iteración esperada**: Después de ejecutar Celo Composer
