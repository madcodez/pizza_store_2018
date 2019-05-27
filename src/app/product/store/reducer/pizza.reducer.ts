import { Pizza } from "src/app/product/model/pizza";
import * as fromPizzas  from '../action/pizza.action';


export interface PizzaState {
    data : Pizza[],
    loaded : boolean,
    loading : boolean

}

export const initialState: PizzaState = {
      data: [],
      loaded: false,
      loading: false,
    };



export function reducer(state = initialState , action : fromPizzas.PizzasAction ) : PizzaState {
   
    switch(action.type){
        case fromPizzas.LOAD_PIZZAS:{
            return{
                ...state,
                loading : true,
                loaded : false
            }
        }
        case fromPizzas.LOAD_PIZZAS_SUCCESS:{
            const data = action.payload;
            return{
                ...state,
                loading : false,
                loaded : true,
                data
            }
        }
        case fromPizzas.LOAD_PIZZAS_FAIL:{
            return{
                ...state,
                loading : false,
                loaded : false
            }
        }
    }
   
    return state;

  
}

export const getPizzas = (state : PizzaState) => state.data;
export const getPizzasLoading = (state : PizzaState) => state.loading;
export const getPizzasLoaded = (state : PizzaState) => state.loaded;