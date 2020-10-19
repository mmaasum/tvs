import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class DrawHomeService 
{
    private _baseUrl: string;
    private messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();

    constructor(private _httpClient: HttpClient) {
        this._baseUrl = 'http://localhost:8006';
    }
    
    changeMessage(message: any) {
        this.messageSource.next(message)
    }

    saveDrawHome(data): Observable<any>{
        return this._httpClient.post(this._baseUrl +'/DrawHome/SaveLayout/', data);
    }
    
    getHouseType(): Observable<any>{
        return this._httpClient.get(this._baseUrl +"/DrawHome/GetHouseTypes")
    }

    getHouseTypeLayout(): Observable<any>{
        return this._httpClient.get(this._baseUrl +"/DrawHome/GetLayouts")
    }

    getMaterialVScost(): Observable<any>{
        return this._httpClient.get("../../../../assets/draw-home/materialVScost.json")
    }
}