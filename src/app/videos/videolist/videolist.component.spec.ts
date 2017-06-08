import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VideolistComponent } from './videolist.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingService } from '../../provider/loading.service';
import { VideoService } from '../../provider/video.service';
import { HttpModule } from '@angular/http';
import {SpinnerService} from '../../spinner/spinner-service';

describe('VideolistComponent', () => {
  let component: VideolistComponent;
  let fixture: ComponentFixture<VideolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideolistComponent ],
      imports: [RouterModule, RouterTestingModule, HttpModule],
      providers: [LoadingService, VideoService, SpinnerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
