import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() itemsObj: any;

  constructor() {
    this.itemsObj = {
      image: '',
      name: '',
      price: 0,
      category: ''
    };
  }
}
