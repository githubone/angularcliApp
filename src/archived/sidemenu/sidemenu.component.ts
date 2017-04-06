import { Component, OnInit } from '@angular/core';
import { SideMenuModel } from './sidemenu.model';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  menus: SideMenuModel[] = [];
  constructor() { 
    this.menus.push(
      new SideMenuModel("TV", "fa fa-bar-chart-o", "/videolists"),
      new SideMenuModel("Music", "fa fa-group","/videolists"),
      new SideMenuModel("Comedy", "fa fa-cubes", "/videolists"),
      new SideMenuModel("Documentary", "fa fa-comments ","/videolists")
      
      )  
  }

  ngOnInit() {
    
}

}
