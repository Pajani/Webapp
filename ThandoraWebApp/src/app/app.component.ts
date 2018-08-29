import { Component } from '@angular/core';
import {AfService } from './provider/af.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThandoraAngular';
  constructor(public af : AfService)
  {
    
  }
}


//chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security 
///C:\Program Files (x86)\Google\Chrome\Application>chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
//ng build --prod --base-href="webapp"
