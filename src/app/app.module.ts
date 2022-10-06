import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShippingComponent } from './shipping/shipping.component';

// const routes: Routes = [
//   {
//     path: 'products',
//     children: [
//       {
//         path: '',
//         component: ProductListComponent,
//         pathMatch: 'full',
//       },
//       {
//         path: ':productId',
//         component: ProductDetailsComponent,
//       },
//     ],
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'shipping',
    component: ShippingComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductAlertsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ToolBarComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
