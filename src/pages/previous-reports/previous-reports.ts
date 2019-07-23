import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TesterDetailsProvider} from '../../providers/tester-details/tester-details'
import {iReport} from '../../interfaces/report';



@IonicPage()
@Component({
  selector: 'page-previous-reports',
  templateUrl: 'previous-reports.html',
})


export class PreviousReportsPage {

  previousReports:iReport[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public testerDetails: TesterDetailsProvider) {
  }

  ionViewDidLoad() {

    this.testerDetails.getItems().then(reports => {

      this.previousReports = reports

    })

  }

}
