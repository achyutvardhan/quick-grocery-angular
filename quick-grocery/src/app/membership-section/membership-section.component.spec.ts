import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipSectionComponent } from './membership-section.component';

describe('MembershipSectionComponent', () => {
  let component: MembershipSectionComponent;
  let fixture: ComponentFixture<MembershipSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipSectionComponent]
    });
    fixture = TestBed.createComponent(MembershipSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
