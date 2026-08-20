import { Injectable, signal } from '@angular/core';
import { BRAND_CONFIG } from '../config/brand.config';

@Injectable({
  providedIn: 'root'
})
export class WhatsappAccessService {
  private STORAGE_KEY = 'whatsapp_unlocked';
  private USER_NAME_KEY = 'whatsapp_user_name';

  // Signal reactive for Angular 21
  isUnlocked = signal<boolean>(false);
  userName = signal<string>('');

  constructor() {
    this.checkInitialState();
  }

  private checkInitialState() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const unlocked = sessionStorage.getItem(this.STORAGE_KEY) === 'true';
      const name = sessionStorage.getItem(this.USER_NAME_KEY) || '';
      this.isUnlocked.set(unlocked);
      this.userName.set(name);
    }
  }

  unlock(name: string = '') {
    this.isUnlocked.set(true);
    this.userName.set(name);

    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem(this.STORAGE_KEY, 'true');
      sessionStorage.setItem(this.USER_NAME_KEY, name);
    }
  }

  getCustomWhatsappUrl(): string {
    const name = this.userName();
    const phone = BRAND_CONFIG.whatsappNumber || '529841666955';
    let message = 'Hola Ines, me gustaría agendar una consulta.';
    
    if (name.trim()) {
      message = `Hola Ines, mi nombre es ${name.trim()} y acabo de enviar el formulario de contacto para agendar una sesión.`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
}
