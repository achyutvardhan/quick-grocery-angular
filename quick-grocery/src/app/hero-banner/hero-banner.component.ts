import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
  slides = [
    { image: 'assets/image1.jpg', alt: 'Fresh Produce' },
    { image: 'assets/image2.jpg', alt: 'Dairy Products' },
    { image: 'assets/image3.jpg', alt: 'Groceries Delivery' }
  ];
  currentSlide = 0;

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
