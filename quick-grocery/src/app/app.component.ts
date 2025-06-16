import { Component } from '@angular/core';
import { CartServiceService } from './services/cart-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private cartItems: any[] = [];
  totalQuantity: number = 0;
  private cartSubscription: Subscription | undefined;
  
  constructor(private cartService: CartServiceService) {
    this.cartSubscription = this.cartService.cartItems$.subscribe((data)=>
        {
          this.cartItems = Array.isArray(data) ? data : [];
          this.calculateTotalQuantity();
        }
      );
  }

  calculateTotalQuantity(): void {
    this.totalQuantity = this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
       
}
