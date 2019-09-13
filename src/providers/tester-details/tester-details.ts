import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import {iReport} from '../../interfaces/report'



const ID_KEY = "tester-id"

const ITEMS_KEY = "previous-reports";

@Injectable()
export class TesterDetailsProvider{

  // testerId: String = " ";
  reports: any = [];
  dataRetrieved: Boolean = false;

  constructor(public http: HttpClient, private storage:Storage) {

    this.getItems().then(reports => {

      this.reports = reports;
     
    })

  }


  getData(){

    this.getItems().then(reports => {

      //Retrieving reports from storage and assigning them to a variable
      this.reports = reports;
       
    })
  
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

     return this.storage.get(ITEMS_KEY);
  }

  filterItems(searchTerm) { 

    //Returning any elements which contain the search term

    return this.reports.filter((item) => {
      return ((item.testerNo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.reportNo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.stickerNo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.farmID.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.county.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.note.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.testDate.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)|| 
      (item.rating.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1));
      })
    }

}