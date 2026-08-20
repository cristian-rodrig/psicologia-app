import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsappAccessService } from '../../../core/services/whatsapp-access.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  public whatsappAccess = inject(WhatsappAccessService);
}
