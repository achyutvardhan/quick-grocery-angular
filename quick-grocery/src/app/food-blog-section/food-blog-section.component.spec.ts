import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBlogSectionComponent } from './food-blog-section.component';

describe('FoodBlogSectionComponent', () => {
  let component: FoodBlogSectionComponent;
  let fixture: ComponentFixture<FoodBlogSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodBlogSectionComponent]
    });
    fixture = TestBed.createComponent(FoodBlogSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
