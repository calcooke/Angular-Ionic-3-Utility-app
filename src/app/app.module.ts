import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AddReportPage} from '../pages/add-report/add-report';
import { DatePipe } from '@angular/common';
import {ParlourTypePage} from '../pages/parlour-type/parlour-type';
import { TechnicalRequirementsProvider } from '../providers/technical-requirements/technical-requirements';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import { FireStoreProvider } from '../providers/fire-store/fire-store';
import { IonicSelectableModule } from 'ionic-selectable';
import { BackgroundFetch} from '@ionic-native/background-fetch';
import { AppMinimize } from '@ionic-native/app-minimize';
import { TesterDetailsProvider } from '../providers/tester-details/tester-details';
import {IonicStorageModule} from '@ionic/storage'
import {PreviousReportsPage} from '../pages/previous-reports/previous-reports'
import {MenuComponent} from'../components/menu/menu'
import { ReactiveFormsModule } from "@angular/forms";
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';

//RELEASED VERSION 08/10/2019

var firebaseConfig = {
  apiKey: "AIzaSyCVf-mwGVCbwuGH6F8Vt30SPuGdX7y7Wsw",
  authDomain: "imqcs-database.firebaseapp.com",
  databaseURL: "https://imqcs-database.firebaseio.com",
  projectId: "imqcs-database",
  storageBucket: "",
  messagingSenderId: "361241937005",
  appId: "1:361241937005:web:074e2a663e329c2e866b64",
  measurementId: "G-VR4D5W3K3F"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddReportPage,
    ParlourTypePage,
    PreviousReportsPage,
    MenuComponent,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicSelectableModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp], 
  entryComponents: [
    MyApp,
    HomePage,
    AddReportPage,
    ParlourTypePage,
    PreviousReportsPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    TechnicalRequirementsProvider,
    FireStoreProvider,
    BackgroundFetch,
    AppMinimize,
    TesterDetailsProvider,
    AngularFireAuth,
    AuthProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
