import { Component, OnInit } from '@angular/core';
import { IsearchResult } from '../provider/IsearchResult';
import { ApiService } from '../provider/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchResult:any
  constructor(private api:ApiService) {
   
    //console.log(this.searchResult);
   }

  ngOnInit() {

      this.api.searchList.subscribe(data => this.searchResult=data);    
        //console.log(data);
      
      console.log(this.searchResult);
    
  }

}
