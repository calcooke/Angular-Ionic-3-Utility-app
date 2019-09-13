import { Component} from '@angular/core';
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
  openNoteIndex: number;
  openNote:Boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, public testerDetails: TesterDetailsProvider) {

    this.searchControl = new FormControl();

  }

  ionViewWillLoad(){

    //Retrieve data from storage and store it in a variable in the tester details service.
    //This is for refreshing the data

    this.testerDetails.getData();
    
  }

  ionViewDidLoad() {


    this.testerDetails.getItems().then(reports => {

      //Dataloaded boolean to hide the searchbar in the HTML

      if(reports == null){console.log("No reports yet")}else{this.dataLoaded = true};

      this.setFilteredItems();

      this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        
          this.searching = false;
          
          this.setFilteredItems();
      

    });
  });

  //When coding functionality on the clear button use (ionClear)="function()"


}


  toggleSection(i){

    //Close all open reports first by settin their open values to false

    // this.previousReports.forEach(function (value){

    //   if(value.open == true){

    //       value.open = !value.open;

    //   }

    // })
    this.openNoteIndex = i;
    
    this.previousReports[i].open = !this.previousReports[i].open;
   
  }

  // Called whenever a user types

  onSearchInput(){
    
    
    this.previousReports.forEach(function (index) {

      //This sets all reports open value back to false when searching. Problems with the CSS arise otherwise

      if(index.open == true){
          index.open = false;
      };
  })

//   this.previousReports.forEach((item, index) => {
//     console.log(item); // 9, 2, 5
//     console.log(index); // 0, 1, 2
// });

    this.searching = true;
}

  setFilteredItems() {

    if(this.dataLoaded == true){

    this.previousReports = this.testerDetails.filterItems(this.searchTerm);

    }

  }

}
