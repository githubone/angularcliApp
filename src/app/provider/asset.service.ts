import { Injectable,OnInit } from '@angular/core';
import { Headers,Http, Request, 
    RequestOptions, RequestOptionsArgs,
    RequestMethod, ResponseContentType
} from '@angular/http';
import {WindowRef} from './windowref';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable()
export class AssetService implements OnInit {
    constructor(private http: Http, 
    private sessionStorageService: SessionStorageService,
    private windowref: WindowRef
    ){

    }
    ngOnInit() {
        //this.getImage("https://mavestore.blob.core.windows.net/testcontainer/adeleatbbctn.jpg");
    
    }
    getImage(serviceUrl:string){
       
        let basicOptions: RequestOptionsArgs = {
            //url:serviceUrl,
            method: RequestMethod.Get,
            headers: new Headers({'Content-Type': 'image/jpg'}),
            responseType: ResponseContentType.Blob
        };
        let reqOptions = new RequestOptions(basicOptions);
        return this.http.get(serviceUrl,basicOptions)
        .map(res=> {
            let asset = this.getStoredAsset(serviceUrl);
            if(asset instanceof this.windowref.nativeWindow.Blob) {
                return asset;
            } else {
                var blob = new this.windowref.nativeWindow.Blob([res["_body"]], {type: res.headers.get("Content-Type")})
                this.storeAsset(serviceUrl,blob)
                return blob;
            }
           
        });
        

    }
    storeAsset(key:string, blob: any):void {
       this.sessionStorageService.store(key, JSON.stringify(blob));
    }
    getStoredAsset(key:string): any {
      return JSON.parse(this.sessionStorageService.retrieve(key));
      
    }
}

