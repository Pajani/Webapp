import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'
import { AfService } from '../provider/af.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

 

export class SigninComponent implements OnInit {

  public user:any;
  public error:any;
  userName:string;
  public isSignedIn:boolean ;
  isSignedOut: boolean= true;
  public a:number =4;
  public b:number=5
  
 public issubscribed : boolean ;
  isUnsubscribed :string = 'true';

  constructor(public afs: AfService , public rt: Router ) {
    //this.isSignedIn = this.afs.isLoggedin;

    this.afs.user.subscribe((auth)=>{ 
      
      //console.log(auth);

      if (auth==null)
      {
        
        this.user=auth;
        this.isSignedIn=false;
      }
      else
      {this.isSignedIn=true;
      
        this.afs.fdatabase.ref('/tokens').orderByChild('uid').equalTo(auth.uid).once('value')
        .then((snapshot) => {
            console.log(snapshot.val());
            if(snapshot.val())
            { this.issubscribed=true}
            else
            { this.issubscribed=false}
    
        })
      }
    })

   
        //this.user = af.authState;
        //console.log(this.user);
        //this.af.auth.onAuthStateChanged(this.handleAuthStateChanged);
   }
  ngOnInit() {
   

  
  }

  buttonStatus()
  {

    //this.afAuth.isLoggedIn();

    //this.isSignedOut = (this.isSignedIn==true)?false:true;
    
  }
  login()
  {
    //const provider = new firebase.auth.GoogleAuthProvider();
    this.afs.loginWithGoogle();
    //this.afs.auth.signInWithPopup(provider).then((auth)=> {this.af.auth.onAuthStateChanged(this.handleAuthStateChanged);})
    //.catch((err)=>{this.error=err});
   
   
    //this.afAuth.loginWithGoogle();
  }

  handleAuthStateChanged(user)
  {
    if(user)
    {console.log(user)
      this.isSignedIn=true;
    }
    else
    {console.log('no user logged')
      this.isSignedIn=false;
    }
    //this.user = user;
  }

  logout()
  {
    this.afs.logout();
   
  }

  notifyme()
  {
    
    this.afs.notifyme();
    this.rt.navigateByUrl('');
  }

  unsubscribe()
  {
    this.afs.unsubscribe();
    this.rt.navigateByUrl('');

  }


  verifyMobile()
  {
    this.rt.navigateByUrl('verify')
  }
  
  
}
