import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../sub-component/product-card/product-card.component';
import { OurProductSectionComponent } from '../our-product-section/our-product-section.component';

@NgModule({
  declarations: [ProductCardComponent,OurProductSectionComponent ],
  imports: [
    CommonModule
  ],
  exports:[ProductCardComponent , OurProductSectionComponent]
})
export class ProductModule { }
