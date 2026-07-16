import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="process-section">
      <div class="container">
        <div class="process-grid">
          @for (step of steps; track step.title; let i = $index) {
            <div class="step-card">
              <div class="step-card__num">0{{ i + 1 }}</div>
              <h3 class="step-card__title">{{ step.title }}</h3>
              <p class="step-card__desc">{{ step.desc }}</p>
            </div>
          }
        </div>

        <!-- Pilares de Nuestro Trabajo -->
        <div class="pilares-section">
          <h2 class="pilares-section__title text-center">Pilares de Nuestro Trabajo</h2>
          <div class="pilares-grid">
            <div class="pilar-card">
              <div class="pilar-card__icon">❤️</div>
              <h3 class="pilar-card__title">Enfoque Humano</h3>
              <p class="pilar-card__desc">El proceso respeta estrictamente tus ritmos y confía en tu capacidad inherente de cambio y autoconocimiento.</p>
            </div>
            <div class="pilar-card">
              <div class="pilar-card__icon">💬</div>
              <h3 class="pilar-card__title">Espacio Seguro</h3>
              <p class="pilar-card__desc">Ofrecemos un entorno de confidencialidad absoluta y escucha empática, completamente libre de juicios.</p>
            </div>
            <div class="pilar-card">
              <div class="pilar-card__icon">🧭</div>
              <h3 class="pilar-card__title">Orientado al Presente</h3>
              <p class="pilar-card__desc">Trabajamos de forma focalizada en el "aquí y ahora" para construir soluciones y tomar decisiones conscientes.</p>
            </div>
          </div>
        </div>

        <!-- ¿Qué es el Counseling? -->
        <div class="counseling-info">
          <div class="counseling-info__divider"></div>
          <h2 class="counseling-info__title text-center">¿Qué es el Counseling?</h2>
          <p class="counseling-info__text text-center">
            Una disciplina de ayuda y prevención psicológica diseñada para guiarte en la resolución de conflictos y en el desarrollo de tus propios recursos personales.
          </p>
        </div>

        <!-- ¿Para quién es el Counseling? -->
        <div class="counseling-for">
          <h2 class="counseling-for__title">¿Para quién es el Counseling?</h2>
          <ul class="counseling-for__list">
            <li class="counseling-for__item">
              <span class="icon">🔀</span>
              <p><strong>Transiciones de Vida:</strong> Orientación durante crisis evolutivas, cambios de carrera, mudanzas, duelos o rupturas de pareja.</p>
            </li>
            <li class="counseling-for__item">
              <span class="icon">🧭</span>
              <p><strong>Toma de Decisiones:</strong> Claridad emocional y cognitiva ante dilemas personales, vocacionales o existenciales.</p>
            </li>
            <li class="counseling-for__item">
              <span class="icon">🌱</span>
              <p><strong>Crecimiento Personal:</strong> Quienes desean profundizar en su autoconocimiento, mejorar relaciones y potenciar su bienestar general.</p>
            </li>
            <li class="counseling-for__item">
              <span class="icon">🧘</span>
              <p><strong>Gestión del Estrés:</strong> Herramientas prácticas para manejar la presión laboral, familiar o el agotamiento cotidiano.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use "variables" as *;
    .process-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: $spacing-lg;
      margin-bottom: 5rem;
    }
    .step-card {
      text-align: center;
      padding: $spacing-md;
      background: $color-bg;
      border-radius: 2rem;
      transition: $transition-soft;
      &:hover { transform: translateY(-5px); background: white; box-shadow: 0 15px 30px rgba(0,0,0,0.05); }
      &__num {
        font-family: $font-headings;
        font-size: 3rem;
        font-weight: 800;
        color: rgba(74, 103, 65, 0.1);
        margin-bottom: 0.5rem;
      }
      &__title { margin-bottom: 1rem; color: $color-primary; }
      &__desc { color: $color-text-light; font-size: 0.95rem; }
    }
    .pilares-section {
      margin-top: 2rem;
      &__title {
        font-family: $font-headings;
        font-size: 2.25rem;
        color: $color-primary;
        margin-bottom: 2.5rem;
      }
    }
    .pilares-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: $spacing-lg;
    }
    .pilar-card {
      text-align: center;
      padding: $spacing-md;
      background: #F3ECE3;
      border-radius: 2rem;
      transition: $transition-soft;
      border: 1px solid rgba(212, 163, 115, 0.1);
      &:hover { 
        transform: translateY(-5px); 
        background: white; 
        box-shadow: 0 20px 40px rgba(74, 103, 65, 0.08); 
      }
      &__icon {
        font-size: 2rem;
        margin-bottom: 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        background: rgba(212, 163, 115, 0.15);
        border-radius: 50%;
      }
      &__title { margin-bottom: 1rem; color: $color-primary; font-weight: 600; }
      &__desc { color: $color-text-light; font-size: 0.95rem; line-height: 1.6; }
    }
    .counseling-info {
      margin-top: 5rem;
      margin-bottom: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      
      &__divider {
        width: 60px;
        height: 3px;
        background-color: $color-secondary;
        margin-bottom: 1.5rem;
        border-radius: 2px;
      }
      &__title {
        font-family: $font-headings;
        font-size: 2.5rem;
        color: $color-primary;
        margin-bottom: 1rem;
      }
      &__text {
        font-size: 1.15rem;
        color: $color-text-light;
        max-width: 750px;
        line-height: 1.8;
      }
    }
    .counseling-for {
      margin-top: 5rem;
      margin-bottom: 5rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      
      &__title {
        font-family: $font-headings;
        font-size: 2.25rem;
        color: $color-primary;
        margin-bottom: 2.5rem;
        text-align: left;
      }
      &__list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        text-align: left;
      }
      &__item {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
        
        .icon {
          font-size: 1.4rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(74, 103, 65, 0.08);
          border-radius: 50%;
          flex-shrink: 0;
          color: $color-primary;
        }
        
        p {
          font-size: 1.05rem;
          color: $color-text-light;
          line-height: 1.6;
          margin-top: 6px;
          
          strong {
            color: $color-text;
            font-weight: 600;
          }
        }
      }
    }
    @media (max-width: 768px) { 
      .process-grid, .pilares-grid { grid-template-columns: 1fr; }
      .counseling-for__title { text-align: center; }
    }
  `]
})
export class ProcessSectionComponent {
  @Input() steps: { title: string; desc: string }[] = [
    { title: 'Agenda', desc: 'Elige tu horario ideal en nuestro calendario online.' },
    { title: 'Conecta', desc: 'Recibe tu enlace y conéctate desde tu lugar seguro.' },
    { title: 'Sana', desc: 'Inicia tu proceso de transformación con apoyo profesional.' }
  ];
}
