import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pizza } from 'src/app/product/model/pizza';

@Injectable()
export class PizzasService {

  constructor(private http: HttpClient) {}
  
    getPizzas(): Observable<Pizza[]> {
      return this.http
        .get<Pizza[]>(`http://localhost:3000/api/pizzas`)
        .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}
