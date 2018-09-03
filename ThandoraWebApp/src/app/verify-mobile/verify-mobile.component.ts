import { Component, OnInit } from '@angular/core';
import { ApiService } from '../provider/api.service';
import { Router } from '@angular/router';
import { OTPResponse } from '../provider/IsearchResult';
import { AfService } from '../provider/af.service';

@Component({
  selector: 'app-verify-mobile',
  templateUrl: './verify-mobile.component.html',
  styleUrls: ['./verify-mobile.component.scss']
})
export class VerifyMobileComponent implements OnInit {

  public user:any;
  public txtMobile:number;
  public txtOtp:number;
  public otpclicked:boolean=false;
  public enableverify:boolean=false;
  public otpResponse:OTPResponse;

  constructor(public afs:AfService ,public api:ApiService,public rt:Router) {

    this.afs.user.subscribe((auth)=>{ 
      
      //console.log(auth);

      if (auth==null)
      {

      }
      else
      {
       
        this.user=auth;
        this.api.googleVerify((auth.uid));
      }
    });

   }

  ngOnInit() {
  }


  ongetOTP()
  {
    this.api.getOTP(this.txtMobile).subscribe(data =>{
      this.otpResponse=data;
      if(data)
      {

      console.log(data)
      this.enableverify=true;    
      this.api.WebAppverify(this.txtMobile).subscribe(apidata => {
        console.log(apidata);
      });

    }
       else
       {console.log("no data received")}
      }

    );
    console.log(this.txtMobile);
    //this.otpclicked=true;
    

  }

  onVerifyOTP()
  {
      if(this.txtOtp == this.otpResponse.OTP)
      {

        this.api.verifyOTP(this.txtMobile,this.otpResponse.OTP,this.txtOtp).subscribe(apidata => {
          console.log(apidata);
        });
        console.log("otp verified")
        //make server call verify otp 

      }
      else
      {
        console.log("otp wrong")
      }


  }

}
