import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tvs-front-blocks',
  templateUrl: './front-blocks.component.html',
  styleUrls: ['./front-blocks.component.scss']
})
export class FrontBlocksComponent implements OnInit {
  master = 'Draw Now';
  constructor() { }

  ngOnInit(): void {
  }

}
