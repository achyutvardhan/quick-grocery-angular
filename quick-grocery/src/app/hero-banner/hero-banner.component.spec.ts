import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroBannerComponent } from './hero-banner.component';

describe('HeroBannerComponent', () => {
  let component: HeroBannerComponent;
  let fixture: ComponentFixture<HeroBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBannerComponent]
    });
    fixture = TestBed.createComponent(HeroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to next slide', () => {
    const initialIndex = component.currentSlide;
    component.nextSlide();
    expect(component.currentSlide).toBe((initialIndex + 1) % component.slides.length);
  });

  it('should go to previous slide', () => {
    const initialIndex = component.currentSlide;
    component.prevSlide();
    expect(component.currentSlide).toBe((initialIndex - 1 + component.slides.length) % component.slides.length);
  });
});
