import { TestBed } from '@angular/core/testing';

import { ShareunameService } from './shareuname.service';

describe('ShareunameService', () => {
  let service: ShareunameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareunameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
