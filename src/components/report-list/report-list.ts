import { Component, OnInit} from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {TesterDetailsProvider} from '../../providers/tester-details/tester-details'
import {iReport} from '../../interfaces/report';

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
export class ReportListComponent implements OnInit {

  previousReports:iReport[] = [];
  searchTerm: string = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, public testerDetails: TesterDetailsProvider) {

  }

  ngOnInit() {

    this.testerDetails.getItems().then(reports => {

      this.previousReports = reports;
      
    })

  }

  // ionViewDidLoad() {


  // }

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

  }

  setFilteredItems(event){

    console.log(event.target.value);

    let test = this.previousReports.filter((item) => {
      return ((item.testerNo.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  (item.reportNo.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  (item.stickerNo.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  (item.farmID.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  (item.county.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  (item.note.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) || 
  (item.testDate.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1));
    })

    console.log(test);
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
