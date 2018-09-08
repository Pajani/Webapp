import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{environment} from '../environments/environment';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';


import { SigninComponent } from './signin/signin.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
import {AfService} from './provider/af.service';
import {ApiService} from './provider/api.service'
import {AngularFireModule} from 'angularfire2'
import {AngularFireAuthModule} from 'angularfire2/auth'
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    SigninComponent,
    VerifyMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZ6qq9OJbIKvYraCIOOGqNyp_19yBXm2o'
    }),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [AfService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }


//error 405  throw while calling web api, http ok status not returned in api
//chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security 
///C:\Program Files (x86)\Google\Chrome\Application>chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
//https://www.telerik.com/forums/options-405-not-allowed-even-with-chrome-app-extension
//ng build --prod --base-href="webapp"
//https://github.com/Pajani/Webapp
//Iniyan@4104
//npm install @agm/core --save
//npm install firebase angularfire2 --save


