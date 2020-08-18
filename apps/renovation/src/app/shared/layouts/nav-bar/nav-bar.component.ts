import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginRegistrationService } from '../../../main/microservices/services/login-registration.service';
import { ModalService } from '../../../main/microservices/login/user-login';

@Component({
  selector: 'tvs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  master = 'Draw Home';
  routLinkName:string;
  isDisplay:boolean;
  message:string;
  bodyText: string;

  constructor(private activatedRoute: ActivatedRoute,
    private modalService: ModalService,
    private data: LoginRegistrationService) { }

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';

    this.data.currentMessage.subscribe(message => this.message = message)

    this.isDisplay = false;
    this.activatedRoute.queryParams.subscribe(params => {
      this.routLinkName = params['name'];
      console.log('nav bar ' + this.routLinkName);
    });
  }
  homePage(){
      this.isDisplay = true;
  }

  homePage2(){
    this.isDisplay = false;
}

openModal(id: string) {
  this.modalService.open(id);
}

closeModal(id: string) {
  this.modalService.close(id);
}



}
