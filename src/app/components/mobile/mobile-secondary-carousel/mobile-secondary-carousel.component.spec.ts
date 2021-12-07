import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSecondaryCarouselComponent } from './mobile-secondary-carousel.component';

describe('MobileSecondaryCarouselComponent', () => {
  let component: MobileSecondaryCarouselComponent;
  let fixture: ComponentFixture<MobileSecondaryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSecondaryCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSecondaryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
