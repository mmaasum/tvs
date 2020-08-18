import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tvs-front-blocks',
  templateUrl: './front-blocks.component.html',
  styleUrls: ['./front-blocks.component.scss']
})
export class FrontBlocksComponent implements OnInit {
  master = 'Draw Now';
  master2 = 'Search';
  master3 = 'Make Plan';
  constructor() { }

  ngOnInit(): void {
  }

}
