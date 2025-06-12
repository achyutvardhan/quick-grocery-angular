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
        name: 'Fruits',
        price: 2.99,
        category: 'vegetables',
      },
      {
        image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        name: 'Vegetables',
        price: 1.99,
        category: 'Vegetables',
      },
      {
        image: '../../assets/milk.jpg',
        name: 'Fresh Milk',
        price: 3.49,
        category: 'Dairy',
      },
      {
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        name: 'Bread',
        price: 1.79,
        category: 'Bakery',
      },
       {
        image: '../../assets/raw-meat-table.jpg',
        name: 'Raw Meat',
        price: 1.79,
        category: 'Meat',
      }
     ]
     

}





