import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  private seo = inject(SeoService);

  faqs = [
    {
      question: '¿Cómo funcionan las sesiones online?',
      answer: 'Las sesiones se realizan a través de una plataforma de videollamada segura. Solo necesitas una conexión estable a internet y un espacio privado donde te sientas cómodo.',
      isOpen: false
    },
    {
      question: '¿Cuánto dura cada sesión?',
      answer: 'Cada sesión individual tiene una duración aproximada de 50 a 60 minutos.',
      isOpen: false
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos transferencias bancarias, tarjetas de crédito/débito y pagos vía PayPal. El pago se realiza antes de iniciar la sesión.',
      isOpen: false
    },
    {
      question: '¿Es efectiva la terapia online comparada con la presencial?',
      answer: 'Sí, múltiples estudios demuestran que la terapia online tiene el mismo nivel de eficacia que la presencial, con el beneficio añadido de la flexibilidad y comodidad del hogar.',
      isOpen: false
    }
  ];

  ngOnInit() {
    this.seo.updateMeta({
      title: 'Preguntas Frecuentes | Todo sobre la Terapia Online',
      description: 'Resuelve tus dudas sobre el proceso terapéutico, pagos, sesiones online y más.'
    });
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
