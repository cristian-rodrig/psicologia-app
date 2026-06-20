import { Directive, ElementRef, OnInit, Renderer2, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    // Only run animations in the browser to avoid SSR errors
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(30px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
          this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }
}
