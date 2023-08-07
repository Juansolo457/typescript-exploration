import { TestBed } from '@angular/core/testing';

import { Problem456Service } from './problem456.service';

describe('Problem456Service', () => {
  let service: Problem456Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Problem456Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
