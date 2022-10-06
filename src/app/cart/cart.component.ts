import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Product[];

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  constructor(
    private readonly cartService: CartService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  onSubmit(): void {
    //process checkout data here
    this.items = this.cartService.clearChart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
