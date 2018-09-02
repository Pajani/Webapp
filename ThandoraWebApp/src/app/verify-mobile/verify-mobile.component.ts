import { Component, OnInit } from '@angular/core';
import { ApiService } from '../provider/api.service';
import { Router } from '@angular/router';
import { OTPResponse } from '../provider/IsearchResult';

@Component({
  selector: 'app-verify-mobile',
  templateUrl: './verify-mobile.component.html',
  styleUrls: ['./verify-mobile.component.scss']
})
export class VerifyMobileComponent implements OnInit {

  public txtMobile:number;
  public txtOtp:number;
  public otpclicked:boolean=false;
  public enableverify:boolean=false;
  public otpResponse:OTPResponse;

  constructor(public api:ApiService,public rt:Router) { }

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

        console.log("otp verified")
        //make server call verify otp 

      }
      else
      {
        console.log("otp wrong")
      }


  }

}
