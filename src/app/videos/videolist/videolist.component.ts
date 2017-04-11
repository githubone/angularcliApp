import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoadingService } from '../../provider/loading.service';
import { VideoService } from '../../provider/video.service';


@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
  
})
export class VideolistComponent implements OnInit {

  constructor(private loadingService:LoadingService, private videoService: VideoService) { }
  ngOnInit() {
    // remove loadding notification set on app page
    this.loadingService.publishLoadingCommand(false)
    this.getVideosAsync();
  }

  getVideosAsync(){
    this.videoService.get("/assets/data/videos.json")
      .subscribe((data)=> {
        console.log(data);
      })

  }
}
