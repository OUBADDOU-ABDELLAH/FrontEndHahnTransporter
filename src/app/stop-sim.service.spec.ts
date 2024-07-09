import { TestBed } from '@angular/core/testing';

import { StopSimService } from './stop-sim.service';

describe('StopSimService', () => {
  let service: StopSimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StopSimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
