import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div class="section-header" [class.text-center]="centered">
      <span class="section-header__badge" *ngIf="badge">{{ badge }}</span>
      <h2 class="section-header__title">{{ title }}</h2>
      <p class="section-header__subtitle" *ngIf="subtitle">{{ subtitle }}</p>
    </div>
  `,
  styles: [`
    @use "variables" as *;
    .section-header {
      margin-bottom: $spacing-lg;
      &__badge {
        display: inline-block;
        padding: 4px 12px;
        background: rgba(74, 103, 65, 0.1);
        color: $color-primary;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 1rem;
      }
      &__title {
        font-size: 2.8rem;
        color: $color-primary;
        margin-bottom: 1rem;
      }
      &__subtitle {
        font-size: 1.1rem;
        color: $color-text-light;
        max-width: 600px;
        &.text-center { margin: 0 auto; }
      }
      &.text-center {
        .section-header__subtitle { margin: 0 auto; }
      }
    }
    @media (max-width: 768px) {
      .section-header__title { font-size: 2.2rem; }
    }
  `],
  imports: [CommonModule]
})
export class SectionTitleComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() badge?: string;
  @Input() centered = true;
}

import { CommonModule } from '@angular/common';
