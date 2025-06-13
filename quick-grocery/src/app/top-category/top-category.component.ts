import { Component } from '@angular/core';

@Component({
  selector: 'app-top-category',
  templateUrl: './top-category.component.html',
  styleUrls: ['./top-category.component.css']
})
export class TopCategoryComponent {
  product = [
      {
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: 'Fruits',
       
      },
      {
        image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: 'Vegetables',
       
      },
      {
        image: '../../assets/milk.jpg',
        category: 'Dairy',
      },
      {
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Bakery',
      },
       {
        image: '../../assets/raw-meat-table.jpg',
        category: 'Meat',
      }
     ]
     

}





