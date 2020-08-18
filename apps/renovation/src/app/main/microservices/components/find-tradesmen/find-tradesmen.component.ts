import { Component, OnInit } from '@angular/core';
import { TradesmanModel } from '../../../model/tradesman.model';
import { TradesmanService } from '../../services/tradesman.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tvs-find-tradesmen',
  templateUrl: './find-tradesmen.component.html',
  styleUrls: ['./find-tradesmen.component.scss']
})
export class FindTradesmenComponent implements OnInit {

  tradesman: [];
  isDisplay: boolean;
  selectedItemCategoryId;
  postcode = '';
  constructor(private tradesmanService: TradesmanService,
    private router: Router) {
    // this.tradesman = any[];
  }


  keyword = 'itemCategoryName';
  data = [];

  Name = '';
  selectEvent(item) {
    
    this.selectedItemCategoryId = item.itemCategoryId;
    console.log(this.postcode  + ', ' + this.selectedItemCategoryId);
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

  ngOnInit(): void {
    this.isDisplay = false;
    this.getTradesmanList();
    this.getItemcategoryList();
  }

  getTradesmanList(): void{
    this.tradesmanService.getTradesmanList()
    .subscribe(
      response => {
        this.tradesman =  response;
        // console.log(this.tradesman);
      },
      error => {
        console.log(error);
      }
    );
    
  }

  getItemcategoryList(): void{
    this.tradesmanService.getItemcategoryList()
    .subscribe(
      response => {
        this.data =  response;
       // console.log(this.data);
      },
      error => {
        console.log(error);
      }
    );
    
  }

  getSearchItemcategoryList(): void{
    this.tradesmanService.getSearchItemcategoryList(this.selectedItemCategoryId, this.postcode)
    .subscribe(
      response => {
        this.tradesman =  response;
        console.log(this.tradesman);
      },
      error => {
        console.log(error);
      }
    );
    
  }

  showDetail(tradesmanId):void{
    console.log(tradesmanId);
    this.router.navigate(['/tradesmen-detail'], { queryParams: { id: tradesmanId } });
    
    
    
    // this.tradesmanService.getTradesmanList(tradesmanId)
    // .subscribe(
    //   response => {
    //     this.tradesman =  response;
    //     console.log(this.tradesman);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  seeAll(val){
    console.log(val);
  }
}
