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
      new LayoutModel("TV!!", "fa fa-bar-chart-o", "/videoslists"),
      new LayoutModel("Music", "fa fa-group","/videoslists"),
      new LayoutModel("Comedy", "fa fa-cubes", "/videoslists"),
      new LayoutModel("Documentary", "fa fa-comments ","/videoslists"));
    }

  ngOnInit() {
  }
  
  goToPage(url:string){
    this.router.navigateByUrl(url);   
  }
}
