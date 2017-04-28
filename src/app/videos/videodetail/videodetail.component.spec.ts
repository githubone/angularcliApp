import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingService } from '../../provider/loading.service';
import { VideoService } from '../../provider/video.service';
import { VideodetailComponent } from './videodetail.component';
import { ActivatedRoute} from '@angular/router';
import { HttpModule } from '@angular/http';
import * as Rx from 'rxjs/Rx';

describe('VideodetailComponent', () => {
  let component: VideodetailComponent;
  let fixture: ComponentFixture<VideodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideodetailComponent ],
      
      providers: [LoadingService,VideoService,
      {
        provide: ActivatedRoute, useValue: { 'params': Rx.Observable.from([{ 'id': 1 }]) }
      }],

      imports: [HttpModule]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
