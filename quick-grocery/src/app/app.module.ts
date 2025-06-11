import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './sub-component/product-card/product-card.component';
import { OurProductSectionComponent } from   './our-product-section/our-product-section.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    OurProductSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
