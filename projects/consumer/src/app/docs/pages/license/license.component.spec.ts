import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseComponent } from './license.component';

describe('LicenseComponent', () => {
  let component: LicenseComponent;
  let fixture: ComponentFixture<LicenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicenseComponent]
    });
    fixture = TestBed.createComponent(LicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
