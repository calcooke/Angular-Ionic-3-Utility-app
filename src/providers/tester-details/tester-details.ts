import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TesterDetailsProvider {

  testerId:any = "";

  constructor(public http: HttpClient) {
    console.log('Hello TesterDetailsProvider Provider');
  }

}
