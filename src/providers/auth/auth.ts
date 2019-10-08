//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//import AuthProvider = firebase.auth.AuthProvider;


@Injectable()
export class AuthProvider {

  public user: firebase.User;

	
	constructor(public afAuth: AngularFireAuth) {

		afAuth.authState.subscribe(user => {
			this.user = user;
			//console.log("User object with the id  " + user.uid + "  assigned to the user");

		});
	}

	//This sign in function is called from login.ts, credentials consist of email and password.

	signInWithEmail(credentials) {
		
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			credentials.password);

	}

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
	}

	get authenticated(): boolean {
		return this.user !== null;
	}

	signOut(): Promise<void> {
		return this.afAuth.auth.signOut();
	}

}
