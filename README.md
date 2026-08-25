# Grafeno de Verdad · V5

Sitio corporativo y catálogo técnico bilingüe de Grafeno de Verdad, S.A. de C.V. La V5 está construida con Next.js App Router y prioriza selección de materiales, co-desarrollo, evidencia técnica y conversión B2B.

## Desarrollo local

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. La raíz redirige a `/es`; la versión en inglés vive en `/en`.

## Verificación

```bash
npm run check
```

El comando ejecuta ESLint, valida slugs y campos bilingües del catálogo, y genera la compilación de producción.

## Estructura

- `src/app/[locale]`: páginas localizadas y rutas técnicas.
- `src/data/site-content.js`: fuente única para materiales, soluciones y navegación.
- `src/components`: identidad, navegación, tarjetas y brief de proyecto.
- `src/lib/site.js`: URL canónica, correo y utilidades de localización.
- `scripts/validate-content.mjs`: controles mínimos del catálogo.

## Configuración

Copie `.env.example` a `.env.local` y defina:

- `NEXT_PUBLIC_SITE_URL`: dominio canónico de producción.
- `NEXT_PUBLIC_CONTACT_EMAIL`: buzón público que recibirá los briefs.

El formulario actual no almacena información: prepara un correo en el cliente del visitante. Para capturar prospectos dentro del sitio deberá conectarse un endpoint con consentimiento, protección contra spam y política de privacidad.

## Lista previa a producción

- Confirmar dominio y buzón de contacto.
- Sustituir la visualización editorial generada por fotografía o microscopía propia cuando esté disponible.
- Validar razón social, experiencia acumulada, capacidades y colaboraciones publicadas.
- Cargar TDS, SDS y CoA únicamente cuando su alcance y versión estén aprobados.
- Confirmar qué técnicas e infraestructura son propias, de socios o de laboratorios acreditados.
- Añadir aviso de privacidad y datos mercantiles aplicables.

La interfaz evita cifras, certificaciones y desempeño no comprobados. Los valores contractuales se confirman por grado, formato, lote y propuesta.
