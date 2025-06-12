import { Component } from '@angular/core';

@Component({
  selector: 'app-our-product-section',
  templateUrl: './our-product-section.component.html',
  styleUrls: ['./our-product-section.component.css']
})
export class OurProductSectionComponent {
      product = [
      {
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        name: 'Fresh Organic Apple',
        price: 2.99,
        category: 'Fruits',
      },
      {
        image: '../../assets/broccoli-florets.webp',
        name: 'Whole Wheat Bread',
        price: 1.99,
        category: 'Vegetables',
      },
      {
        image: '../../assets/egg.jpg',
        name: 'Farm Fresh Eggs',
        price: 3.49,
        category: 'Dairy',
      },
      {
        image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        name: 'Whole Grain Bread',
        price: 1.79,
        category: 'Bakery',
      },
     ]
     
}
