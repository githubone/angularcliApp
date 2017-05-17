import { Injectable,OnInit } from '@angular/core';
import { Headers,Http, Request, 
    RequestOptions, RequestOptionsArgs,
    RequestMethod, ResponseContentType
} from '@angular/http';

@Injectable()
export class AssetService implements OnInit {
    constructor(private http: Http){

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

          return new Blob([res["_body"]], {type: res.headers.get("Content-Type")}); 
        })

    }
}

