import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';

const routes: Routes = [

  {
     path: 'products', component: ProductComponent,
     children: [
      { path: '', component: ProductListComponent},
      { path: ':productId', component: ProductDetailComponent}
     ]
  },
];

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [ProductService],
  bootstrap: []
})
export class ProductModule { }
