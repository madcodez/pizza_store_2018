import { Injectable } from '@angular/core';
import { Effect,Actions } from '@ngrx/effects';
import * as pizzaActions  from '../action/pizza.action'
import { switchMap, map, catchError } from 'rxjs/operators';
import { PizzasService } from 'src/app/product/services/pizzas.service';
import { of } from 'rxjs';

@Injectable()
export class PizzaEffects{
     
  constructor(private action  : Actions, private pizzaService : PizzasService){

  }

  @Effect()
  loadPizza$ = this.action.ofType(pizzaActions.LOAD_PIZZAS)
                          .pipe(switchMap(() => {
                              return this.pizzaService
                              .getPizzas()
                              .pipe(
                                  map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
                                  catchError(error =>of(new pizzaActions.LoadPizzasFail(error)))
                              )
                          }));

}