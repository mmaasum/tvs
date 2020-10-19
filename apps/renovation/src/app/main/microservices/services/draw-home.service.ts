import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import {} from '../../../../assets/draw-home/house-type.json'



@Injectable()
export class DrawHomeService 
{

    private messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();

    constructor(private _httpClient: HttpClient) {}
    
    changeMessage(message: any) {
        this.messageSource.next(message)
    }

    
    // saveDrawHome(data): Promise<any>
    // {
    //     return new Promise((resolve, reject) => {
    //         this._httpClient.post('http://localhost:8006/DrawHome/SaveLayout/', data)
    //             .subscribe((response: any) => {
    //                 resolve(response);
    //             }, reject);
    //     });
    // }

    
    saveDrawHome(data): Observable<any>{
        return this._httpClient.post('http://localhost:8006/DrawHome/SaveLayout/', data);
    }
    
    getHouseType(): Observable<any>{
        return this._httpClient.get("http://localhost:8006/DrawHome/GetHouseTypes")
    }

    getHouseTypeLayout(): Observable<any>{
        return this._httpClient.get("http://localhost:8006/DrawHome/GetLayouts")
    }

    getMaterialVScost(): Observable<any>{
        return this._httpClient.get("../../../../assets/draw-home/materialVScost.json")
    }
    // getAdviceCenterPost(adviceCenterId): Observable<any>
    // {
    //    return this._httpClient.get('http://localhost:8004/api/AdviceCenter/GetAdviceCenterPostByAdvicecenterId/'+ adviceCenterId)
    
    // }

    // getAdviceCenterPosts(): Observable<any>
    // {
    //    return this._httpClient.get('http://localhost:8004/api/AdviceCenter/GetAdviceCenterPosts')
            
    // }

    // getAdviceCenterTitleList(): Observable<any>
    // {
    //    return this._httpClient.get('http://localhost:8004/api/AdviceCenter/GetAdviceCenterTitleList')
    // }
    
}