import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouMayAlsoLikeComponent } from './you-may-also-like.component';

describe('YouMayAlsoLikeComponent', () => {
  let component: YouMayAlsoLikeComponent;
  let fixture: ComponentFixture<YouMayAlsoLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YouMayAlsoLikeComponent]
    });
    fixture = TestBed.createComponent(YouMayAlsoLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
