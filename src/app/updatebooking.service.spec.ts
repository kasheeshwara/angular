import { TestBed } from '@angular/core/testing';

import { UpdatebookingService } from './updatebooking.service';

describe('UpdatebookingService', () => {
  let service: UpdatebookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatebookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
