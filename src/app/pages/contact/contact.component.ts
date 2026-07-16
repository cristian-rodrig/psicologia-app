import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private analytics = inject(AnalyticsService);
  
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSubmitting = false;
  submitted = false;

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      fetch('https://formsubmit.co/ajax/Inesgomezpdc@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.contactForm.value)
      })
      .then(response => response.json())
      .then(data => {
        this.analytics.trackFormSubmission();
        this.isSubmitting = false;
        this.submitted = true;
        this.contactForm.reset();
      })
      .catch(error => {
        console.error('Error sending form:', error);
        this.isSubmitting = false;
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o comunícate vía WhatsApp.');
      });
    }
  }
}
