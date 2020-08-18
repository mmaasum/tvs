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

    // saveAdviceCenterPostComment(adviceCenterPostComment): Observable<any>
    // {
    //     console.log(adviceCenterPostComment);
    //    return this._httpClient.put('http://localhost:51733/api/AdviceCenter/InsertItem/', adviceCenterPostComment)
            
    // }

    saveAdviceCenterPostComment(comment): Promise<any>
    {
        console.log(comment);
        comment.adviceCenterId=1;
        comment.adviceCenterPostCommentId=1;
        comment.userId=1;

        // comment.comment=1;
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
        console.log(adviceCenterId);
       return this._httpClient.get('http://localhost:51733/api/AdviceCenter/GetAdviceCenterPostByAdvicecenterId/'+ adviceCenterId)
            
    }

    getAdviceCenterPosts(): Observable<any>
    {
       return this._httpClient.get('http://localhost:51733/api/AdviceCenter/GetAdviceCenterPosts')
            
    }

    getAdviceCenterTitleList(): Observable<any>
    {
       return this._httpClient.get('http://localhost:51733/api/AdviceCenter/GetAdviceCenterTitleList')
    }
    
}