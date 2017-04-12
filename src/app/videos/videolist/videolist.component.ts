import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoadingService } from '../../provider/loading.service';
import { VideoService } from '../../provider/video.service';
import { VideoModel } from '../shared/video.model';
import {Router} from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
  
})
export class VideolistComponent implements OnInit {
  videos: any[] = [];
  constructor(private loadingService:LoadingService, private videoService: VideoService, private router: Router) { }
  ngOnInit() {
    // remove loadding notification set on app page
    this.loadingService.publishLoadingCommand(false)
    this.getVideosAsync();
  }

  getVideosAsync(){
    this.videoService.get("/assets/data/videos.json")
      .subscribe((data:any)=> {
        this.mappedVideos(data);
      })

  }

  mappedVideos(videosData:any[] ){
    this.videos = videosData;
    let cloneObj = _.cloneDeep(this.videos);

    _.map(cloneObj, function(video) {

    })
    
  }

  clone(): any{
    
  }

  watchVideo(video:any) {
    this.router.navigateByUrl("/videodetail");
  }
}
