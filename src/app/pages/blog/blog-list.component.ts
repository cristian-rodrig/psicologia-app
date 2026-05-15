import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <section class="blog-list py-5">
      <div class="container">
        <h1 class="section-title text-center mb-5">Recursos de Salud Mental</h1>
        <div class="blog-grid">
          @for (post of posts(); track post.id) {
            <article class="blog-card">
              <div class="blog-card__image">
                <img [ngSrc]="post.image" width="400" height="250" [alt]="post.title">
              </div>
              <div class="blog-card__content">
                <span class="blog-card__category">{{post.category}}</span>
                <h2 class="blog-card__title">{{post.title}}</h2>
                <p class="blog-card__excerpt">{{post.excerpt}}</p>
                <a [routerLink]="['/blog', post.slug]" class="blog-card__link">Leer más</a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import '../../../styles/variables';
    .blog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: $spacing-md; }
    .blog-card { 
      background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.05);
      &__image img { width: 100%; height: 200px; object-fit: cover; }
      &__content { padding: $spacing-sm; }
      &__category { color: $color-primary; font-weight: 600; font-size: 0.8rem; text-transform: uppercase; }
      &__title { font-size: 1.25rem; margin: 0.5rem 0; }
      &__excerpt { color: $color-text-light; font-size: 0.95rem; margin-bottom: 1rem; }
      &__link { font-weight: 600; color: $color-secondary; &:hover { text-decoration: underline; } }
    }
  `]
})
export class BlogListComponent {
  private blogService = inject(BlogService);
  posts = this.blogService.getPosts();
}
