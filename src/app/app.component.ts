import { Component } from '@angular/core';
import { App, Platform, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppMinimize } from '@ionic-native/app-minimize';
import { BackgroundFetch, BackgroundFetchConfig } from '@ionic-native/background-fetch';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LoginPage;
  private platform;
  private statusBar;
  private splashScreen;

  constructor(platform: Platform, public app: App, private auth: AuthProvider, private ionicApp: IonicApp, private backgroundFetch: BackgroundFetch, statusBar: StatusBar, splashScreen: SplashScreen, private appMinimize: AppMinimize) {
    
    this.platform = platform;
    this.statusBar = statusBar;
    this.splashScreen = splashScreen;
		this.initializeApp();

  }


  initializeApp(){

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      // splashScreen.hide();

      this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            console.log("User already exists in auth service, setting home page as root in app.component")
            this.rootPage = HomePage;
          } else {
            console.log("User does not in auth service, setting login as root in app.component")
            this.rootPage = LoginPage;
          }
        },
        () => {
          console.log("Then, setlogin as root in app.component")
          this.rootPage = LoginPage;
        }
      );

      //Registe the back button on android to close modals etc if theyre open instead of closing the app

      this.platform.registerBackButtonAction(() => {

        let nav = this.app.getActiveNavs()[0];
        let activeNav = nav.getActive();
        let activePortal = this.ionicApp._loadingPortal.getActive() ||
          this.ionicApp._modalPortal.getActive() ||
          this.ionicApp._toastPortal.getActive() ||
          this.ionicApp._overlayPortal.getActive();

        if (activePortal) {
          activePortal.dismiss();
          return;
        }

        //If the name of the current page is homepage, then minimize the app when pressing the back button.
        // Oterwise, if the page can move backwards in the stack, go to the previous page

        if (activeNav.name === "HomePage") {
          this.appMinimize.minimize();
        } else {

          if (nav.canGoBack()) {
            nav.pop();
          }

        }

      });

      const config: BackgroundFetchConfig = {
        stopOnTerminate: false, // Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
      };
  
      this.backgroundFetch.configure(config)
        .then(() => {
          console.log('Background Fetch initialized');
  
          //this.fetched = true;
  
          this.backgroundFetch.finish();
  
        })
        .catch(e => console.log('Error initializing background fetch', e));
  
        this.backgroundFetch.start();
  
        this.backgroundFetch.stop();


    });

  }


}

