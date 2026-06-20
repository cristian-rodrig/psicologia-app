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
      </div>
    </section>
  `,
  styles: [`
    @use "variables" as *;
    .process-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: $spacing-lg;
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
    @media (max-width: 768px) { .process-grid { grid-template-columns: 1fr; } }
  `]
})
export class ProcessSectionComponent {
  @Input() steps: { title: string; desc: string }[] = [
    { title: 'Agenda', desc: 'Elige tu horario ideal en nuestro calendario online.' },
    { title: 'Conecta', desc: 'Recibe tu enlace y conéctate desde tu lugar seguro.' },
    { title: 'Sana', desc: 'Inicia tu proceso de transformación con apoyo profesional.' }
  ];
}
