import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
const routes: Routes = [

  {
    path:'',
    component:SigninComponent
  },


  {
    path:'search',
    component:HomeComponent
  },

  
  {
    path:'posts',
    component:PostsComponent
  },
  
  {
    path:'verify',
    component:VerifyMobileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security 
///C:\Program Files (x86)\Google\Chrome\Application>chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security


