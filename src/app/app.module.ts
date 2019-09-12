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
import {ReportListComponent} from '../components/report-list/report-list'
import { ReactiveFormsModule } from "@angular/forms";






// "rxjs": "5.5.2",

// shoddy Production DATABASE

var firebaseConfig = {
  apiKey: "AIzaSyCQRcFdHZhIYHUU_6nEytQoTVeSS5hFGLM",
  authDomain: "imqcs-9f384.firebaseapp.com",
  databaseURL: "https://imqcs-9f384.firebaseio.com",
  projectId: "imqcs-9f384",
  storageBucket: "imqcs-9f384.appspot.com",
  messagingSenderId: "1047935680788",
  appId: "1:1047935680788:web:17b7d85046645760"
}; 

//IMQCS BETA DATABASE

// var firebaseConfig = {
//   apiKey: "AIzaSyBAZZ-iV3y5ErYYjVhLs3KI7MBTFHna0Pw",
//   authDomain: "imqcsbeta.firebaseapp.com",
//   databaseURL: "https://imqcsbeta.firebaseio.com",
//   projectId: "imqcsbeta",
//   storageBucket: "",
//   messagingSenderId: "29514171062",
//   appId: "1:29514171062:web:186756fc6042368537dc17"
// };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddReportPage,
    ParlourTypePage,
    PreviousReportsPage,
    MenuComponent,
    ReportListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicSelectableModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp], 
  entryComponents: [
    MyApp,
    HomePage,
    AddReportPage,
    ParlourTypePage,
    PreviousReportsPage
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
