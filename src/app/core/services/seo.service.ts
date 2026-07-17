import { Injectable, inject, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  // Signals for dynamic updates if needed
  currentTitle = signal('');

  updateMeta(config: {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
  }) {
    const fullTitle = config.title.includes('Espacio de Escucha') 
      ? config.title 
      : `${config.title} | Espacio de Escucha`;
    
    this.title.setTitle(fullTitle);
    this.currentTitle.set(fullTitle);

    this.meta.updateTag({ name: 'description', content: config.description });
    
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    const defaultImage = 'https://espaciodeescuchaonline.com/assets/perfil1.jpeg';
    const metaImage = config.image || defaultImage;
    const metaUrl = config.url || 'https://espaciodeescuchaonline.com';

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.meta.updateTag({ property: 'og:image', content: metaImage });
    this.meta.updateTag({ property: 'og:url', content: metaUrl });
    this.meta.updateTag({ property: 'og:site_name', content: 'Espacio de Escucha' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_MX' });
    
    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: metaImage });

    this.updateCanonical(metaUrl);
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  // Schema.org Structured Data
  setJsonLd(data: any, id: string = 'dynamic-jsonld') {
    let script = this.document.getElementById(id);
    if (!script) {
      script = this.document.createElement('script');
      script.setAttribute('id', id);
      script.setAttribute('type', 'application/ld+json');
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }

  setLocalBusinessJsonLd(brand: any) {
    const data = {
      "@context": "https://schema.org",
      "@type": "Psychologist",
      "name": brand.professionalName,
      "description": brand.specialty,
      "url": "https://espaciodeescuchaonline.com",
      "telephone": brand.phone,
      "email": brand.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ciudad de México",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.4326,
        "longitude": -99.1332
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ]
    };
    
    this.setJsonLd(data, 'local-business-jsonld');
  }
}
