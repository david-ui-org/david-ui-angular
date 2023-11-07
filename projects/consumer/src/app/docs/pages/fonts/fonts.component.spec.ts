import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsComponent } from './fonts.component';

describe('FontsComponent', () => {
  let component: FontsComponent;
  let fixture: ComponentFixture<FontsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontsComponent]
    });
    fixture = TestBed.createComponent(FontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
