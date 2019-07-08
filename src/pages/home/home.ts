import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddReportPage} from '../add-report/add-report';
import {ParlourTypePage} from '../parlour-type/parlour-type';
import { FireStoreProvider} from '../../providers/fire-store/fire-store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public requirements:any;

  constructor(public navCtrl: NavController, public fireStore: FireStoreProvider) {

  //   this.techRequirements.getData().subscribe(result => {
  //     this.requirements = result;
  //     console.log(result);
  // })

  }

  public goToAddReport(){

    this.navCtrl.push(AddReportPage);

  }

  public goToParlourType(){

    this.navCtrl.push(ParlourTypePage);

  }

}
