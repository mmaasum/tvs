import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class TradesmanService implements  OnInit
{
   private _baseUrl: string;
   filteredData;
   data:any;
   private messageSource = new BehaviorSubject(0);

    constructor(
        private _httpClient: HttpClient
    )
    {
        this._baseUrl = 'http://localhost:8003';
    }
   
   currentMessage = this.messageSource.asObservable();
    
    ngOnInit(): void {
        
    }

    changeMessage(message: number) {
      this.messageSource.next(message)
    }

    getTradesmanList(): Observable<any>
    {
       return this._httpClient.get(this._baseUrl +'/api/Tradesman/GetTradesmen/')    
    }

    getItemcategoryList(): Observable<any>
    {
        return this._httpClient.get(this._baseUrl +'/Itemcategory/GetItemgategorys/')    
    }
    getForSearchItemcategoryList(): Observable<any>
    {
       return this._httpClient.get(this._baseUrl +'/Itemcategory/GetSearchItemCategorys/')        
    }

    getSearchItemcategoryList(selectedItemCategoryId, postcode): Observable<any>
    {
       return this._httpClient.get(this._baseUrl +'/Itemcategory/GetItemgategorys/'+selectedItemCategoryId+'/'+postcode)   
    }

    importPostcods(files: File): Observable<any>
    {
      const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json'} 
      return this._httpClient.post(this._baseUrl +'/Itemcategory/ImportExcel/', files, {'headers':headers})     
    }

    getAdviceCenterTitleList(): Observable<any>
    {
       return this._httpClient.get('http://localhost:51733/api/AdviceCenter/GetAdviceCenterTitleList')
    }

    getData(): any[]
    {
       this._httpClient.get(this._baseUrl +'/Itemcategory/GetItemgategorys/')
         .subscribe(
         response => {
            this.data =  response;
            
            this.data.filter(obj => {
               return obj.parentId === 0;
            })
         },
         error => {
            console.log(error);
         }
      );
       return this.filteredData;      
    }
}