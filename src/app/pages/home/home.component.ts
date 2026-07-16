import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { WhatsappBtnComponent } from '../../shared/ui/whatsapp-btn/whatsapp-btn.component';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ProcessSectionComponent } from '../../shared/components/process-section/process-section.component';
import { BookingPremiumComponent } from '../../shared/components/booking-premium/booking-premium.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { BRAND_CONFIG } from '../../core/config/brand.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    WhatsappBtnComponent, 
    SectionTitleComponent, 
    ProcessSectionComponent, 
    BookingPremiumComponent,
    ScrollRevealDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);
  brand = BRAND_CONFIG;

  testimonials = [
    {
      text: "Llegué a la consulta sintiéndome muy estancada en mi carrera y sin saber qué rumbo tomar. Las sesiones de counseling me ayudaron a ordenar mis prioridades y a tomar decisiones con total seguridad y paz mental. Ines ofrece un espacio donde realmente te sientes escuchado.",
      author: "Ana P., CDMX",
      details: "Orientación Vocacional & Cambio"
    },
    {
      text: "Después de mi última ruptura de pareja, sentía que había perdido mi centro. En este espacio encontré una contención increíble. Aprendí a apoyarme en mis propios recursos y a mirar el presente con mucha más claridad. Un proceso 100% humano.",
      author: "Carlos M., Monterrey",
      details: "Duelo & Crecimiento Personal"
    },
    {
      text: "El counseling me dio herramientas prácticas que la terapia convencional no me había brindado. Es un enfoque muy práctico, enfocado en el aquí y el ahora. Logré gestionar el estrés del día a día y poner límites sanos en mi vida familiar.",
      author: "Sofía R., Guadalajara",
      details: "Gestión de Estrés & Límites"
    },
    {
      text: "Buscaba un profesional con quien tomar decisiones difíciles sobre mi futuro profesional y de vida. Las sesiones fueron un faro de claridad. Ines es una persona sumamente empática y profesional.",
      author: "Diego L., Querétaro",
      details: "Toma de Decisiones & Crisis"
    },
    {
      text: "Me sentía muy abrumado con la crianza de mis hijos y la presión laboral. Encontré en las sesiones un lugar libre de juicios donde pude desahogarme y diseñar estrategias reales para recuperar mi paz mental y conectar mejor con mi familia.",
      author: "Martín G., Puebla",
      details: "Crianza & Equilibrio Familiar"
    },
    {
      text: "Pensé que el counseling no sería para mí, pero me sorprendió lo directo y enfocado en la acción que es. Me ayudó a superar la timidez y a postularme para ese puesto directivo que tanto quería. El mejor acompañamiento profesional.",
      author: "Gabriela S., Mérida",
      details: "Desarrollo Profesional & Liderazgo"
    },
    {
      text: "Mi nivel de ansiedad diaria por la incertidumbre del futuro era inmanejable. A través de dinámicas en el presente y ejercicios muy concretos, Ines me enseñó a calmar la mente y a confiar en mis habilidades para sortear los cambios.",
      author: "Lucas T., Tijuana",
      details: "Ansiedad & Gestión de Incertidumbre"
    },
    {
      text: "A mis 50 años me enfrenté al nido vacío y a una jubilación anticipada; no sabía quién era fuera del trabajo y la familia. Reestructurar mi proyecto de vida con Ines ha sido una de las experiencias más sanadoras y liberadoras.",
      author: "Elena V., León",
      details: "Crisis de Edad & Rediseño Vital"
    },
    {
      text: "Lo que más valoro de Ines es su calidez y pragmatismo. No se siente como una consulta fría donde solo te escuchan asentir, sino como una conversación activa que te empuja a tomar las riendas de tu vida y tus emociones.",
      author: "Javier F., Cancún",
      details: "Autoconocimiento & Acción"
    }
  ];
  
  currentTestimonialIndex = 0;

  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  ngOnInit() {
    this.seo.updateMeta({
      title: 'Counseling y Terapia Online',
      description: 'Acompañamiento psicológico profesional y humano. Terapia online personalizada para ansiedad, estrés y crecimiento personal.',
      keywords: 'psicología online, psicólogo méxico, terapia ansiedad, estrés, bienestar emocional'
    });

    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Counseling y Terapia Online | Espacio de Escucha",
      "description": "Consulta psicológica online de alta gama.",
      "medicalSpecialty": "Psychiatry",
      "provider": {
        "@type": "Psychologist",
        "name": "Espacio de Escucha Psicología",
        "image": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ciudad de México",
          "addressCountry": "MX"
        }
      }
    });
  }
}
