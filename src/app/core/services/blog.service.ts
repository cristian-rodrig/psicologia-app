import { Injectable, signal } from '@angular/core';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  slug: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts = signal<BlogPost[]>([
    {
      id: '1',
      title: '5 Señales de que es momento de iniciar terapia',
      excerpt: 'Identificar cuándo necesitamos ayuda profesional es el primer paso hacia la sanación.',
      content: '<p>Iniciar terapia es un acto de amor propio. Muchas veces normalizamos el malestar, pero el cuerpo y la mente envían señales claras...</p><p>La primera señal es el agotamiento emocional constante. Si sientes que ya no disfrutas de lo que antes te apasionaba, es momento de hablar.</p>',
      date: '2026-05-10',
      category: 'Bienestar',
      slug: 'senales-iniciar-terapia',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b'
    },
    {
      id: '2',
      title: 'Cómo manejar la ansiedad en el trabajo',
      excerpt: 'Estrategias prácticas para mantener la calma en entornos de alta presión.',
      content: '<p>La ansiedad laboral puede ser paralizante. Aprender a establecer límites y técnicas de respiración es fundamental...</p>',
      date: '2026-05-12',
      category: 'Ansiedad',
      slug: 'manejar-ansiedad-trabajo',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643'
    },
    {
      id: '3',
      title: 'Entendiendo el Burnout: Más que cansancio',
      excerpt: 'El síndrome de agotamiento profesional afecta tu salud física y mental.',
      content: '<p>El burnout no se cura con un fin de semana de descanso. Requiere una reestructuración de tus límites y prioridades...</p>',
      date: '2026-05-14',
      category: 'Salud Mental',
      slug: 'entendiendo-el-burnout',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70'
    },
    {
      id: '4',
      title: 'Guía para superar un ataque de pánico',
      excerpt: 'Herramientas de anclaje y respiración para retomar el control en momentos críticos.',
      content: '<p>Un ataque de pánico puede sentirse como una pérdida total de control. La técnica del 5-4-3-2-1 puede ayudarte a volver al presente...</p>',
      date: '2026-05-15',
      category: 'Pánico',
      slug: 'guia-ataque-panico',
      image: 'https://images.unsplash.com/photo-1474418397713-7ded61d0682e'
    }
  ]);

  getPosts() {
    return this.posts.asReadonly();
  }

  getPostBySlug(slug: string) {
    return this.posts().find(p => p.slug === slug);
  }
}
