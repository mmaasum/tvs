import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdviceCenterService implements  OnInit
{

    constructor(
        private _httpClient: HttpClient
    )
    {
        
    }
    
    ngOnInit(): void {
        
    }

    
    saveAdviceCenterPostComment(comment): Promise<any>
    {
        comment.adviceCenterId=1;
        comment.adviceCenterPostCommentId=1;
        comment.userId=1;
        comment.createDate=Date.now;
        comment.isActiv=1;


        return new Promise((resolve, reject) => {
            this._httpClient.put('http://localhost:51733/api/AdviceCenter/InsertItem/', comment)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    
    getAdviceCenterPost(adviceCenterId): Observable<any>
    {
       return this._httpClient.get('http://localhost:8004/api/AdviceCenter/GetAdviceCenterPostByAdvicecenterId/'+ adviceCenterId)
    
    }

    getAdviceCenterPosts(): Observable<any>
    {
       return this._httpClient.get('http://localhost:8004/api/AdviceCenter/GetAdviceCenterPosts')
            
    }

    getAdviceCenterTitleList(): Observable<any>
    {
       return this._httpClient.get('http://localhost:8004/api/AdviceCenter/GetAdviceCenterTitleList')
    }
    
}