import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { TopCategoryComponent } from './top-category/top-category.component';
import { ProductCardComponent } from './sub-component/product-card/product-card.component';
import { OurProductSectionComponent } from   './our-product-section/our-product-section.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroBannerComponent,
    TopCategoryComponent,
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
