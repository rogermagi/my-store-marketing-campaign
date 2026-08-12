import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { CategoryApi } from './services/category-api';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/:category',
    renderMode: RenderMode.Prerender, //Static Site Generation
    getPrerenderParams: async () => {
      const catService = inject(CategoryApi);
      const names = catService.getCategories();
      return names.map((name) => ({ category: name }));
    },
  },
  {
    path: 'wishlist',
    renderMode: RenderMode.Client, //Client Side Rendering
  },
  {
    path: 'cart',
    renderMode: RenderMode.Client,
  },
  {
    path: 'checkout',
    renderMode: RenderMode.Client,
  },
  {
    path: 'order-success',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Server, // Server Side Rendering
  },
];
