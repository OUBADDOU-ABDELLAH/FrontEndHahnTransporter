import { TestBed } from '@angular/core/testing';

import { StartSimService } from './start-sim.service';

describe('StartSimService', () => {
  let service: StartSimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartSimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
