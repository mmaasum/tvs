import { Component, OnInit } from '@angular/core';
import { TradesmanModel } from '../../../model/tradesman.model';

@Component({
  selector: 'tvs-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {

  constructor() { }
favoritList: Array<TradesmanModel>=[];
  ngOnInit(): void {
   
    this.favoritList = JSON.parse(localStorage.getItem('favoriteList'));

    console.log(this.favoritList);
  }

  remove(e){
    console.log(e);
   

    const targetElement = document.getElementById(e);
    targetElement.classList.add("btn-change");
    // this.bntStyle = 'btn-change';

    // const classList = e.target.classList;
    // console.log(e);
    // console.log(classList);
    // const classes = e.target.className;
    // console.log(classes);

    // classes.includes('background-color') ? classList.remove('red') : classList.add('red');
  }

}
