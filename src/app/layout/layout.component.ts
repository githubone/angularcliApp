import { Component, OnInit } from '@angular/core';
import { LayoutModel } from './layout.model';
import { Router } from '@angular/router';
import { VideoType } from '../videos/shared/videotype';
import { DataService } from '../provider/data.service';
import { NotificationModel } from '../notification/notification.model';
import * as _ from 'lodash';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
 menus: LayoutModel[] = [];
 notifications: NotificationModel[] = [];
 dataServiceUrl:string  = "/assets/data/notifications.json";;

    constructor(private router:Router, private dataService:DataService) { 
      this.populateMenus();
      this.getNotifications();
      //this.populateNotifications([]);
    }
  ngOnInit() {
  
  }

  populateMenus() {
    this.menus.push(
      new LayoutModel("TV!!", "fa fa-bar-chart-o", "/videoslist/" + VideoType.tv),
      new LayoutModel("Music", "fa fa-group","/videoslist/" + VideoType.music),
      new LayoutModel("Comedy", "fa fa-cubes", "/videoslist/" + VideoType.comedy),
      new LayoutModel("Documentary", "fa fa-comments ","/videoslist/" + VideoType.documentary));
      //new LayoutModel("Test", "fa fa-comments ","/test"));

  }
  getNotifications() {
    this.dataService.getData(this.dataServiceUrl)
      .subscribe((data:NotificationModel[])=> {
         this.notifications = data;     
      });
      
  }
  populateNotifications(notifications: NotificationModel[]) {
    this.notifications.push(
      new NotificationModel("Paul Tester"," invite you to a tester's haven","Yesterday at 5pm", "styles/images/avatar.jpg"),
      new NotificationModel("Susan Tester","like a comment","23rd June 2016", "styles/images/avatar.jpg"),
      new NotificationModel("Wonfagain Tul","sent you an email","23rd June 2016", "styles/images/avatar.jpg")
    )
  }
  
  goToPage(url:string){
    this.router.navigateByUrl(url);   
  }
}
