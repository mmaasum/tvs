import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TradesmanService implements  OnInit
{

    constructor(
        private _httpClient: HttpClient
    )
    {
        
    }
    
    ngOnInit(): void {
        
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
    
}