import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesTableComponent } from './properties-table.component';

describe('PropertiesTableComponent', () => {
  let component: PropertiesTableComponent;
  let fixture: ComponentFixture<PropertiesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesTableComponent]
    });
    fixture = TestBed.createComponent(PropertiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
