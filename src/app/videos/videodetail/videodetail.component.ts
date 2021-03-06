import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingService } from '../../provider/loading.service';
import { ActivatedRoute} from '@angular/router';
import { VideoService } from '../../provider/video.service';
import { AssetService } from '../../provider/asset.service';
import { VideoModel} from '../shared/video.model';
//import { LocalStorageService } from 'angular-2-local-storage';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WindowRef } from '../../provider/windowref';

@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css']
})
export class VideodetailComponent implements OnInit {
  currentVideo:VideoModel;
  imgSourceUrl:SafeResourceUrl = "";
  @ViewChild('videoPlayer') videoPlayer:any;

  constructor(private loadingService: LoadingService, 
              private route: ActivatedRoute,
              private videoService: VideoService,
               //private localStorageService: LocalStorageService,
               private assetService:AssetService,
               private sanitizer: DomSanitizer,
               private windowref : WindowRef
              ) { }

  ngOnInit() {
        this.route.params.subscribe(params=> {
            console.log(params['id']);
            let videoId = params['id'];
            this.getVideoByIdAsync(videoId);
            this.getAssetAsync("https://mavestore.blob.core.windows.net/testcontainer/adeleatbbctn.jpg");
            

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

  getAssetAsync(assetUrl:string){
      this.assetService.getImage("https://mavestore.blob.core.windows.net/testcontainer/adeleatbbctn.jpg")
          .subscribe((asset)=> {
             this.imgSourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.windowref.nativeWindow.URL.createObjectURL(asset))
          })
  }

  storeAsset() {

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

  swapVideo() {
        this.videoPlayer.nativeElement.currentTime = 0;
        this.currentVideo.Thumbnail = "assets/img/video/" + "adeleatbbc.jpg";
        this.currentVideo.Poster = "assets/img/video/" + "adeleatbbctn.jpg";
        this.currentVideo.Source = "assets/video/" + "adeleatbbc.mp4"; 
  }

}
