import { Component} from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {TesterDetailsProvider} from '../../providers/tester-details/tester-details'
import {iReport} from '../../interfaces/report';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'report-list',
  templateUrl: 'report-list.html'
})
export class ReportListComponent{

  previousReports:iReport[] = [];
  searchTerm: string = '';
  public searchControl: FormControl;
  searching: any = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public testerDetails: TesterDetailsProvider) {

    this.searchControl = new FormControl();

  }

  ionViewDidLoad() {

    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

        this.searching = false;
        this.setFilteredItems();

  });


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

  }

  setFilteredItems() {
    this.previousReports = this.testerDetails.filterItems(this.searchTerm);
    
  }

  


}