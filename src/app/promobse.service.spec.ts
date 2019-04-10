import { TestBed, inject } from '@angular/core/testing';

import { PromobseService } from './promobse.service';

describe('PromobseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromobseService]
    });
  });

  it('should be created', inject([PromobseService], (service: PromobseService) => {
    expect(service).toBeTruthy();
  }));
});
