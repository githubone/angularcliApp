import { Component, OnInit } from '@angular/core';
import { NodetsapiclientService } from '../provider/nodetsapiclient.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private clientService:NodetsapiclientService ) { }

  ngOnInit() {
     this.testService();
  }
  testService() {
    this.clientService.get("http://localhost:5555/db")
    .subscribe((res)=> {
      console.log(res);
    })
  }

}
