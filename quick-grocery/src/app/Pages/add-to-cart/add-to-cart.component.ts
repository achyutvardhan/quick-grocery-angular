import { Component , OnInit, OnDestroy } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  subTotal: number = 0;
  private cartSubscription: Subscription | undefined;

  constructor(private cartService: CartServiceService) { }
  
  ngOnInit(): void {
      this.cartSubscription = this.cartService.cartItems$.subscribe((data)=>
        {
          this.cartItems = Array.isArray(data) ? data : [];
          this.calculateSubtotal();
          console.log('Cart items updated:', this.cartItems);
        }
      );
  }

  calculateSubtotal(): void {
    this.subTotal = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
   
}
