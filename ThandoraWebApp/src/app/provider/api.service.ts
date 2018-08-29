import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import {IsearchResult} from './IsearchResult';
//import {HttpClient} from 'selenium-webdriver/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public _searchResultSource :   BehaviorSubject<IsearchResult[]>= new BehaviorSubject([]);

   searchList: Observable<IsearchResult[]>= this._searchResultSource.asObservable(); 

  constructor(private api: HttpClient) {

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
}

