import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs-compat';

@Injectable()
export class TechnicalRequirementsProvider {

  constructor(public http: HttpClient) {
    
  }

  getData():Observable<any>{

    let url = 'assets/requirements.json';
    //let url = 'file:///android_asset/www/assets/requirements.json'

    let data: Observable<any> = this.http.get(url);
  
    return data;
  
}

}
