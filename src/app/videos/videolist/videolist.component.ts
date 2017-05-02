import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { LoadingService } from '../../provider/loading.service';
import { VideoService } from '../../provider/video.service';
import { VideoModel } from '../shared/video.model';
import { VideoType } from '../shared/videotype';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
//import { Subject} from 'rxjs/subject';
import * as Rx from 'rxjs/Rx';
@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
  
})
export class VideolistComponent implements OnInit {
  dataServiceUrl  = "/assets/data/videos.json";
  paramVideoType:VideoType = VideoType.documentary;
  searchTerm$ = new Rx.Subject<string>();
  imgPath:string = "assets/img/video/";
  videos: VideoModel[] = [];
  @ViewChild('tbSearch') tbSearch : ElementRef

  constructor(
    private loadingService:LoadingService, 
    private videoService: VideoService, 
    private router: Router,
    private route : ActivatedRoute
    ) { }
  ngOnInit() {
    // remove loadding notification set on app page
    
    this.loadingService.publishLoadingCommand(false)
    //this.getVideosAsync();
     this.route.params.subscribe((params)=> {
         let vtype:VideoType = params["g"] ? params["g"] : 1;
         this.paramVideoType = vtype;

          // clear text value from previous search
          this.tbSearch.nativeElement.value =  "";

          // register search when searchterm changes?
          this.videoService.search(this.dataServiceUrl, this.searchTerm$)
              .subscribe((data)=> {
              this.mappedVideos(data,this.paramVideoType);
          })
          // trigger search
         this.search("");
    });
  
     
  }

  getVideosAsync(){
    var filterGenre = this.route.params.subscribe((params)=> {
       let vtype = params["g"] ? params["g"] : 1;
       this.videoService.get(this.dataServiceUrl)
          .subscribe((data:VideoModel[])=> {
          this.mappedVideos(data,vtype);
      })
    });
  }

  mappedVideos(videosData:VideoModel[],videoType: VideoType ){
   // this.videos = videosData;
    let cloneObj = _.cloneDeep(videosData);
    
    // chain filtering and mapping !
    cloneObj =_.chain(cloneObj) // starts chain using the doctors array
        .filter((video)=> { // uses array from chain
        return video.VideoType == videoType;
        })
        .map((video)=> { // uses array from chain
        return new VideoModel(
          VideoType[video.VideoType],
          video.Subject,
          video.Comment,
          video.EstimatedHours,
          video.Name,
          video.Poster,
          "assets/img/video/" + video.Thumbnail,
          video.VideoType,
          video.isFavourite,
          video.Source,
          video.Id
        )
    })
    .value(); // gets value from chain
  
    this.videos = cloneObj
  }

  search(searchTerm:string){
     
     // this triggers the code this.videoService.search...
     this.searchTerm$.next(searchTerm);
     
    //  this.videoService.search(this.dataServiceUrl, this.searchTerm$)
    //   .subscribe((sresults)=> {
    //      this.videos = sresults;
    //   })
  }

}
