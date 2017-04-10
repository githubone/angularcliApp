import { Component, OnInit } from '@angular/core';
import { LayoutModel } from './layout.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
 menus: LayoutModel[] = [];

  constructor(private router:Router) { 
    this.menus.push(
      new LayoutModel("TV!!", "fa fa-bar-chart-o", "/videos"),
      new LayoutModel("Music", "fa fa-group","/videoslist"),
      new LayoutModel("Comedy", "fa fa-cubes", "/videos"),
      new LayoutModel("Documentary", "fa fa-comments ","/videoslist"));
    }
  ngOnInit() {
  }
  
  goToPage(url:string){
    this.router.navigateByUrl(url);   
  }
}
