import { Component, OnInit } from '@angular/core';
import { NodetsapiclientService } from '../provider/nodetsapiclient.service';
import { Nodetsapiauth0clientService }  from '../provider/nodetsapiauth0client.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private clientService:NodetsapiclientService,
                private authService: Nodetsapiauth0clientService
   ) { }

  ngOnInit() {
    //this.testService();
    this.authService.login();

  }
  testService() {
    this.clientService.get("http://localhost:5555/db")
    .subscribe((res)=> {
      console.log(res);
    })
  }

}
