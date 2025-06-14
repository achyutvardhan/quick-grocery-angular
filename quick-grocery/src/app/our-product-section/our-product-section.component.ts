import { Component } from '@angular/core';

@Component({
  selector: 'app-our-product-section',
  templateUrl: './our-product-section.component.html',
  styleUrls: ['./our-product-section.component.css']
})
export class OurProductSectionComponent {
      product = [
      {
        images: ["https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
        name: 'Apple',
        price: 0.99,
        category: 'Fruits',
        unit : "each"
      },
      {
        images: ['../../assets/broccoli-florets.webp'],
        name: 'Broccoli',
        price: 1.29,
        category: 'Vegetables',
        unit : "each"
      },
      {
        images:[ '../../assets/milk.jpg'],
        name: 'Milk',
        price: 3.49,
        category: 'Dairy',
        unit: "gallon"
      },
      {
        images: ['https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
        name: 'Bread',
        price: 2.49,
        category: 'Bakery',
        unit: "loaf",
      },
     ]
     
}
