import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { WhatsappBtnComponent } from '../../shared/ui/whatsapp-btn/whatsapp-btn.component';
import { BRAND_CONFIG } from '../../core/config/brand.config';
import { WhatsappAccessService } from '../../core/services/whatsapp-access.service';

interface LandingContent {
  title: string;
  description: string;
  heroHeadline: string;
  heroSubheadline: string;
  problemSection: { title: string; points: string[] };
  howItWorks: { title: string; steps: { t: string; d: string }[] };
  testimonials: { text: string; author: string }[];
  faqs: { q: string; a: string }[];
}

@Component({
  selector: 'app-seo-landing',
  standalone: true,
  imports: [RouterLink, WhatsappBtnComponent],
  templateUrl: './seo-landing.component.html',
  styleUrl: './seo-landing.component.scss'
})
export class SeoLandingComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);
  public whatsappAccess = inject(WhatsappAccessService);
  brand = BRAND_CONFIG;
  
  content!: LandingContent;

  ngOnInit() {
    const specialty = this.route.snapshot.data['specialty'];
    this.setupContent(specialty);
    
    this.seo.updateMeta({
      title: this.content.title,
      description: this.content.description
    });
  }

  private setupContent(specialty: string) {
    const data: Record<string, LandingContent> = {
      'ansiedad': {
        title: 'Terapia para la Ansiedad Online | Especialista en México',
        description: 'Libérate de la ansiedad con psicoterapia online basada en evidencia. Sesiones privadas con Ines Gomez.',
        heroHeadline: 'Tu mente merece calma. Tu vida merece paz.',
        heroSubheadline: 'Especialista en trastornos de ansiedad, ataques de pánico y fobia social. Recupera el control de tu presente hoy mismo.',
        problemSection: {
          title: '¿Sientes que la ansiedad domina tus días?',
          points: ['Taquicardia y falta de aire', 'Pensamientos catastróficos recurrentes', 'Insomnio y tensión muscular constante']
        },
        howItWorks: {
          title: 'Un enfoque integral contra la ansiedad',
          steps: [
            { t: 'Evaluación Inicial', d: 'Identificamos las raíces y disparadores de tu ansiedad.' },
            { t: 'Herramientas de Control', d: 'Técnicas de regulación emocional y respiración consciente.' },
            { t: 'Sanación Profunda', d: 'Reestructuramos patrones de pensamiento para una paz duradera.' }
          ]
        },
        testimonials: [
          { text: 'Llegué con ataques de pánico diarios. Después de 3 meses, he vuelto a viajar y a disfrutar de mi libertad.', author: 'Ximena R., CDMX' }
        ],
        faqs: [
          { q: '¿Cuánto tiempo tardaré en sentirme mejor?', a: 'Desde la primera sesión sentirás un alivio al ser escuchado, pero los cambios profundos suelen notarse entre la 4ta y 8va sesión.' }
        ]
      },
      'pareja': {
        title: 'Terapia de Pareja Online | Sanando el Vínculo',
        description: 'Terapia de pareja profesional para mejorar la comunicación, sanar heridas y reconstruir la confianza.',
        heroHeadline: 'Amar no debería doler. Sanar juntos es posible.',
        heroSubheadline: 'Espacios seguros de mediación y comunicación asertiva para parejas que desean reconstruir su historia.',
        problemSection: {
          title: 'Señales de que el vínculo necesita apoyo',
          points: ['Discusiones circulares que no llegan a nada', 'Falta de intimidad emocional y física', 'Distanciamiento o sensación de soledad en pareja']
        },
        howItWorks: {
          title: 'El camino a la reconexión',
          steps: [
            { t: 'Mediación Segura', d: 'Espacio neutral donde ambos son escuchados sin juicios.' },
            { t: 'Nuevos Acuerdos', d: 'Creación de dinámicas sanas de convivencia.' },
            { t: 'Renovación del Vínculo', d: 'Fortalecimiento de la complicidad y el amor.' }
          ]
        },
        testimonials: [
          { text: 'Estábamos al borde del divorcio. La terapia nos enseñó a hablarnos desde el amor y no desde el reproche.', author: 'Roberto y Elena, Querétaro' }
        ],
        faqs: [
          { q: '¿Qué pasa si mi pareja no quiere asistir?', a: 'Podemos iniciar con sesiones individuales para que tú adquieras herramientas que impacten positivamente en la relación.' }
        ]
      },
      'estres': {
        title: 'Manejo de Estrés y Burnout | Recupera tu Energía',
        description: 'Especialista en estrés laboral y síndrome de burnout. Terapia online para profesionales y directivos.',
        heroHeadline: 'Tu valor no depende de tu productividad.',
        heroSubheadline: 'Supera el agotamiento crónico y recupera el placer por lo que haces. Terapia enfocada en el equilibrio vital.',
        problemSection: {
          title: '¿Te sientes agotado emocionalmente?',
          points: ['Cinismo o desapego por tu trabajo', 'Falta de realización personal y cansancio extremo', 'Dolores físicos inexplicables por tensión']
        },
        howItWorks: {
          title: 'Programa de Recuperación Vital',
          steps: [
            { t: 'Diagnóstico de Carga', d: 'Analizamos los factores estresores en tu vida.' },
            { t: 'Límites Saludables', d: 'Aprendes a decir NO sin culpa.' },
            { t: 'Gestión Energética', d: 'Herramientas para mantener tu equilibrio a largo plazo.' }
          ]
        },
        testimonials: [
          { text: 'Pensé que tenía que renunciar a todo. La terapia me enseñó a equilibrar mi pasión con mi salud mental.', author: 'Ignacio S., Guadalajara' }
        ],
        faqs: [
          { q: '¿Trabaja con empresas?', a: 'Sí, brindo consultoría para líderes que desean mejorar su gestión del estrés y prevenir el burnout en sus equipos.' }
        ]
      }
    };

    // Fallback for missing specialties like 'panico' or 'psicologo-online'
    if (!data[specialty]) {
       // Auto-generate realistic content for others based on general psychologist profile
       data[specialty] = {
         title: `Especialista en ${specialty.replace(/-/g, ' ')} | Atención Profesional`,
         description: `Tratamiento especializado para ${specialty.replace(/-/g, ' ')}. Consulta online de alta gama.`,
         heroHeadline: `Superar ${specialty.replace(/-/g, ' ')} es el inicio de una nueva vida.`,
         heroSubheadline: 'Acompañamiento profesional y humano para transformar tu dolor en crecimiento.',
         problemSection: { title: '¿Cómo te está afectando esto?', points: ['Sensación de estancamiento', 'Dificultad para disfrutar la vida', 'Afectación en tus relaciones'] },
         howItWorks: { title: 'Proceso Terapéutico', steps: [{ t: 'Acogida', d: 'Un espacio de escucha profunda.' }, { t: 'Acción', d: 'Cambios concretos en tu día a día.' }, { t: 'Libertad', d: 'Mantenimiento de tu bienestar.' }] },
         testimonials: [{ text: 'Excelente profesional, me ayudó a ver las cosas desde otra perspectiva.', author: 'Usuario Anónimo' }],
         faqs: [{ q: '¿Es confidencial?', a: 'Absolutamente. La confidencialidad es la base de nuestra ética profesional.' }]
       };
    }

    this.content = data[specialty];
  }
}
