import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from '../../model/user.model';
import { UserProfileModel } from '../../model/user-profile.model';

@Injectable()
export class LoginRegistrationService implements  OnInit
{
    private messageSource = new BehaviorSubject('Login');
    currentMessage = this.messageSource.asObservable();
    
    constructor(
        private _httpClient: HttpClient
    ){}
    user: { UserId: number; UserName: string; Password: string; Email: string; }
    
    changeMessage(message: string) {
        this.messageSource.next(message)
    }

    ngOnInit(): void {
        
    }
    
    saveUser(user: UserModel, userProfile: UserProfileModel): Observable<any>
    {
        const headers = { 'content-type': 'application/json'} 
        return this._httpClient.post('http://localhost:8005/login/InsertItem/', JSON.stringify(user), {'headers':headers});
    }
    
    // saveUser2(user: UserModel, userProfile: UserProfileModel): Observable<any>
    // {
    //     console.log(user);
    //     console.log(userProfile);
    //     const headers = { 'content-type': 'application/json'} 
    //     return this._httpClient.post('http://localhost:8005/login/InsertItemTradesman/', {user, userProfile}, {'headers':headers});
    // }

    getUserByEmailId(user): Observable<any>
    {
        console.log(user);
       return this._httpClient.post('http://localhost:8005/login/GetUserByEmail/', user)
            
    }

    
    
}