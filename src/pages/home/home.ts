import { Component } from '@angular/core';
import { NavController,NavParams  } from 'ionic-angular';
import {AddReportPage} from '../add-report/add-report';
import {ParlourTypePage} from '../parlour-type/parlour-type';
import {FireStoreProvider} from '../../providers/fire-store/fire-store';
import { BackgroundFetch, BackgroundFetchConfig } from '@ionic-native/background-fetch';
import {PreviousReportsPage} from '../previous-reports/previous-reports';
import {TesterDetailsProvider} from '../../providers/tester-details/tester-details';
import {AuthProvider} from '../../providers/auth/auth';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public requirements:any;
  fetched:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: FireStoreProvider, public testerDetails: TesterDetailsProvider, private backgroundFetch: BackgroundFetch, private auth:AuthProvider) {

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

  ionViewDidLoad() {
    console.log("I'm alive!");
  }
  ionViewWillLeave() {
    console.log("About to leave and home page")
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

  logout() {
    console.log("Calling sign out");
    this.auth.signOut();
    //console.log("Setting root to login page after signing out");
    //this.navCtrl.setRoot(LoginPage);
  }

}
