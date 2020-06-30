import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tvs-find-tradesmen',
  templateUrl: './find-tradesmen.component.html',
  styleUrls: ['./find-tradesmen.component.scss']
})
export class FindTradesmenComponent implements OnInit {

  isDisplay: boolean;
  constructor() { console.log('masum');}

  ngOnInit(): void {
    this.isDisplay = false;
    console.log('masum');
  }


}
