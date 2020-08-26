import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class TradesmanService implements  OnInit
{
   
    constructor(
        private _httpClient: HttpClient
    )
    {
        
    }
   private messageSource = new BehaviorSubject(0);
   currentMessage = this.messageSource.asObservable();
    
    filteredData;

    data:any;
    
    ngOnInit(): void {
        
    }

    changeMessage(message: number) {
      console.log('fav' + message);
      this.messageSource.next(message)
   }

    getTradesmanList(): Observable<any>
    {
       return this._httpClient.get('http://localhost:8003/api/Tradesman/GetTradesmen/')
            
    }

    getItemcategoryList(): Observable<any>
    {
       return this._httpClient.get('http://localhost:8003/Itemcategory/GetItemgategorys/')
            
    }

    getSearchItemcategoryList(selectedItemCategoryId, postcode): Observable<any>
    {
       return this._httpClient.get('http://localhost:8003/Itemcategory/GetItemgategorys/'+selectedItemCategoryId+'/'+postcode)
            
    }

    getAdviceCenterTitleList(): Observable<any>
    {
       return this._httpClient.get('http://localhost:51733/api/AdviceCenter/GetAdviceCenterTitleList')
    }

    getData(): any[]
    {

       this._httpClient.get('http://localhost:8003/Itemcategory/GetItemgategorys/')
         .subscribe(
         response => {
            this.data =  response;
            
            this.data.filter(obj => {
               return obj.parentId === 0;
            })
            console.log(this.data)
         },
         error => {
            console.log(error);
         }
      );
      
       return this.filteredData;
            
    }
    
}