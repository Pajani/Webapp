import { Component, OnInit } from '@angular/core';
import { ApiService } from '../provider/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-mobile',
  templateUrl: './verify-mobile.component.html',
  styleUrls: ['./verify-mobile.component.scss']
})
export class VerifyMobileComponent implements OnInit {

  public txtMobile:number
  public otpclicked:boolean=false;

  constructor(public api:ApiService,public rt:Router) { }

  ngOnInit() {
  }

  onVerify()
  {

  }
  ongetOTP()
  {
    
    this.otpclicked=true;
    this.rt.navigateByUrl('verify')

  }
}
