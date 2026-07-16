# Guía de Despliegue: PSICOLOGIA-APP

Esta plataforma está optimizada para **Cloudflare Pages** y **Vercel** utilizando Angular SSR.

## Despliegue en Cloudflare Pages (Recomendado)

1.  **Conecta tu repositorio:** En el panel de Cloudflare, selecciona "Pages" -> "Connect to Git".
2.  **Configuración de Build:**
    *   **Framework preset:** `Angular`
    *   **Build command:** `npm run build`
    *   **Output directory:** `dist/psicologia-app/browser`
3.  **Variables de Entorno:**
    *   `NODE_VERSION`: `20` o superior.
4.  **SSR Setup:**
    *   Cloudflare Pages soporta Angular SSR mediante **Cloudflare Workers**. Asegúrate de que el archivo `server.ts` esté configurado para el entorno de ejecución de workers si planeas usar SSR dinámico total.

## Optimizaciones de Google Ads

- **Landing Pages:** Las rutas `/ansiedad-terapia-online`, `/terapia-de-pareja`, etc., están diseñadas para ser usadas como URLs finales en tus anuncios.
- **WhatsApp:** El botón flotante está configurado para ser el CTA principal en móviles.
- **Velocidad:** Gracias a `NgOptimizedImage` y `@defer`, el LCP debería ser inferior a 1.5s en conexiones 4G, lo que mejora tu **Quality Score** en Google Ads.

## SEO Local

1.  **Google Business Profile:** Asegúrate de que el nombre, dirección y teléfono (NAP) coincidan exactamente con lo que hay en el `footer` y en el `SeoService` (JSON-LD).
2.  **Sitemap:** Puedes generar un sitemap dinámico usando `ngx-sitemap` o herramientas similares antes del despliegue.
