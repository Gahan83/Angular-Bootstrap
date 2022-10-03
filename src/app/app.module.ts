import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

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
    path: 'products',
    component: ProductListComponent,
    pathMatch: 'full',
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductAlertsComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
