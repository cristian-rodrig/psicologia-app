import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { WhatsappAccessService } from '../../core/services/whatsapp-access.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  private seo = inject(SeoService);
  public whatsappAccess = inject(WhatsappAccessService);

  faqs = [
    {
      question: '¿Cómo funcionan las sesiones online?',
      answer: 'Las sesiones se realizan de manera online a través de videollamada (por plataformas seguras y confidenciales como Zoom, Google Meet o WhatsApp). Al agendar tu cita, recibirás un enlace exclusivo para conectarte el día y la hora acordados. Solo necesitas un dispositivo con conexión a internet (computadora, tableta o celular) y un espacio cómodo y privado donde te sientas tranquila y libre para hablar. La modalidad online nos permite trabajar juntas con total flexibilidad, sin importar las distancias.',
      isOpen: false
    },
    {
      question: '¿Cuánto dura cada sesión?',
      answer: 'Las sesiones individuales tienen una duración de 45 minutos. Diseñamos este espacio para que sea dinámico, concentrado y totalmente enfocado en tu bienestar, permitiéndonos avanzar con paso firme en cada consulta.',
      isOpen: false
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Para tu mayor comodidad, puedes realizar tu pago mediante transferencia bancaria o a través de PayPal. Para asegurar y agendar tu espacio, te solicitamos realizar el pago antes de iniciar la sesión.',
      isOpen: false
    },
    {
      question: '¿Cuál es el enfoque del counseling?',
      answer: 'En el counseling, el enfoque no es clínico o de "patología", sino que se centra en el desarrollo personal, la resolución de conflictos actuales, la toma de decisiones y el bienestar integral, acompañando a la persona desde el aquí y el ahora.',
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
