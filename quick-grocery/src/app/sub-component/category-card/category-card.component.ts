import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() itemsObj2: any;

  constructor(){
    this.itemsObj2 = {
      image:'',
      category:''
    };
  }
}
