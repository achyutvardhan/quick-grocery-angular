import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from '../Pages/add-to-cart/add-to-cart.component';
import { AddToCartCardComponent } from '../sub-component/add-to-cart-card/add-to-cart-card.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AddToCartComponent , AddToCartCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AddToCartComponent , AddToCartCardComponent],
})
export class ProfileModule { }
