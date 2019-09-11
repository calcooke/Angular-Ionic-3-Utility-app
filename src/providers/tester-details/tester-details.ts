import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {iReport} from '../../interfaces/report'
import {Events} from 'ionic-angular';
import { Observable } from 'rxjs-compat/Observable';
import { of } from 'rxjs/internal/observable/of';



const ID_KEY = "tester-id"

const ITEMS_KEY = "previous-reports";



@Injectable()
export class TesterDetailsProvider {

  // testerId: String = " ";
  reports: any = [];
  dataSaved: Boolean = false;

  constructor(public http: HttpClient, private storage:Storage, public events:Events) {

    this.getItems().then(reports => {


      this.reports = reports;
      this.dataSaved = true;
      console.log("Reports are retrieved from storage in tester details");
        
    })
    

  }

  getObservableReports(): Observable<any> {

    console.log("Get observable reports called")

    // this.getItems().then(reports => {


    //   this.reports = reports;
    //   // this.events.publish('data:added');
    //   console.log("Reports are retrieved from storage in tester details");
        
    // });
    
    
    return of(this.reports);


    // console.log("Returning observable reports");
    // if(this.dataSaved){
    // return of(this.reports);
    // }
   // return this.reports;
    
    }

  addTesterID(testerId:String){

    this.storage.set(ID_KEY, testerId)


  }

  getTesterID(){

    return this.storage.get(ID_KEY);

    // this.storage.get(ID_KEY).then((val) =>{

    //   this.testerId = val;

    // })

  }

  addItem(report:iReport): Promise<any>{

    report.open = false;
    this.dataSaved = true;
    this.events.publish('data:added');
    console.log("Event emitting data added is called");

    return this.storage.get(ITEMS_KEY).then((reports:iReport[]) => {

      if(reports){

        
        reports.push(report);

        return this.storage.set(ITEMS_KEY, reports)

      } else {

        return this.storage.set(ITEMS_KEY, [report])
      }

    });

    

  }

  getItems(): Promise<iReport[]>{

  console.log("Get items after being called")
   return this.storage.get(ITEMS_KEY);

  }

  
  filterItems(searchTerm){

    console.log("Called filter items with the search term ##" + searchTerm + "###")

    return this.reports.filter((item) => {
      return ((item.testerNo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.reportNo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.stickerNo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.farmID.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.county.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.note.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.testDate.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1));
      })
    }

}
