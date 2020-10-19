import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from '../../model/user.model';
import { UserProfileModel } from '../../model/user-profile.model';

@Injectable()
export class LoginRegistrationService implements  OnInit
{
    private _baseUrl: string;
    private messageSource = new BehaviorSubject('Login');
    currentMessage = this.messageSource.asObservable();
    user: { UserId: number; UserName: string; Password: string; Email: string; }

    constructor(
        private _httpClient: HttpClient
    ){
        this._baseUrl = 'http://localhost:8005';
    }
    
    changeMessage(message: string) {
        this.messageSource.next(message)
    }

    ngOnInit(): void {
        
    }
    
    saveUser(user: UserModel, userProfile: UserProfileModel): Observable<any>
    {
        const headers = { 'content-type': 'application/json'} 
        return this._httpClient.post(this._baseUrl +'/login/InsertItem/', JSON.stringify(user), {'headers':headers});
    }
    
    getUserByEmailId(user): Observable<any>
    {
       return this._httpClient.post(this._baseUrl +'/login/GetUserByEmail/', user)
            
    }
}