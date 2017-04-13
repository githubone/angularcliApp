import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../provider/loading.service';

@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css']
})
export class VideodetailComponent implements OnInit {

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
        //this.showModal();
       // this.loadingService.publishLoadingCommand(false);
  }

}
