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
    const fullTitle = `${config.title} | Espacio de Escucha`;
    this.title.setTitle(fullTitle);
    this.currentTitle.set(fullTitle);

    this.meta.updateTag({ name: 'description', content: config.description });
    
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
      this.updateCanonical(config.url);
    }
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
  setJsonLd(data: any) {
    let script = this.document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = this.document.createElement('script');
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
      "url": "https://espaciodeescucha.com",
      "telephone": brand.phone,
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
    
    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
