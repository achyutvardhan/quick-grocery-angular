import { Component } from '@angular/core';

@Component({
  selector: 'app-you-may-also-like',
  templateUrl: './you-may-also-like.component.html',
  styleUrls: ['./you-may-also-like.component.css']
})
export class YouMayAlsoLikeComponent {
  relatedProducts = [
    {
      images: [
        "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      name: 'Organic Avocados',
      price: 1.99,
      unit: 'each',
      badge: 'Organic'
    },
    {
      images: ['assets/grapes.jpg'],
      name: 'Red Grapes',
      price: 4.49,
      unit: 'per lb',
      badge: ''
    },
    {
      images: ['assets/strawberries.jpg'],
      name: 'Fresh Strawberries',
      price: 3.99,
      unit: 'pint',
      badge: 'Seasonal'
    },
    {
      images: ['assets/still-life-delicious-pineapple.jpg'],
      name: 'Fresh Pineapple',
      price: 4.99,
      unit: 'pint',
      badge: 'Seasonal'
    },
    {
      images: [
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ],
      name: 'Organic Oranges',
      price: 5.99,
      unit: 'bag of 6',
      badge: 'Organic'
    }
  ];
}


