import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../../../app/main/microservices/login/user-login';
@Component({
  selector: 'tvs-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})


export class SliderComponent implements OnInit {
  master = 'Draw Your Home';

  bodyText: string;
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}
}
