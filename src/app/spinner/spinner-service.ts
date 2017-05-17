import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/share';

@Injectable()
export class SpinnerService {
    public status: Subject<boolean> = new Subject();
    private _active: boolean = false;

    public get active(): boolean {
        return this._active;
    }

    public set active(val:boolean){
        this._active = val;
        this.status.next(val);
    }

    public start() : void {
        this._active = true;
    }

    public stop(): void {
        this._active = false;
    }
}