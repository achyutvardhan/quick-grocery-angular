import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './Module/header.module';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { TopCategoryComponent } from './top-category/top-category.component';
import { FooterModule } from './Module/footer.module';
import { ProductModule } from './Module/product.module';
import { BlogModule } from './Module/blog.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroBannerComponent,
    TopCategoryComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    ProductModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
