import { Component } from '@angular/core';
import { App, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppMinimize } from '@ionic-native/app-minimize';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, public app: App, statusBar: StatusBar, splashScreen: SplashScreen, private appMinimize: AppMinimize) {
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

  //   platform.registerBackButtonAction(() => {
  //     this.appMinimize.minimize();
  //  });

  }

 
 

  
}

