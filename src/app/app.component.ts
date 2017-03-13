import { Component, AfterViewInit} from '@angular/core';
import { LoadingService } from './provider/loading.service';
import { VideoService } from './provider/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [LoadingService, VideoService]
})
export class AppComponent implements AfterViewInit {
  loading: boolean = true;
  title = 'app works!';

  constructor( private loadingService: LoadingService, private router: Router){
      loadingService.publishLoading$.subscribe((loadFlag)=> {
        this.loading = loadFlag;
      })
  }

  ngAfterViewInit() {
    // this.router.navigateByUrl("/welcome");
    this.router.navigateByUrl("/videoslist");
  }

  set _loading(value:boolean){
    this.loading = value;
  }

  get _loading() {
    return this.loading;
  }
}
