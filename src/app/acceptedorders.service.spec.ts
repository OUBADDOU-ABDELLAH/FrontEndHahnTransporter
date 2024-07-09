import { TestBed } from '@angular/core/testing';

import { AcceptedordersService } from './acceptedorders.service';

describe('AcceptedordersService', () => {
  let service: AcceptedordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceptedordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
