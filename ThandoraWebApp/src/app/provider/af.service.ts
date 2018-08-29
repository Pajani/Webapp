import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import { promise } from 'protractor';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


//import * as firebasemsg from '@firebase/messaging';

//import { FirebaseApp } from '../../../node_modules/angularfire2';


@Injectable({
  providedIn: 'root'
})
export class AfService {
  public user:Observable<firebase.User>;
  public isLoggedin:boolean;
  msgtoken:any;
  authtoken:any;
  public isSignedon:boolean;
  //auth:any;
  messaging = firebase.messaging();
  fdatabase = firebase.database();


  constructor(private afauth:AngularFireAuth) {
    this.user = afauth.authState;
   }

   /*isLoggedIn()
   {
    console.log('service logged in') ;
    
    this.afauth.auth.onAuthStateChanged(this.handleStatechanged)
    
    this.afauth.auth.onAuthStateChanged(auth =>{
     auth.getIdToken(true) 
     .then((token)=>{this.authtoken=token;this.isSignedon=true;console.log('my testmessage: '+this.authtoken)})
       .catch(()=>console.log('user not logged in'))
       
    });
}

   getcurrentuser()
   {return new Observable<boolean>(() => {
      
      if (this.a<this.b) 
      { (  true);
      }
      else
      { (false);}
   })
  }

    handleStatechanged(user) {
      
     if(user)
     {this.isSignedon=true;
      console.log('handle state changed' + user.uid)
    }
    else
    {this.isSignedon=false}
   }
*/
   /*isLoggedIn( )  {
     return this.afauth.auth.onAuthStateChanged(auth => {
      // Now use value 
      if (auth) {
        return true;
        // logged in
        //console.log('this is their UID: ' + auth.uid);
        //console.log('Routing to items');
       // this.router.navigate(['/items']);
      } else {
        // logged out
        return false;
        //console.log('User logged out');
      }
    });
  }*/
  
/*
   firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
*/

   loginWithGoogle()
   {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afauth.auth.signInWithPopup(provider);
   
   }

   

   logout()
   {
     this.afauth.auth.signOut();
   }


   /*********NOTIFY ME ***** */
   notifyme()
   {
     this.messaging.requestPermission()
     .then(()=>this.messaging.getToken()).then(token =>this.msgtoken=token).then(()=>this.fdatabase.ref('/tokens').push(
       {
         token:this.msgtoken,
         uid:firebase.auth().currentUser.uid
       }
     ))
     .catch(()=>console.log("Permission denied"));    
     
   }


/**** UNSUBCRIBE*********************** */
  unsubscribe()
  {
    this.messaging.getToken().then((token)=>this.msgtoken=token)
    .then(() => this.messaging.deleteToken(this.msgtoken))
    .then(() => this.fdatabase.ref('/tokens').orderByChild('uid').equalTo(firebase.auth().currentUser.uid).once('value')).then((snapshot) =>
    {
      console.log(snapshot.val());
      const key  = Object.keys(snapshot.val())[0];
      return this.fdatabase.ref('/tokens').child(key).remove();

    })
    .catch(()=>console.log("unsubscribed "));    

  }
  /**** UNSUBCRIBE*********************** */
   
}
