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


}
