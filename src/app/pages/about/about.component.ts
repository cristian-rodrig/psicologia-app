import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateMeta({
      title: 'Sobre Mí | Psicología Ética y Profesional',
      description: 'Conoce mi trayectoria y enfoque terapéutico. Comprometida con tu salud mental y bienestar emocional desde una perspectiva humana.'
    });
  }
}
