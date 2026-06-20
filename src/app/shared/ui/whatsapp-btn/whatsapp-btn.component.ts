import { Component, inject } from '@angular/core';
import { AnalyticsService } from '../../../core/services/analytics.service';
import { BRAND_CONFIG } from '../../../core/config/brand.config';

@Component({
  selector: 'app-whatsapp-btn',
  standalone: true,
  template: `
    <a [href]="brand.whatsappUrl" 
       target="_blank" 
       class="whatsapp-btn" 
       (click)="trackClick()"
       aria-label="Contactar por WhatsApp">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      <span class="whatsapp-btn__tooltip">¿Hablamos?</span>
    </a>
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
      
      img { width: 35px; height: 35px; }
      
      &:hover {
        transform: scale(1.1);
        .whatsapp-btn__tooltip { opacity: 1; transform: translateX(0); }
      }
      
      &__tooltip {
        position: absolute;
        right: 75px;
        background: $color-white;
        color: $color-text;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
        white-space: nowrap;
        opacity: 0;
        transform: translateX(10px);
        transition: $transition-soft;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
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
  brand = BRAND_CONFIG;

  trackClick() {
    this.analytics.trackWhatsAppClick();
  }
}
