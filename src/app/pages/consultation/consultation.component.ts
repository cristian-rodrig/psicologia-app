import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { BRAND_CONFIG } from '../../core/config/brand.config';
import { RouterLink } from '@angular/router';
import { WhatsappBtnComponent } from '../../shared/ui/whatsapp-btn/whatsapp-btn.component';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [RouterLink, WhatsappBtnComponent],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss'
})
export class ConsultationComponent implements OnInit {
  private seo = inject(SeoService);
  brand = BRAND_CONFIG;

  ngOnInit() {
    this.seo.updateMeta({
      title: 'Consulta Online | Terapia desde Casa con Calidez Humana',
      description: 'Descubre los beneficios de la terapia online. Sesiones seguras, cómodas y eficaces con la Dra. Mariana Arvizu.'
    });
  }
}
