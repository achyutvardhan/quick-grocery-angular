import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPromotionSectionComponent } from './app-promotion-section.component';

describe('AppPromotionSectionComponent', () => {
  let component: AppPromotionSectionComponent;
  let fixture: ComponentFixture<AppPromotionSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPromotionSectionComponent]
    });
    fixture = TestBed.createComponent(AppPromotionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
