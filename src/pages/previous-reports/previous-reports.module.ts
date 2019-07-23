import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousReportsPage } from './previous-reports';

@NgModule({
  declarations: [
    PreviousReportsPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousReportsPage),
  ],
})
export class PreviousReportsPageModule {}
