import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SMSService
{
   
    constructor(private _httpClient: HttpClient){}
   
    sendSms(message, mobile): Observable<any>
    {
       return this._httpClient.get('http://localhost:8003/Sms/SendSMS/'+message+'/'+mobile)
            
    }
}