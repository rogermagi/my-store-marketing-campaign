import { inject, Injectable, REQUEST } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SeoData } from '../models/seo-data';

@Injectable({
  providedIn: 'root',
})
export class SeoManager {
  title = inject(Title);
  meta = inject(Meta);

  router = inject(Router);
  request = inject(REQUEST, { optional: true });

  private siteName = 'John Doe Ecommerce Store';
  private defaultImage =
    'https://dummyimage.com/600x400/ffffff/030003.png&text=Ecommerce+Digital+Marketing+Store';

  updateSEOTags(seoData: SeoData) {
    this.title.setTitle(`${seoData.title} | ${this.siteName}`);
    this.meta.updateTag({ name: 'description', content: seoData.description });

    const imageUrl = seoData.image || this.defaultImage;

    let origin = 'http://localhost:4000';
    const fullUrl = `${origin}${this.router.url}`;

    //OG Tags for Social Media
    this.meta.updateTag({ property: 'og:type', content: seoData.type || 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({
      property: 'og:title',
      content: seoData.title || 'Ecommerce Digital Marketing',
    });
    this.meta.updateTag({ property: 'og:description', content: seoData.description });
    this.meta.updateTag({ property: 'og:url', content: fullUrl });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_US' });

    //Add Canonical later
  }
}
