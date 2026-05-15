import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRAND_CONFIG } from '../../../core/config/brand.config';

@Component({
  selector: 'app-booking-premium',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="booking-premium">
      <div class="container booking-premium__card">
        <div class="booking-premium__content">
          <h2 class="booking-premium__title">¿Listo para dar el primer paso?</h2>
          <p class="booking-premium__text">Tu salud mental es la mejor inversión que puedes hacer. Reserva tu primera sesión hoy y comienza a construir la vida que deseas.</p>
          <div class="booking-premium__actions">
            <a [routerLink]="brand.bookingUrl" class="btn-primary">Reservar Consulta Online</a>
            <a [href]="brand.whatsappUrl" target="_blank" class="btn-whatsapp-outline">Escríbeme por WhatsApp</a>
          </div>
        </div>
        <div class="booking-premium__visual">
          <div class="trust-badge">✓ 100% Confidencial</div>
          <div class="trust-badge">✓ Atención Profesional</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import '../../../../styles/variables';
    .booking-premium {
      padding: $spacing-xl 0;
      &__card {
        background: linear-gradient(135deg, $color-primary 0%, darken($color-primary, 15%) 100%);
        padding: $spacing-lg;
        border-radius: 3rem;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: $spacing-lg;
        align-items: center;
        color: white;
        box-shadow: 0 30px 60px rgba(74, 103, 65, 0.2);
      }
      &__title { color: white; font-size: 2.8rem; margin-bottom: 1rem; }
      &__text { color: rgba(255,255,255,0.8); font-size: 1.1rem; margin-bottom: $spacing-md; }
      &__actions { display: flex; gap: $spacing-md; }
      &__visual { display: flex; flex-direction: column; gap: 1rem; align-items: flex-end; }
    }
    .trust-badge {
      background: rgba(255,255,255,0.1);
      padding: 0.8rem 1.5rem;
      border-radius: 50px;
      backdrop-filter: blur(5px);
      font-weight: 600;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .btn-whatsapp-outline {
      padding: 0.8rem 2rem;
      border: 2px solid white;
      color: white;
      border-radius: 50px;
      font-weight: 600;
      &:hover { background: white; color: $color-primary; }
    }
    @media (max-width: 992px) {
      .booking-premium__card { grid-template-columns: 1fr; text-align: center; }
      .booking-premium__actions { justify-content: center; flex-direction: column; }
      .booking-premium__visual { align-items: center; margin-top: $spacing-md; }
    }
  `]
})
export class BookingPremiumComponent {
  brand = BRAND_CONFIG;
}
