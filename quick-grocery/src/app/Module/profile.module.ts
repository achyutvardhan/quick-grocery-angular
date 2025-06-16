import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from '../Pages/add-to-cart/add-to-cart.component';
import { AddToCartCardComponent } from '../sub-component/add-to-cart-card/add-to-cart-card.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../Pages/login/login.component';
@NgModule({
  declarations: [AddToCartComponent , AddToCartCardComponent , LoginComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AddToCartComponent , AddToCartCardComponent , LoginComponent],
})
export class ProfileModule { }
