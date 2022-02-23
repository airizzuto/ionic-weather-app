import { TestBed } from '@angular/core/testing';

import { UnitState } from './unit-state.service';

describe('UnitStateService', () => {
  let service: UnitState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
