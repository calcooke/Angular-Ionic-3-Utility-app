import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';


@Injectable()
export class FireStoreProvider {

  constructor(public http: HttpClient, public fireStoreDb:AngularFirestore) {
    
  }

  addReport(report){

    this.fireStoreDb.collection("reports").add(report);
    
  }

}
