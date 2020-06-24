import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tvs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  master = 'Draw Home';
  constructor() { }

  ngOnInit(): void {
  }

}
