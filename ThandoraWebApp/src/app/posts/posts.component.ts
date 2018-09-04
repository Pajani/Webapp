import { Component, OnInit } from '@angular/core';
import { ApiService } from '../provider/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  name = 'Angular 5';
  lat:any;
  lng:any;
  constructor(public api:ApiService){
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }
  ngOnInit() {
    this.api.getAllPosts().subscribe(data =>{

      this.api.pushPosts(data);
    } );
  
  }

  

}
