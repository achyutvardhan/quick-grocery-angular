import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../sub-component/product-card/product-card.component';
import { OurProductSectionComponent } from '../our-product-section/our-product-section.component';
import { OurProductComponent } from '../Pages/our-product/our-product.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ProductCardComponent,OurProductSectionComponent,OurProductComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ProductCardComponent , OurProductSectionComponent , OurProductComponent]
})
export class ProductModule { }
