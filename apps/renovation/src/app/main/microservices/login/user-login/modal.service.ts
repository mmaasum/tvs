import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {

    private messageSource = new BehaviorSubject('Log In');
    currentMessage = this.messageSource.asObservable();

    private wellcomeMessageSource = new BehaviorSubject('hide');
    currentWellcomeMessage = this.wellcomeMessageSource.asObservable();

    private userNameSource = new BehaviorSubject('');
    currentUsername = this.userNameSource.asObservable();
    
    constructor(
        private _httpClient: HttpClient
    ){}
    user: { UserId: number; UserName: string; Password: string; Email: string; }
    
    private modals: any[] = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string) {
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }

    changeMessage(message: string) {
        this.messageSource.next(message)
    }

    wellcomeMessage(message: string) {
        this.wellcomeMessageSource.next(message)
    }

    userName(name: string) {
        this.userNameSource.next(name)
    }

    saveUser(): Observable<any>
    {
        

        this.user ={
            UserId : 0,
            UserName : 'Jahangir',
            Password : '123456',
            Email : 'abc@gamil.com',
        }

        return this._httpClient.post('http://localhost:8005/login/InsertItem/', this.user);
    }
    
    getUserByEmailId(user): Observable<any>
    {
       return this._httpClient.post('http://localhost:8005/login/GetUserByEmail/', user)
            
    }

}