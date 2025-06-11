import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialOfferComponent } from '../Pages/special-offer/special-offer.component';


@NgModule({
  declarations: [SpecialOfferComponent],
  imports: [
    CommonModule
  ],
  exports :[SpecialOfferComponent]
})
export class SpecialOfferModule { }
