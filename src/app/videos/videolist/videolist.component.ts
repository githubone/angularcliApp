import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoadingService } from '../../provider/loading.service';


@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
  
})
export class VideolistComponent implements OnInit {

  constructor(private loadingService:LoadingService) { }

  ngOnInit() {
    // remove loadding notification set on app page
    this.loadingService.publishLoadingCommand(false)
  }
}
