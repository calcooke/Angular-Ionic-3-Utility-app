import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TesterDetailsProvider} from '../../providers/tester-details/tester-details'
import {iReport} from '../../interfaces/report';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';





@IonicPage()
@Component({
  selector: 'page-previous-reports',
  templateUrl: 'previous-reports.html',
})



export class PreviousReportsPage {
  previousReports:iReport[] = [];
  searchTerm: string = '';
  public searchControl: FormControl;
  searching: any = false;
  dataLoaded:Boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public testerDetails: TesterDetailsProvider) {

    this.searchControl = new FormControl();

  }

  ionViewWillLoad(){


    console.log("ion view will load")
    this.testerDetails.getData();
    console.log("ion view will load finished")

  }

  ionViewDidLoad() {

    console.log("Ion view did load")

    this.testerDetails.getItems().then(reports => {

      
      console.log("Called get item in provider, got these reports back")
      console.log(reports);

      if(reports == null){console.log("No reports yet")}else{this.dataLoaded = true};

      this.setFilteredItems();

      this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        console.log("checking what search is");
        console.log(search);
          this.searching = false;
          this.setFilteredItems();
          this.testerDetails.sayHello();

    });
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

  onSearchInput(){
    console.log("Does search input work?");
    console.log(this.searchTerm);
    // if(this.searchTerm.length == 0){
    //   this.setFilteredItems();
    // }
    this.searching = true;
}

  setFilteredItems() {

    if(this.dataLoaded == true){
    console.log("PAssing this search term into the provider");
    console.log(this.searchTerm);
    this.previousReports = this.testerDetails.filterItems(this.searchTerm);
  }
  }

  


}
