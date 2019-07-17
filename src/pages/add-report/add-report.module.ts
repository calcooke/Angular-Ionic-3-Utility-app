import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule, IonicModule} from 'ionic-angular';
import { AddReportPage } from './add-report';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  declarations: [
    AddReportPage,
  ],
  imports: [
    IonicPageModule.forChild(AddReportPage),
    IonicSelectableModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddReportPageModule {}
