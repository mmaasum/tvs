import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TradesmanModel } from '../../../model/tradesman.model';
// import { TradesmanService } from '../../services/tradesman.service';

import { TradesmanService } from '../tradesman.service';

@Component({
  selector: 'tvs-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {

  constructor(private tradesmanService: TradesmanService) { }
favoritList: Array<TradesmanModel>=[];
  ngOnInit(): void {
   
    this.favoritList = JSON.parse(localStorage.getItem('favoriteList'));
  }

  remove(e){
    const cart_items = JSON.parse(localStorage["favoriteList"]);

    for (let i=0;i<cart_items.length;i++)
    {
      if (cart_items[i].tradesmanId === e) 
      cart_items.splice(i,1);
      localStorage["favoriteList"] = JSON.stringify(cart_items);
    }


    // this.favoritList = JSON.parse(localStorage.getItem('favoriteList'));
    // if(this.favoritList.length > 0){
    //   this.favoritListCount = this.favoritList.length
    // }

    this.tradesmanService.changeMessage(cart_items.length);

    // this.tradesmanService.currentMessage.subscribe(message => this.favoritListCount = message)
    



    const targetElement = document.getElementById(e);
    targetElement.classList.add("btn-change");
    
    
  }

}
