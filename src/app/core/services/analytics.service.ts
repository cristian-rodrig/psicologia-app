import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  
  // Track conversion events for Google Ads / Meta Pixel
  trackConversion(eventName: string, data?: any) {
    console.log(`[Analytics] Tracking Event: ${eventName}`, data);
    
    // Example: Integration with window.gtag
    /*
    if ((window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID',
        'event_category': eventName,
        'value': data?.value || 1.0,
        'currency': 'MXN'
      });
    }
    */
  }

  trackWhatsAppClick() {
    this.trackConversion('whatsapp_contact');
  }

  trackFormSubmission() {
    this.trackConversion('form_submitted');
  }
}
