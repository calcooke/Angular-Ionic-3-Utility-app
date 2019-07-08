import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParlourTypePage } from './parlour-type';


@NgModule({
  declarations: [
    ParlourTypePage,
  ],
  imports: [
    IonicPageModule.forChild(ParlourTypePage),
  ],
})
export class ParlourTypePageModule {}
