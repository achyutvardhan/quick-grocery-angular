import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-weekly-deals',
  templateUrl: './weekly-deals.component.html',
  styleUrls: ['./weekly-deals.component.css']
})
export class WeeklyDealsComponent {
@Input() itemsObj3: any;

  constructor() {
    this.itemsObj3 = {
      image: '',
      name: '',
      price: 0,
      category: ''
    };
  }
}
