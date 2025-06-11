import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodBlogSectionComponent } from '../food-blog-section/food-blog-section.component';
import { FoodCardComponent } from '../sub-component/food-card/food-card.component';
import { BlogComponent } from '../Pages/blog/blog.component';
@NgModule({
  declarations: [FoodBlogSectionComponent, FoodCardComponent , BlogComponent],
  imports: [
    CommonModule
  ],
  exports:[FoodBlogSectionComponent , FoodCardComponent , BlogComponent]
})
export class BlogModule { }
