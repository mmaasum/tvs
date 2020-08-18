import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

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
    saveUser(): Observable<any>
    {
        

        this.user ={
            UserId : 0,
            UserName : 'Jahangir',
            Password : '123456',
            Email : 'abc@gamil.com',
        }
       console.log(this.user);

        return this._httpClient.post('http://localhost:8005/login/InsertItem/', this.user);
    }
    
    getUserByEmailId(user): Observable<any>
    {
        console.log(user);
       return this._httpClient.post('http://localhost:8005/login/GetUserByEmail/', user)
            
    }

    
    
}