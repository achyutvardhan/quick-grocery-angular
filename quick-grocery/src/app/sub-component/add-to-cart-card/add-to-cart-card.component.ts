import { Component , Input } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
@Component({
  selector: 'app-add-to-cart-card',
  templateUrl: './add-to-cart-card.component.html',
  styleUrls: ['./add-to-cart-card.component.css']
})
export class AddToCartCardComponent {
  
  @Input() itemObj3: any;
  constructor(private cartService: CartServiceService) { 
    this.itemObj3 = {
      id: 0,
      name: '',
      price: 0,
      image: '',
      description: '',
      quantity: 1
    };
    // console.log(this.itemObj3)
  }

  onclickAdd= ()=>{
      this.itemObj3.quantity += 1;
      console.log(this.itemObj3)
      this.cartService.findAndUpdateCart(this.itemObj3);
  }

  onClickSub= ()=>{
    if(this.itemObj3.quantity > 1) {
      this.itemObj3.quantity -= 1;
    }
    console.log(this.itemObj3)
    this.cartService.findAndUpdateCart(this.itemObj3);
  }

  onClickDelete = ()=>{
    this.cartService.deleItemFromCart(this.itemObj3.id).subscribe({
      next: (res) => {
        console.log('Item deleted:', res);
        this.itemObj3 = null
      },
      error: (err) => console.error('Error deleting item:', err),
      complete: () => console.log('Item successfully deleted from cart')
    });

  }
}
