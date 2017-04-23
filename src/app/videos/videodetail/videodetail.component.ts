import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../provider/loading.service';
import { ActivatedRoute} from '@angular/router';
import { VideoService } from '../../provider/video.service';
import { VideoModel} from '../shared/video.model';

@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css']
})
export class VideodetailComponent implements OnInit {
  currentVideo:VideoModel;

  constructor(private loadingService: LoadingService, 
              private route: ActivatedRoute,
              private videoService: VideoService
              ) { }

  ngOnInit() {
        this.route.params.subscribe(params=> {
            console.log(params['id']);
            let videoId = params['id'];
            this.getVideoByIdAsync(videoId);

        });
        //this.showModal();
       // this.loadingService.publishLoadingCommand(false);
  }

  getVideoByIdAsync(videoId:string) {
      this.videoService.getById("assets/data/videos.json", videoId)
          .subscribe((video)=> {
              this.mappedVideo(video[0]);
          },
          (err)=> {
            console.log(err);
          }
          )
          
  }

  mappedVideo(video:VideoModel){
      if(video) {
            let poster = video.Poster;
            video.Thumbnail = "assets/img/video/" + video.Thumbnail;
            video.Poster = "assets/img/video/" + poster;
            video.Source = "assets/video/" + video.Source;
            this.currentVideo = video;
      } else {
        console.log("video does not exists");
      }
  }

}
