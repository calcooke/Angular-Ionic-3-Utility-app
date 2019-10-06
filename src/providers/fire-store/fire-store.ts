import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';



@Injectable()
export class FireStoreProvider {

  constructor(public http: HttpClient, public fireStoreDb:AngularFirestore) {
    
  }

  // addReport(report){

  //   this.fireStoreDb.collection("reports").add(report);
    
    
  // }

  addReportOnWake(){
    
  }


  addReport(report){
    
    let docId:string = report.testerNo;
    
    this.fireStoreDb.collection("newLayout").doc(report.testerNo). snapshotChanges().subscribe(doc => {
       
      if (!doc.payload.exists)
      {

        this.fireStoreDb.collection("newLayout").doc(docId).set({});
      }
      else{
        this.fireStoreDb.collection("newLayout").doc(report.testerNo).update({

          reports: firebase.firestore.FieldValue.arrayUnion(report)
          
    
        });
      }

    });
    
  }

}
