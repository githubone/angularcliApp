import {Component} from '@angular/core';
import { SpinnerService } from './spinner-service';

@Component({
    selector: 'spinner-component',
    'template': '<div *ngIf="active" class="spinner loading"></div>'
})
//http://stackoverflow.com/questions/37069609/show-loading-screen-when-navigating-between-routes-in-angular-2

export class SpinnerComponent {
    public active:boolean;

    constructor(private spinner: SpinnerService) {
        spinner.status.subscribe((status:boolean)=> {
             this.active = status;
        });
    }
}