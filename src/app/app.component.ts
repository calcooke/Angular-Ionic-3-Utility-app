import { Component } from '@angular/core';
import { App, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppMinimize } from '@ionic-native/app-minimize';
import { BackgroundFetch, BackgroundFetchConfig } from '@ionic-native/background-fetch';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;
  fetched:boolean = false;

  constructor(platform: Platform, public app: App, private backgroundFetch: BackgroundFetch, statusBar: StatusBar, splashScreen: SplashScreen, private appMinimize: AppMinimize) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // splashScreen.hide();

      platform.registerBackButtonAction(() => {

        let nav = app.getActiveNavs()[0];
        let activeNav = nav.getActive();

        if (activeNav.name === "HomePage"){
          this.appMinimize.minimize();
        } else{

          if(nav.canGoBack()){
            nav.pop();
          }

        }

      });


    });

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

 
 

  
}

