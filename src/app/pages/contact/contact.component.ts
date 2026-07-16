import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../../core/services/analytics.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private analytics = inject(AnalyticsService);
  private seo = inject(SeoService);
  
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSubmitting = false;
  submitted = false;

  ngOnInit() {
    this.seo.updateMeta({
      title: 'Contacto | Agenda tu Sesión de Counseling',
      description: 'Ponte en contacto con Ines Gomez para agendar tu primera sesión de counseling y terapia online. Inicia tu proceso de cambio y bienestar hoy.',
      keywords: 'contacto psicólogo, agendar cita terapia, counseling online méxico, terapia individual online',
      url: 'https://espaciodeescucha.com/contacto'
    });

    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contacto | Espacio de Escucha",
      "description": "Formulario de contacto para agendar sesiones de counseling y terapia online con Ines Gomez.",
      "url": "https://espaciodeescucha.com/contacto",
      "mainEntity": {
        "@type": "Psychologist",
        "name": "Ines Gomez",
        "telephone": "+52 9841666955",
        "email": "Inesgomezpdc@gmail.com"
      }
    }, 'contact-jsonld');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      fetch('https://formsubmit.co/ajax/Inesgomezpdc@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.contactForm.value)
      })
      .then(response => response.json())
      .then(data => {
        this.analytics.trackFormSubmission();
        this.isSubmitting = false;
        this.submitted = true;
        this.contactForm.reset();
      })
      .catch(error => {
        console.error('Error sending form:', error);
        this.isSubmitting = false;
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o comunícate vía WhatsApp.');
      });
    }
  }
}
