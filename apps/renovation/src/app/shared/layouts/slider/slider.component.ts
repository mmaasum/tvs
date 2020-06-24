import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tvs-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  master = 'Draw Your Home';
  constructor() { }

  ngOnInit(): void {
  }

}
