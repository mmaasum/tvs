import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TradesmanDetailService
{

    constructor(private _httpClient: HttpClient){}
    
    getTradesmanDetail(tradesmanId): Observable<any>
    {
       return this._httpClient.get('http://localhost:8003/api/Tradesman/GetItemUsingTradesmanId/'+tradesmanId)
            
    }

    
}