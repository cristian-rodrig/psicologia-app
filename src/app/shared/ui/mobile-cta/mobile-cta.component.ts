import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRAND_CONFIG } from '../../../core/config/brand.config';
import { WhatsappAccessService } from '../../../core/services/whatsapp-access.service';

@Component({
  selector: 'app-mobile-cta',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="mobile-cta">
      @if (whatsappAccess.isUnlocked()) {
        <a [href]="whatsappAccess.getCustomWhatsappUrl()" target="_blank" class="mobile-cta__btn mobile-cta__btn--whatsapp">
          💬 Abrir WhatsApp
        </a>
      } @else {
        <a routerLink="/contacto" class="mobile-cta__btn mobile-cta__btn--secondary">
          🔒 Contactar / WhatsApp
        </a>
      }
      <a routerLink="/contacto" class="mobile-cta__btn mobile-cta__btn--primary">
        Agendar Cita
      </a>
    </div>
  `,
  styles: [`
    @use "variables" as *;

    .mobile-cta {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: $color-white;
      padding: 10px;
      gap: 10px;
      box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
      z-index: 1001;
      
      &__btn {
        flex: 1;
        padding: 12px;
        border-radius: 12px;
        text-align: center;
        font-weight: 700;
        font-size: 0.9rem;
        text-decoration: none;
        
        &--whatsapp {
          background-color: #25D366;
          color: white;
        }

        &--secondary {
          background-color: #E2E8F0;
          color: #4A5568;
        }
        
        &--primary {
          background-color: $color-primary;
          color: white;
        }
      }
    }

    @media (max-width: 768px) {
      .mobile-cta {
        display: flex;
      }
    }
  `]
})
export class MobileCtaComponent {
  brand = BRAND_CONFIG;
  public whatsappAccess = inject(WhatsappAccessService);
}
