import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SMSService
{
    private _baseUrl: string;
    constructor(private _httpClient: HttpClient){
        this._baseUrl = 'http://localhost:8003';
    }
   
    sendSms(message, mobile): Observable<any>
    {
       return this._httpClient.get(this._baseUrl +'/Sms/SendSMS/'+message+'/'+mobile)    
    }
}