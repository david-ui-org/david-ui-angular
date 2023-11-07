import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePreviewComponent } from './feature-preview.component';

describe('FeaturePreviewComponent', () => {
  let component: FeaturePreviewComponent;
  let fixture: ComponentFixture<FeaturePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturePreviewComponent]
    });
    fixture = TestBed.createComponent(FeaturePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
