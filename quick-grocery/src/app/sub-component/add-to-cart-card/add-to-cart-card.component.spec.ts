import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartCardComponent } from './add-to-cart-card.component';

describe('AddToCartCardComponent', () => {
  let component: AddToCartCardComponent;
  let fixture: ComponentFixture<AddToCartCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToCartCardComponent]
    });
    fixture = TestBed.createComponent(AddToCartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
