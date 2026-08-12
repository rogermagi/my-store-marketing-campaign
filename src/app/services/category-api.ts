import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryApi {
  private categories = ['all', 'electronics', 'accessories', 'home', 'wearables', 'clothing'];

  getCategories() {
    return this.categories;
  }
}
