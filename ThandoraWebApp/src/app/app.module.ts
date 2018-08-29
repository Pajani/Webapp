import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{environment} from '../environments/environment';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SigninComponent } from './signin/signin.component';
import { SvcProvidersComponent } from './svc-providers/svc-providers.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
import {AfService} from './provider/af.service';
import {ApiService} from './provider/api.service'
import {AngularFireModule} from 'angularfire2'
import {AngularFireAuthModule} from 'angularfire2/auth'
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    PostsComponent,
    SearchResultComponent,
    SidebarComponent,
    SigninComponent,
    SvcProvidersComponent,
    VerifyMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [AfService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
