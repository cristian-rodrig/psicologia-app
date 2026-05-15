import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../core/services/blog.service';
import { SeoService } from '../../core/services/seo.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { WhatsappBtnComponent } from '../../shared/ui/whatsapp-btn/whatsapp-btn.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage, WhatsappBtnComponent],
  template: `
    @if (post) {
      <article class="blog-post py-8">
        <div class="container container--narrow">
          <header class="blog-post__header text-center">
            <span class="blog-post__category">{{post.category}}</span>
            <h1 class="blog-post__title">{{post.title}}</h1>
            <div class="blog-post__meta">Por Dra. Mariana Arvizu • {{post.date}}</div>
          </header>
          
          <div class="blog-post__image mt-4">
            <img [ngSrc]="post.image" width="800" height="450" priority [alt]="post.title" class="rounded-3xl shadow-lg">
          </div>

          <div class="blog-post__content mt-8" [innerHTML]="post.content"></div>
          
          <footer class="blog-post__footer mt-8 p-8 bg-bg rounded-3xl">
            <h3>¿Te sentiste identificado con este artículo?</h3>
            <p>A veces, leer es el primer paso, pero hablar es el que sana. Estoy aquí para acompañarte.</p>
            <a routerLink="/contacto" class="btn-primary mt-2">Agendar una charla inicial</a>
          </footer>
        </div>
      </article>
    }
  `,
  styles: [`
    @import '../../../styles/variables';
    .container--narrow { max-width: 800px; }
    .blog-post {
      &__category { color: $color-secondary; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.8rem; }
      &__title { font-size: 3rem; margin: 1rem 0; color: $color-primary; }
      &__meta { color: $color-text-light; margin-bottom: 2rem; }
      &__content { 
        line-height: 1.8; font-size: 1.15rem; color: $color-text;
        ::ng-deep p { margin-bottom: 1.5rem; }
      }
      &__image img { width: 100%; height: auto; object-fit: cover; }
    }
    @media (max-width: 768px) { .blog-post__title { font-size: 2rem; } }
  `]
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private seo = inject(SeoService);
  
  post?: BlogPost;

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.post = this.blogService.getPostBySlug(slug);
      if (this.post) {
        this.seo.updateMeta({
          title: `${this.post.title} | Blog SereneMind`,
          description: this.post.excerpt
        });
      }
    }
  }
}
