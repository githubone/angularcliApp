import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingService } from '../../provider/loading.service';
import { VideoService } from '../../provider/video.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { VideodetailComponent } from './videodetail.component';
import { ActivatedRoute} from '@angular/router';
import { HttpModule } from '@angular/http';
import * as Rx from 'rxjs/Rx';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AssetService } from '../../provider/asset.service';
import {WindowRef} from '../../provider/windowref';


describe('VideodetailComponent', () => {
  let component: VideodetailComponent;
  let fixture: ComponentFixture<VideodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideodetailComponent ],
      
      providers: [LoadingService,VideoService,LocalStorageService,AssetService,WindowRef,
      {
        provide: ActivatedRoute, useValue: { 'params': Rx.Observable.from([{ 'id': 1 }]) }
      }
      ],

      imports: [HttpModule,LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })]
      
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
