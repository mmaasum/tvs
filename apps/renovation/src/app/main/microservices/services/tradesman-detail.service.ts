import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TradesmanDetailService
{
    private _baseUrl: string;
    constructor(private _httpClient: HttpClient){
        this._baseUrl = 'http://localhost:8003';
    }
    
    getTradesmanDetail(tradesmanId): Observable<any>
    {
       return this._httpClient.get(this._baseUrl +'/api/Tradesman/GetItemUsingTradesmanId/'+tradesmanId)      
    }
}