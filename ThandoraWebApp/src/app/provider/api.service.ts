import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import {IsearchResult,  OTPResponse, APIStatus} from './IsearchResult';
import { AfService } from './af.service';
//import {HttpClient} from 'selenium-webdriver/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public user:any;
  public _searchResultSource :   BehaviorSubject<IsearchResult[]>= new BehaviorSubject([]);

  public _OTPResponsesource :  BehaviorSubject<OTPResponse>;///= new BehaviorSubject<getOTPResponse>();
   searchList: Observable<IsearchResult[]>= this._searchResultSource.asObservable(); 

  constructor(public afs: AfService, private api: HttpClient) {

    this.afs.user.subscribe((auth)=>{ 
      
      //console.log(auth);

      if (auth==null)
      {
        this.user=auth;

      }
      else
      {
        this.user=auth;
      }
    });

    //this.headers.append('Access-Control-Allow-Origin','*');

    //this.headers.append('Access-Control-Allow-Origin','*');

   }

  pushResult(data)
  {
    this._searchResultSource.next(data);
  } 

  svcProviderSearch(txtWhat:string,txtWhere:string):Observable<IsearchResult[]>
  { 
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST"
        }
      )
    };    

    const body = JSON.stringify({
      'userID': 100089,
      'userType': "s",
      'what': txtWhat,
      'where': txtWhere,
      'lat': 0.0,
      'lng': 0.0,
      'latlgstatus': "0,0"

    });

     return this.api.post <IsearchResult[]>('https://joinwithme.in/ThandoraAPI/api/ServicesSearch_v2',body,httpOptions)
     //.subscribe(data =>{
     // console.log(data); 
      //this._searchResultSource.next(data)});

     //data =>{this._searchResultSource=Observable<IsearchResult[]> data}
  }

  getOTP(txtMobile:number):Observable<OTPResponse>
  {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST"
        }
      )
    };    

    const body = JSON.stringify({

      "deviceID": "",
      "purpose": "CREATE",
      "AuthorizeKey": 3,
      "verified": "",
      "phoneNo":txtMobile


    });

    return this.api.post <OTPResponse>('https://joinwithme.in/ThandoraAPI/api/Login',body,httpOptions)

  }

  
  WebAppverify(txtMobile:number):Observable<APIStatus>
  {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST"
        }
      )
    };    

    const body = JSON.stringify({

      "GoogleUserid": this.user.uid,
      "token": "",
      "phoneNo": txtMobile,
      "userName": "",
      "userId": 5
    });

    return this.api.post <APIStatus>('https://joinwithme.in/ThandoraAPI/api/WebAppAuth',body,httpOptions)

  }

  googleVerify(uid:string):Observable<APIStatus>
  {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST"
        }
      )
    };    

    const body = JSON.stringify({

      "GoogleUserid": uid,
      "token": "",
      "phoneNo": "",
      "userName": "",
      "userId": 5
    });

    return this.api.post <APIStatus>('https://joinwithme.in/ThandoraAPI/api/WebAppAuth',body,httpOptions)

  }


  verifyOTP(txtMobile:number, txtOtp:number,generatedOtp:number):Observable<APIStatus>
  {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST"
        }
      )
    };    

    const body = JSON.stringify({

      "enteredOTP": txtOtp,
      "generatedOTP": generatedOtp,
      "phoneNo":txtMobile
    });

    return this.api.post <APIStatus>('https://joinwithme.in/ThandoraAPI/api/OTPVerify',body,httpOptions)

  }


}

