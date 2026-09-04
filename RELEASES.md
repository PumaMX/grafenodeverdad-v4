# Versiones públicas de Grafeno de Verdad

Este archivo registra los puntos de retorno de la página pública. Las versiones no se identifican visualmente ante el visitante; se controlan en Git y en Vercel.

## V5 · congelada

- Tag: `v5.0.0`
- Rama: `release/v5`
- Commit: `df48990b46ed44730a5adaceaffd6e1c9dfad544`
- Despliegue preservado: `grafenodeverdad-9bix7ho3z-pumas-projects-775e0fed.vercel.app`

Este punto contiene la V5 que estaba publicada antes de iniciar formalmente la V6. No deben añadirse commits a `release/v5`.

## V6 · línea activa

- Rama de trabajo: `v6/whitepaper-solutions`
- Rama de producción: `main`
- Alcance inicial: fichas bilingües de aplicaciones sustentadas en los whitepapers y protección del mensaje editorial de cierre.

La frase **“¿Tiene un problema de materiales? Desarrollemos una solución.”** es texto editorial protegido de V6 y debe conservarse literalmente.

## Retorno a V5

1. En Vercel, hacer rollback al despliegue V5 registrado arriba.
2. Para continuar el código desde V5, crear una rama nueva a partir de `v5.0.0` o `release/v5`.
3. No mover ni sobrescribir el tag `v5.0.0`.

El rollback de Vercel recupera la compilación desplegada. El tag y la rama permiten recuperar exactamente el código fuente correspondiente.
