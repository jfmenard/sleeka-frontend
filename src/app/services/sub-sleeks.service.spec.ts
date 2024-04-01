import { TestBed } from '@angular/core/testing';

import { SubSleeksService } from './sub-sleeks.service';

describe('SubSleeksService', () => {
  let service: SubSleeksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubSleeksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
