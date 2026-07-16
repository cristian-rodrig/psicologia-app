import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Counseling y Terapia Online | Espacio de Escucha'
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'Sobre Mí | Espacio de Escucha'
  },
  {
    path: 'especialidades',
    loadComponent: () => import('./pages/specialties/specialties.component').then(m => m.SpecialtiesComponent),
    title: 'Especialidades | Espacio de Escucha'
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent),
    title: 'Preguntas Frecuentes | Espacio de Escucha'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contacto | Espacio de Escucha'
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog-list.component').then(m => m.BlogListComponent),
    title: 'Recursos y Artículos | Espacio de Escucha'
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog/blog-post.component').then(m => m.BlogPostComponent)
  },
  // SEO LANDINGS
  {
    path: 'ansiedad-terapia-online',
    loadComponent: () => import('./pages/seo-landing/seo-landing.component').then(m => m.SeoLandingComponent),
    data: { specialty: 'ansiedad' }
  },
  {
    path: 'terapia-de-pareja',
    loadComponent: () => import('./pages/seo-landing/seo-landing.component').then(m => m.SeoLandingComponent),
    data: { specialty: 'pareja' }
  },

  {
    path: 'ayuda-ataques-de-panico',
    loadComponent: () => import('./pages/seo-landing/seo-landing.component').then(m => m.SeoLandingComponent),
    data: { specialty: 'panico' }
  },
  {
    path: 'psicologo-online',
    loadComponent: () => import('./pages/consultation/consultation.component').then(m => m.ConsultationComponent),
    title: 'Psicólogo Online | Espacio de Escucha'
  },
  {
    path: 'online-consultation',
    loadComponent: () => import('./pages/consultation/consultation.component').then(m => m.ConsultationComponent),
    title: 'Online Consultation | Espacio de Escucha'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
