import { TestBed } from '@angular/core/testing';

import { DuiSelectService } from './dui-select.service';

describe('DuiSelectService', () => {
  let service: DuiSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuiSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
