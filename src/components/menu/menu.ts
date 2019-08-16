import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddReportPage} from '../../pages/add-report/add-report'
import {ParlourTypePage} from '../../pages/parlour-type/parlour-type';
import {PreviousReportsPage} from '../../pages/previous-reports/previous-reports';
/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    
  }

  public goToAddReport(){

    this.navCtrl.push(AddReportPage);

  }

  public goToParlourType(){

    this.navCtrl.push(ParlourTypePage);

  }

  public goToPreviousReports(){

    this.navCtrl.push(PreviousReportsPage);

  }

}
