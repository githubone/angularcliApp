import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { VideoService } from './video.service';

describe('VideoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoService],
      imports : [HttpModule]
    });
  });

  it('should ...', inject([VideoService], (service: VideoService) => {
    expect(service).toBeTruthy();
  }));
});
