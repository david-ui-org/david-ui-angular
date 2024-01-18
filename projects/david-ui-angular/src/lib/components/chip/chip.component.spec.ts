import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DUIChipComponent } from './chip.component';

describe('DUIChipComponent', () => {
  let component: DUIChipComponent;
  let fixture: ComponentFixture<DUIChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DUIChipComponent]
    });
    fixture = TestBed.createComponent(DUIChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
