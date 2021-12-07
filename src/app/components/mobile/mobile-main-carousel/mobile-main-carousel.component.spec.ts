import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMainCarouselComponent } from './mobile-main-carousel.component';

describe('MobileMainCarouselComponent', () => {
  let component: MobileMainCarouselComponent;
  let fixture: ComponentFixture<MobileMainCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMainCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMainCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
