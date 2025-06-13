import { Component , Input  } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() itemsObj: any;
  constructor(private dataService: DataService )  {
  }

}
