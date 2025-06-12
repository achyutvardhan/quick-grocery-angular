import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BlogComponent } from '../Pages/blog/blog.component';
import { ContactComponent } from '../Pages/contact/contact.component';
import { SpecialOfferComponent } from '../Pages/special-offer/special-offer.component';
import { TopCategoryComponent } from '../top-category/top-category.component';
import { OurProductComponent } from '../Pages/our-product/our-product.component';
export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {path: "ourProduct" , component:OurProductComponent},
  {path: "blog" , component: BlogComponent},
  {path: "contact" , component: ContactComponent},
  {path: "specialOffer" , component: SpecialOfferComponent},
  {path:"topCategory" , component:TopCategoryComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class NavigationModule { }
