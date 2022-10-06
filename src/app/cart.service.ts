import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private readonly http: HttpClient) {}

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearChart(): Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrice(): Observable<{ name: string; price: number }[]> {
    return this.http.get<{ name: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
