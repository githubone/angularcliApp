import { TestBed, inject } from '@angular/core/testing';

import { VideoService } from './video.service';

describe('VideoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoService]
    });
  });

  it('should ...', inject([VideoService], (service: VideoService) => {
    expect(service).toBeTruthy();
  }));
});
