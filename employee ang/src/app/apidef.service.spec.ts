import { TestBed } from '@angular/core/testing';

import { ApidefService } from './apidef.service';

describe('ApidefService', () => {
  let service: ApidefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApidefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
