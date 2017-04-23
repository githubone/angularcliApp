import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoadingService } from '../../provider/loading.service';
import { VideoService } from '../../provider/video.service';
import { VideoModel } from '../shared/video.model';
import { VideoType } from '../shared/videotype';
import {Router} from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
  
})
export class VideolistComponent implements OnInit {
  imgPath:string = "assets/img/video/";
  videos: VideoModel[] = [];
  constructor(private loadingService:LoadingService, private videoService: VideoService, private router: Router) { }
  ngOnInit() {
    // remove loadding notification set on app page
    this.loadingService.publishLoadingCommand(false)
    this.getVideosAsync();
  }

  getVideosAsync(){
    this.videoService.get("/assets/data/videos.json")
      .subscribe((data:VideoModel[])=> {
        this.mappedVideos(data);
      })

  }

  mappedVideos(videosData:VideoModel[] ){
   // this.videos = videosData;
    let cloneObj = _.cloneDeep(videosData);

      _.map(cloneObj, function(video) {
        // to do : mapped image location to poster property to display on web page
        
        video.Thumbnail = "assets/img/video/" + video.Thumbnail;
        video.Source = "assets/video/" + video.Source;
        console.log(VideoType[video.VideoType]);
        video.VideoTypeName = VideoType[video.VideoType];
    })

    this.videos = cloneObj;
    
  }

  clone(): any{
    
  }
}
