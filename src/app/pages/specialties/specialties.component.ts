import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.scss'
})
export class SpecialtiesComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateMeta({
      title: 'Especialidades Psicológicas | Terapia Especializada Online',
      description: 'Explora nuestras áreas de especialidad: ansiedad, estrés, terapia de pareja, autoestima y más.'
    });
  }
}
