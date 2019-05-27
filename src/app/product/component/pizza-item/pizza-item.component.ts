import { Component, OnInit , Input, ChangeDetectionStrategy } from '@angular/core';
import { Pizza } from 'src/app/product/model/pizza';


@Component({
  selector: 'pizza-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: Pizza;
  constructor() { }

  ngOnInit() {
  }

}
