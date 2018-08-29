import { Component, OnInit } from '@angular/core';
import {ApiService} from '../provider/api.service';
import {IsearchResult} from '../provider/IsearchResult';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  txtWhat: string;
  txtWhere: string;
  result: Observable< IsearchResult[]>;
  constructor( public api: ApiService ) { }

  ngOnInit() {
  }

  onSearch()
  {
    console.log(this.txtWhat);
    console.log(this.txtWhere);
    this.api.svcProviderSearch(this.txtWhat,this.txtWhere)
    .subscribe(data =>
            {
                //this.result= data; 

                this.api.pushResult(data); //console.log(this.result)
                //this.result.pipe(;
                //this.api._searchResultSource.pipe(data);
    
            });
    
    this.result=this.api.searchList
    console.log(this.result);
  }
}
