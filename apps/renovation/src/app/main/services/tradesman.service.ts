import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TradesmanService implements  OnInit
{
    products: any[];
    onProductsChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
      console.log('ss3')
      this.ngOnInit();
        // Set the defaults
        this.onProductsChanged = new BehaviorSubject({});
    }

    ngOnInit(): Observable<any> | Promise<any> | any{
      console.log('ss2')
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getProducts()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
      console.log('ss2')
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getProducts()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
    getProducts(): Promise<any>
    {
      console.log('ss');
        return new Promise((resolve, reject) => {
            this._httpClient.get('http://localhost:8003/api/Tradesman/GetTradesmen')
                .subscribe((response: any) => {
                    this.products = response;
                    // console.log(this.products);
                    this.onProductsChanged.next(this.products);
                    resolve(response);
                }, reject);
        });
    }
}
