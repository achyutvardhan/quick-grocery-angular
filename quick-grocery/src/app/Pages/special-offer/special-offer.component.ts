import { Component } from '@angular/core';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.css']
})
export class SpecialOfferComponent {
  product1 = [
      {
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        name: 'Apple',
        price: 0.99,
        category: 'Fruits',
      },
      {
        image: "../../assets/orange.jpg",
        name: 'Orange',
        price: 1.19,
        category: 'Fruits',
      },
      {
        image: '../../assets/strawberries.jpg',
        name: 'Strawberry',
        price: 2.99,
        category: 'Fruits',
      },
      {
        image: '../../assets/banana.jpg',
        name: 'Banana',
        price: 0.59,
        category: 'Fruits',
      }
     ]

     product2 = [
      {
        image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        name: 'Bread',
        price: 2.49,
        category: 'Bakery',
      },
      {
        image: "../../assets/strawberries.jpg",
        name: 'Strawberry',
        price: 2.99,
        category: 'Fruits',
      },
      {
        image: '../../assets/banana.jpg',
        name: 'Banana',
        price: 0.59,
        category: 'Fruits',
      },
      {
        image: '../../assets/milk.jpg',
        name: 'Milk',
        price: 3.49,
        category: 'Dairy',
      }]

      product3 = [
      {
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        name: 'Apple',
        price: 0.99,
        category: 'Fruits',
      },
      {
        image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        name: 'Chicken Breast',
        price: 5.99,
        category: 'Meat',
      },
      {
        image: '../../assets/broccoli-florets.webp',
        name: 'Broccoli',
        price: 1.29,
        category: 'Vegetables',
      },
      {
        image: '../../assets/grapes.jpg',
        name: 'Grape',
        price: 2.49,
        category: 'Fruits',
      }]
}

