import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {TechnicalRequirementsProvider} from '../../providers/technical-requirements/technical-requirements';


@IonicPage()
@Component({
  selector: 'page-parlour-type',
  templateUrl: 'parlour-type.html',
})
export class ParlourTypePage {

  parlourType: string;
  numberUnits: string;
  requirements: any;
  mb:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public techRequirements: TechnicalRequirementsProvider) {
    
    this.techRequirements.getData().subscribe(result => {

      this.requirements = result;

    })

  }

  ionViewDidLoad() {
  
  }

}
