import { TestBed, inject } from '@angular/core/testing';

import { NodetsapiclientService } from './nodetsapiclient.service';

describe('NodetsapiclientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodetsapiclientService]
    });
  });

  it('should ...', inject([NodetsapiclientService], (service: NodetsapiclientService) => {
    expect(service).toBeTruthy();
  }));
});
