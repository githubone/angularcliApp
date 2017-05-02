import { Component, OnInit } from '@angular/core';
import { LayoutModel } from './layout.model';
import { Router } from '@angular/router';
import { VideoType } from '../videos/shared/videotype';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
 menus: LayoutModel[] = [];
    constructor(private router:Router) { 
    this.menus.push(
      new LayoutModel("TV!!", "fa fa-bar-chart-o", "/videoslist/" + VideoType.tv),
      new LayoutModel("Music", "fa fa-group","/videoslist/" + VideoType.music),
      new LayoutModel("Comedy", "fa fa-cubes", "/videoslist/" + VideoType.comedy),
      new LayoutModel("Documentary", "fa fa-comments ","/videoslist/" + VideoType.documentary));
    }
  ngOnInit() {
  }
  
  goToPage(url:string){
    this.router.navigateByUrl(url);   
  }
}
