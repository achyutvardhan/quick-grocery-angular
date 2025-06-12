import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './Module/header.module';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { TopCategoryComponent } from './top-category/top-category.component';
import { FooterModule } from './Module/footer.module';
import { ProductModule } from './Module/product.module';
import { BlogModule } from './Module/blog.module';
import { CategoryCardComponent } from './sub-component/category-card/category-card.component';
import { ContactModule } from './Module/contact.module';
import { AppPromotionSectionComponent } from './app-promotion-section/app-promotion-section.component';
import { HomeComponent } from './home/home.component';
import { NavigationModule } from './Module/navigation.module';



@NgModule({
  declarations: [
    AppComponent,
    HeroBannerComponent,
    TopCategoryComponent,
    CategoryCardComponent,
    AppPromotionSectionComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    ProductModule,
    BlogModule,
    ContactModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
