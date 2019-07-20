import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddReportPage} from '../add-report/add-report';
import {ParlourTypePage} from '../parlour-type/parlour-type';
import {FireStoreProvider} from '../../providers/fire-store/fire-store';
import { BackgroundFetch, BackgroundFetchConfig } from '@ionic-native/background-fetch';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public requirements:any;
  fetched:boolean = false;

  constructor(public navCtrl: NavController, public fireStore: FireStoreProvider, private backgroundFetch: BackgroundFetch) {

    const config: BackgroundFetchConfig = {
      stopOnTerminate: false, // Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
    };
  
    backgroundFetch.configure(config)
       .then(() => {
           console.log('Background Fetch initialized');

           this.fetched = true;
  
           this.backgroundFetch.finish();
  
       })
       .catch(e => console.log('Error initializing background fetch', e));
  
    backgroundFetch.start();
  
    backgroundFetch.stop();

  }

  public goToAddReport(){

    this.navCtrl.push(AddReportPage);

  }

  public goToParlourType(){

    this.navCtrl.push(ParlourTypePage);

  }

}
