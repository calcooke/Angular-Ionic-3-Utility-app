import { Component, OnInit} from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {TesterDetailsProvider} from '../../providers/tester-details/tester-details'
import {iReport} from '../../interfaces/report';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import {Events} from 'ionic-angular';
import { Observable } from 'rxjs-compat/Observable';
import { of } from 'rxjs/internal/observable/of';


/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'report-list',
  templateUrl: 'report-list.html'
})
export class ReportListComponent implements OnInit{

  previousReports:iReport[] = [];
  searchTerm: string = '';
  public searchControl: FormControl;
  searching: any = false;
  dataAdded: Boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events, public testerDetails: TesterDetailsProvider) {

    this.searchControl = new FormControl();
    // if(testerDetails.dataSaved = true){

    //   this.dataAdded = true;

    // }
    

    // this.events.subscribe('data:added', (notice)=>{
      
    //   console.log("recieved data added event");
    //   this.dataAdded = true;y
    //   console.log("Data added boolean set to true");
      
      
    // });

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

      this.searching = false;
      console.log("Value changes triggered")
      this.setFilteredItems();

  });


  }

  ngOnInit() {

      console.log("init called")
      this.setFilteredItems();
    // this.testerDetails.getObservableReports().subscribe(reports => {

    //   this.previousReports = reports;
    //   console.log("Sunbsriction has come back and assigned to array")
    //   console.log(this.previousReports);
      
    // })

    // this.testerDetails.getItems().then(reports => {

    //   console.log("And retrieving this data");
    //   console.log(reports);

    //   this.previousReports = reports;
    //   // this.events.publish('data:added');
    //   console.log("Reports are retrieved from storage in report list");
    //   console.log(this.previousReports);
      
      
        
    // });


  }

  //   this.setFilteredItems("");

  //   this.searchControl.valueChanges
  //     .pipe(debounceTime(700))
  //     .subscribe(search => {
  //       this.setFilteredItems(search);
  //     });

  // }

  ionViewDidLoad() {

    

    // if(this.dataAdded){
    console.log("ion did load")
    this.setFilteredItems();
  

    // this.events.subscribe('data:added', (notice)=>{
      
    //   console.log("recieved event");
    //   this.dataAdded = true;
    //   console.log(this.dataAdded);
      
    // });

  

    }

  onSearchInput(){
    this.searching = true;
  }


  toggleSection(i){

    //Close all open reports first by settin their open values to false

    // this.previousReports.forEach(function (value){

    //   if(value.open == true){

    //       value.open = !value.open;

    //   }

    // })

    this.previousReports[i].open = !this.previousReports[i].open;
   
  }

  resetSearch(){

    console.log("cleared");
    this.searchTerm = '';
    //this.setFilteredItems();

  }

  checkData(){

    this.testerDetails.getObservableReports().subscribe(reports => {

      if(reports.length > 0){
        this.dataAdded = true;
      } else {
        this.dataAdded = false;
      }
        
      })

  }

  setFilteredItems(){

    console.log("Before code runs");
    console.log(this.testerDetails.reports);

    if(this.testerDetails.reports != null){


    this.previousReports = this.testerDetails.filterItems(this.searchTerm);

    console.log(this.previousReports);

    }

  //   let test = this.previousReports.filter((item) => {
  //     return ((item.testerNo.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  // (item.reportNo.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  // (item.stickerNo.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  // (item.farmID.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  // (item.county.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  // (item.note.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  // (item.testDate.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1));
  //   })

    //console.log(test);
    //this.previousReports = test;
    // let marvelHeroes =  this.previousReports.filter(function(hero) {
    //   return this.previousReports == event.target.value;

    // const val = event.target.value;
    // if (val && val.trim() != '') {
    //   this.previousReports = this.previousReports.filter((item: iReport) => {
    //     return (item.reportNo.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }

    // this.items = this.previousReports.filterItems(this.searchTerm);
    // this.items.sort();
     // this.previousReports.filter = this.searchTerm.trim().toLowerCase();
    //  return this.previousReports.filter((item) => {
    //   return item.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    // });
    // let items = this.filterItems(this.searchTerm);
    // items.sort();
  
  }

  // filterItems(searchTerm){

  //     return this.previousReports.filter((item) => {
  //       return item.indexOf(searchTerm.toLowerCase()) > -1;
  //     });

  // }

  


}
