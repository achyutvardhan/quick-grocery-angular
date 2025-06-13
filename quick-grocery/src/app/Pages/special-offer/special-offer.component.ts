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
        name: 'Fresh Organic Apples',
        price: 2.99,
        category: 'Fresh Organic Apples',
      },
      {
        image: "../../assets/fish.jpg",
        name: 'Fish',
        price: 1.99,
        category: 'Fish',
      },
      {
        image: '../../assets/strawberries.jpg',
        name: ' Organic Strawberries',
        price: 3.49,
        category: 'Strawberries',
      },
      {
        image: '../../assets/banana.jpg',
        name: 'Bananas',
        price: 1.79,
        category: 'Bananas',
      }
     ]

     product2 = [
      {
        image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        name: 'Whole Grain Bread',
        price: 2.99,
        category: 'Whole Grain Bread',
      },
      {
        image: "../../assets/strawberries.jpg",
        name: 'Fish',
        price: 1.99,
        category: 'Fish',
      },
      {
        image: '../../assets/banana.jpg',
        name: ' Organic Strawberries',
        price: 3.49,
        category: 'Strawberries',
      },
      {
        image: '../../assets/milk.jpg',
        name: 'Bananas',
        price: 1.79,
        category: 'Bananas',
      }]

      product3 = [
      {
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        name: 'Fresh Organic Apples',
        price: 2.99,
        category: 'Fresh Organic Apples',
      },
      {
        image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        name: 'Chicken',
        price: 1.99,
        category: 'Chicken',
      },
      {
        image: '../../assets/broccoli-florets.webp',
        name: ' Broccoli',
        price: 3.49,
        category: 'Broccoli',
      },
      {
        image: '../../assets/grapes.jpg',
        name: 'Grapes',
        price: 1.79,
        category: 'Grapes',
      }]
}

