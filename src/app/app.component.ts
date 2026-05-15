import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { MobileCtaComponent } from './shared/ui/mobile-cta/mobile-cta.component';
import { SeoService } from './core/services/seo.service';
import { BRAND_CONFIG } from './core/config/brand.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MobileCtaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.setLocalBusinessJsonLd(BRAND_CONFIG);
  }
}
