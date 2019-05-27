import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { Routes, RouterModule } from '@angular/router';

import { reducer ,effects} from './store'

import { ProductComponent } from './component/product/product.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { PizzasService } from 'src/app/product/services/pizzas.service';
import { ToppingsService } from 'src/app/product/services/toppings.service';
import { HttpClientModule } from '@angular/common/http';
import { PizzaItemComponent } from './component/pizza-item/pizza-item.component';
import { PizzaDisplayComponent } from './component/pizza-display/pizza-display.component';
import { EffectsModule } from '@ngrx/effects';



export const ROUTES: Routes = [
  {
    path: '',
    component: ProductComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('products',reducer),
    RouterModule.forChild(ROUTES),
    EffectsModule.forFeature(effects)

  ],
  providers: [PizzasService,ToppingsService],
  declarations: [ProductComponent, ProductItemComponent, PizzaItemComponent, PizzaDisplayComponent],
})
export class ProductModule { }
