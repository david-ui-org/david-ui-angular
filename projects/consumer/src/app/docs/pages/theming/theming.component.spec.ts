import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemingComponent } from './theming.component';

describe('ThemingComponent', () => {
  let component: ThemingComponent;
  let fixture: ComponentFixture<ThemingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemingComponent]
    });
    fixture = TestBed.createComponent(ThemingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
