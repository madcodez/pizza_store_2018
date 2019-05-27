import { Component, OnInit } from '@angular/core';
import { PizzasService } from 'src/app/product/services/pizzas.service';
import { Pizza } from 'src/app/product/model/pizza';


import { Store } from '@ngrx/store';
import * as fromStore from '../../store'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  pizzas$: Observable<any>;
  pizzas : Pizza[];
  
    constructor(private store : Store<fromStore.ProductsState>) {}
  
    ngOnInit() {
       //this.store.select(fromStore.getAllPizzas).subscribe(console.log)

       this.pizzas$ = this.store.select(fromStore.getAllPizzas)
       this.store.dispatch(new fromStore.LoadPizzas());
    }

}
