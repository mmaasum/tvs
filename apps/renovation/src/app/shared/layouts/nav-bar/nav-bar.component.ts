import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tvs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  master = 'Draw Home';
  routLinkName:string;
  isDisplay:boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isDisplay = false;
    this.activatedRoute.queryParams.subscribe(params => {
      this.routLinkName = params['name'];
      console.log(this.routLinkName);
    });
  }
  homePage(){
      this.isDisplay = true;
  }

  homePage2(){
    this.isDisplay = false;
}
}
