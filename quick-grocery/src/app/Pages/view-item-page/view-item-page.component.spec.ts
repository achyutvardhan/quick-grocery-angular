import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemPageComponent } from './view-item-page.component';

describe('ViewItemPageComponent', () => {
  let component: ViewItemPageComponent;
  let fixture: ComponentFixture<ViewItemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewItemPageComponent]
    });
    fixture = TestBed.createComponent(ViewItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
