import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  constructor() {}

  ngOnInit() {
    this.products = this.products;
  }

  public share(): void {
    debugger;
    window.alert('Shared product');
  }

  public onNotify(): void {
    debugger;
    window.alert('notify when the product goes for sale');
  }
}
