import { Topping } from '../model/topping';

export interface Pizza {
  id?: number;
  name?: string;
  toppings?: Topping[];
}