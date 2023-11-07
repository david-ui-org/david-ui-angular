import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTailwindComponent } from './about-tailwind.component';

describe('AboutTailwindComponent', () => {
  let component: AboutTailwindComponent;
  let fixture: ComponentFixture<AboutTailwindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTailwindComponent]
    });
    fixture = TestBed.createComponent(AboutTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
