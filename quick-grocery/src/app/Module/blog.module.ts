import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodBlogSectionComponent } from '../food-blog-section/food-blog-section.component';
import { FoodCardComponent } from '../sub-component/food-card/food-card.component';

@NgModule({
  declarations: [FoodBlogSectionComponent, FoodCardComponent],
  imports: [
    CommonModule
  ],
  exports:[FoodBlogSectionComponent , FoodCardComponent]
})
export class BlogModule { }
