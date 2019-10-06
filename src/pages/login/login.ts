import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import {SignupPage} from '../signup/signup';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import {HomePage} from '../home/home';

import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	loginForm: FormGroup;
	loginError: string;
	

	constructor(
		private navCtrl: NavController,
		private auth: AuthProvider,
		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
		console.log ("loading login page");
  }
  

  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};

		//The then callback is cancelled out, the auth state is subscribed to and root pages are assigned in app.component.ts.

		// this.auth.signInWithEmail(credentials)
		// 	.then(
		// 		() => this.navCtrl.setRoot(HomePage),
		// 		error => this.loginError = error.message
    // 	);
    
    //Replced the then callback with a "catch" instead to display the error

		this.auth.signInWithEmail(credentials).catch(error => this.loginError = error.message);
			
			
  }
  
  signup(){
    this.navCtrl.push(SignupPage);
  }

}
