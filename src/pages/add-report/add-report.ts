import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import {iReport} from '../../interfaces/report';
import { ToastController } from 'ionic-angular';
import {DatePipe} from '@angular/common'
import { FireStoreProvider} from '../../providers/fire-store/fire-store';
import {TesterDetailsProvider} from '../../providers/tester-details/tester-details'

@IonicPage()
@Component({
  selector: 'page-add-report',
  templateUrl: 'add-report.html',
})
export class AddReportPage {

  public reportForm: FormGroup;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public formBuilder: FormBuilder, 
              public alertCtrl: AlertController, 
              public toastController: ToastController, 
              public datepipe: DatePipe, 
              public fireStore: FireStoreProvider, 
              public testerDetails: TesterDetailsProvider) {
  
    this.reportForm = formBuilder.group({

      //testerNo: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      testerNo: [`${testerDetails.testerId}`, Validators.compose([Validators.minLength(5), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      testDate: ['', Validators.required],
      reportNo: ['', Validators.required],
      stickerNo: ['', Validators.required],
      farmID: ['', Validators.required],
      county: ['', Validators.required],
      note: ['']
      
    });

  } 

  ionViewDidLoad() {

    this.testerDetails.getTesterID();
    
  }
 
  public addReport() {
    
    
    if(this.reportForm.valid){

      let date = new Date()
      
        let report:iReport = {

          testerNo: this.reportForm.value.testerNo,
          testDate: this.datepipe.transform(this.reportForm.value.testDate, 'dd-MM-yy'),
          reportNo: this.reportForm.value.reportNo,
          stickerNo: this.reportForm.value.stickerNo,
          farmID: this.reportForm.value.farmID,
          county: this.reportForm.value.county,
          dateAdded: this.datepipe.transform(date, 'dd-MM-yy HH:mm'),
          note: this.reportForm.value.note

        }

        if(this.reportForm.value.note){

          this.showConfirm(report);
          
        } else {

          this.showConfirmNoNote(report);

        }

        //this.testerDetails.testerId = this.reportForm.value.testerNo;
        this.testerDetails.addTesterID(this.reportForm.value.testerNo);
  

    }

  }

  showConfirm(report) {

    const confirm = this.alertCtrl.create({
      cssClass: 'confirm',
      title: 'Confirm details',
      message: `
        
          <strong>Tester No. : </strong>${report.testerNo}
          <br/>
          <strong>Test date:</strong>${report.testDate}
          <br/>
          <strong>Test report No.:</strong> ${report.reportNo}
          <br/>
          <strong>Sticker No.:</strong> ${report.stickerNo}
          <br/>
          <strong>Farm I.D:</strong> ${report.farmID}
          <br/>
          <strong>County:</strong> ${report.county}
          <br/>
          <strong>Note:</strong> ${report.note}
        
      `,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.fireStore.addReport(report);
            this.testerDetails.addItem(report);
            this.presentToast();
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    confirm.present();
  }

  showConfirmNoNote(report) {

    const confirm = this.alertCtrl.create({
      cssClass: 'confirm',
      title: 'Confirm details',
      message: `
        
          <strong>Tester No. : </strong>${report.testerNo}
          <br/>
          <strong>Test date:</strong>${report.testDate}
          <br/>
          <strong>Test report No.:</strong> ${report.reportNo}
          <br/>
          <strong>Sticker No.:</strong> ${report.stickerNo}
          <br/>
          <strong>Farm I.D:</strong> ${report.farmID}
          <br/>
          <strong>County:</strong> ${report.county}
        
      `,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.fireStore.addReport(report);
            this.testerDetails.addItem(report);
            this.presentToast();
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    confirm.present();
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Report sent',
      duration: 1000
    });
    toast.present();
  }

}
