import { TestBed } from '@angular/core/testing';

import { DavidUIAngularService } from './david-ui-angular.service';

describe('DavidUIAngularService', () => {
  let service: DavidUIAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DavidUIAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
