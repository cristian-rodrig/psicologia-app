import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { WhatsappBtnComponent } from '../../shared/ui/whatsapp-btn/whatsapp-btn.component';
import { NgOptimizedImage, CommonModule } from '@angular/common';
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
    NgOptimizedImage, 
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

  ngOnInit() {
    this.seo.updateMeta({
      title: 'Tu Bienestar Emocional Empieza Aquí',
      description: 'Acompañamiento psicológico profesional y humano. Terapia online personalizada para ansiedad, estrés y crecimiento personal.',
      keywords: 'psicología online, psicólogo méxico, terapia ansiedad, estrés, bienestar emocional'
    });

    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "SereneMind | Psicología Online Premium",
      "description": "Consulta psicológica online de alta gama.",
      "medicalSpecialty": "Psychiatry",
      "provider": {
        "@type": "Psychologist",
        "name": "SereneMind Psychology",
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
