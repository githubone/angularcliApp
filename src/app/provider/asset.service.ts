import { Injectable,OnInit } from '@angular/core';
import { Headers,Http, Request, 
    RequestOptions, RequestOptionsArgs,
    RequestMethod, ResponseContentType
} from '@angular/http';

import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable()
export class AssetService implements OnInit {
    constructor(private http: Http, private sessionStorageService: SessionStorageService){

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
            let asset = this.getAsset(serviceUrl);
            if(asset instanceof Blob) {
                return asset;
            } else {
                var blob = new Blob([res["_body"]], {type: res.headers.get("Content-Type")})
                this.storeAsset(serviceUrl,blob)
                return blob;
            }
           
        });
        

    }
    storeAsset(key:string, blob: Blob):void {
       this.sessionStorageService.store(key, JSON.stringify(blob));
    }
    getAsset(key:string): Blob {
       return JSON.parse(this.sessionStorageService.retrieve(key));
    }
}

