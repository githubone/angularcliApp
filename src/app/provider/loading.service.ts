import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {
  private _isLoading: boolean = true;
  private publishLoading= new Subject<boolean>();
  publishLoading$ = this.publishLoading.asObservable();
  public publishLoadingCommand (input:boolean) {
      this.publishLoading.next(input);
  }
  constructor() { }

  set isLoading(isLoading:boolean){
        this._isLoading = isLoading;
  }

  get isLoading() {
      return this._isLoading;
  }

}
