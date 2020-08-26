import { Component, OnInit } from '@angular/core';
import { TradesmanModel } from '../../../model/tradesman.model';
import { TradesmanService } from '../../services/tradesman.service';
import { Router } from '@angular/router';
import { SignupModalService } from '../../login/registration';

@Component({
  selector: 'tvs-find-tradesmen',
  templateUrl: './find-tradesmen.component.html',
  styleUrls: ['./find-tradesmen.component.scss']
})
export class FindTradesmenComponent implements OnInit {

  // favorite:any;
  favoriteList: Array<TradesmanModel> = [];
  tradesman: [];
  isDisplay: boolean;
  selectedItemCategoryId;
  postcode = '';

  favoritList: Array<TradesmanModel>=[];
  favoritListCount: number;

  constructor(public tradesmanService: TradesmanService,
    private modalService: SignupModalService,
    private router: Router) {
    // this.tradesman = any[];
  }


  keyword = 'itemCategoryName';
  data;
  parentData = [];
  chieldData = [];

  Name = '';
  selectEvent(item) {
    
    this.selectedItemCategoryId = item.itemCategoryId;
    // console.log(this.postcode  + ', ' + this.selectedItemCategoryId);
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
    
    
    // this.getchieldData(29);
  }

  addToFavorite(item: any){
    // console.log(item.cmpanyName);
    const favorite = new TradesmanModel();
    favorite.companyName = item.companyName;

    favorite.image = item.image;
    favorite.tradesmanId = item.tradesmanId;
    favorite.serviceDescription = item.serviceDescription;

    
    // favorite.companyName = item.cmpanyName;
    // favorite.companyName = item.cmpanyName;
    // favorite.companyName = item.cmpanyName;


    this.favoriteList.push(favorite);

    localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList));

    this.favoritList = JSON.parse(localStorage.getItem('favoriteList'));
    this.favoritListCount = this.favoritList.length

    this.tradesmanService.changeMessage(this.favoritListCount)

    
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
        this.parentData = this.data;
        // this.parentData = this.data.filter(obj => obj.parentId === 0);
        // this.chieldData = this.data.filter(obj => obj.parentId > 0)
        console.log(this.parentData);
      },
      error => {
        console.log(error);
      }
    );
    
  }

  getItemcategoryList2(): void{
    this.tradesmanService.getItemcategoryList()
   .subscribe(
     response => {
       this.data =  response;
       this.chieldData = this.data.filter(obj => obj.parentId === 29)
     },
     error => {
       console.log(error);
     }
   );
   
 }
  // getchieldData(parentId:number){
  //   console.log('a');
  //   this.tradesmanService.getItemcategoryList()
  //   .subscribe(
  //     response => {
  //       this.data =  response;
  //       this.chieldData = this.data.filter(obj => obj.parentId === parentId)
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  

  getSearchItemcategoryList(): void{
    // console.log(this.selectedItemCategoryId);
    if(!this.selectedItemCategoryId)
    {
      alert('Please enter a valid category name')
      return;
    }
    this.tradesmanService.getSearchItemcategoryList(this.selectedItemCategoryId, this.postcode)
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

  showDetail(tradesmanId):void{
    // console.log(tradesmanId);
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
    // console.log(val);
  }




















}
