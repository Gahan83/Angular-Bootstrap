import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts: Observable<{ name: string; price: number }[]>;
  constructor(private readonly cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrice();
  }
}
