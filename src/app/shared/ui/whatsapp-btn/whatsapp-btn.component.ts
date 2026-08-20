import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../../../core/services/analytics.service';
import { WhatsappAccessService } from '../../../core/services/whatsapp-access.service';
import { BRAND_CONFIG } from '../../../core/config/brand.config';

@Component({
  selector: 'app-whatsapp-btn',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (whatsappAccess.isUnlocked()) {
      <a [href]="whatsappAccess.getCustomWhatsappUrl()" 
         target="_blank" 
         class="whatsapp-btn whatsapp-btn--unlocked" 
         (click)="trackClick()"
         aria-label="Continuar consulta por WhatsApp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        <span class="whatsapp-btn__tooltip">¡Chat Habilitado!</span>
      </a>
    } @else {
      <!-- Locked status tooltip guiding user to contact form -->
      <a routerLink="/contacto" 
         class="whatsapp-btn whatsapp-btn--locked" 
         aria-label="Completa el formulario para habilitar WhatsApp">
        <div class="whatsapp-btn__badge">🔒</div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="img-grayscale" />
        <span class="whatsapp-btn__tooltip">Completa el formulario para chatear</span>
      </a>
    }
  `,
  styles: [`
    @use "variables" as *;
    
    .whatsapp-btn {
      position: fixed;
      bottom: 80px; /* Elevated to avoid overlap with mobile sticky CTA */
      right: 30px;
      width: 60px;
      height: 60px;
      background-color: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      z-index: 1000;
      transition: $transition-soft;
      text-decoration: none;
      
      img { 
        width: 35px; 
        height: 35px; 
        transition: $transition-soft;
      }
      
      &--locked {
        background-color: #718096;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);

        .img-grayscale {
          filter: grayscale(100%) opacity(0.85);
        }

        .whatsapp-btn__badge {
          position: absolute;
          top: -3px;
          right: -3px;
          background: #E53E3E;
          color: white;
          font-size: 11px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
        }
      }
      
      &:hover {
        transform: scale(1.1);
        .whatsapp-btn__tooltip { opacity: 1; transform: translateX(0); }
      }
      
      &__tooltip {
        position: absolute;
        right: 75px;
        background: $color-white;
        color: $color-text;
        padding: 6px 15px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
        white-space: nowrap;
        opacity: 0;
        transform: translateX(10px);
        transition: $transition-soft;
        box-shadow: 0 4px 15px rgba(0,0,0,0.12);
        pointer-events: none;
      }
    }
    
    @media (max-width: 768px) {
      .whatsapp-btn { bottom: 90px; right: 20px; width: 55px; height: 55px; }
    }
  `]
})
export class WhatsappBtnComponent {
  private analytics = inject(AnalyticsService);
  public whatsappAccess = inject(WhatsappAccessService);
  brand = BRAND_CONFIG;

  trackClick() {
    this.analytics.trackWhatsAppClick();
  }
}
