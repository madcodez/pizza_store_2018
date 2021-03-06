import * as fromPizzas from './pizza.reducer'; 
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';



export interface ProductsState {
    pizzas : fromPizzas.PizzaState
}

export const reducer : ActionReducerMap<ProductsState> ={
    pizzas : fromPizzas.reducer,
}

export const getProductsState = createFeatureSelector<ProductsState>('products') ;

export const getPizzasState = createSelector(getProductsState,(state: ProductsState)=>state.pizzas);

export const getAllPizzas = createSelector(getPizzasState,fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(getPizzasState,fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzasState,fromPizzas.getPizzasLoading);