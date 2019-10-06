import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';
import {AuthProvider} from '../auth/auth';



@Injectable()
export class FireStoreProvider {

  constructor(public http: HttpClient, public fireStoreDb:AngularFirestore, private auth:AuthProvider) {
    
  }

  // addReport(report){

  //   this.fireStoreDb.collection("reports").add(report);
    
    
  // }

  addReportOnWake(){
    
  }


  addReport(report){
    
    // Previouslt seting this to be report.testerNo to set each document as the tester ID
    let docId:string = this.auth.user.uid;
    
    this.fireStoreDb.collection("newLayout").doc(docId).snapshotChanges().subscribe(doc => {
       
      if (!doc.payload.exists)
      {

        this.fireStoreDb.collection("newLayout").doc(docId).set({});
      }
      else{
        this.fireStoreDb.collection("newLayout").doc(docId).update({

          reports: firebase.firestore.FieldValue.arrayUnion(report)
          
    
        });
      }

    });
    
  }

}
