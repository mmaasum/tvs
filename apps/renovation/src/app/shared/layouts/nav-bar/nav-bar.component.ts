import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginRegistrationService } from '../../../main/microservices/services/login-registration.service';
import { ModalService } from '../../../main/microservices/login/user-login';
// import { ModalSignupService } from '../../../main/microservices/login/registration';

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
  wellcomeMessage:string;
  userName:string;
  constructor(private activatedRoute: ActivatedRoute,
    private modalService: ModalService,
    // private modalSignupService: ModalSignupService
    ) { }

  ngOnInit(): void {

    this.modalService.currentMessage.subscribe(message => this.message = message)

    this.modalService.currentWellcomeMessage.subscribe(wMessage => this.wellcomeMessage = wMessage)

    // this.modalService.currentUsername.subscribe(name => this.userName = name)

    // this.userName = localStorage.getItem('logedinUser');
    // console.log('vvvv');
    console.log(this.userName);
    // if(this.message === 'Log Out'){
    //   this.wellcomeMessage = true;
    // }
    // else{
    //   this.wellcomeMessage = false;
    // }

    this.isDisplay = false;
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.routLinkName = params['name'];
    //   console.log('nav bar ' + this.routLinkName);
    // });
  }
  homePage(){
      this.isDisplay = true;
  }

  homePage2(){
    this.isDisplay = false;
}

openSignupModal(id: string) {
  
  this.modalService.open(id);
}

openModal(id: string) {
  
  if(this.message === 'Log Out'){
    this.modalService.changeMessage("Log In")
    this.modalService.wellcomeMessage('hide')
    this.modalService.userName('')

    localStorage.removeItem('logedinUser');
    
    location.reload();
    // this.wellcomeMessage = true;
  }
  else{
    this.modalService.open(id);
    // this.wellcomeMessage = false;
  }
  
}

closeModal(id: string) {
  this.modalService.close(id);
}



}
