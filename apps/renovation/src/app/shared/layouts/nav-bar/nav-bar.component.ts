import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginRegistrationService } from '../../../main/microservices/services/login-registration.service';
import { ModalService } from '../../../main/microservices/login/user-login';
import { SignupModalService } from '../../../main/microservices/login/registration';
import { TradesmanModel } from '../../../main/model/tradesman.model';
import { TradesmanService } from '../../../main/microservices/services/tradesman.service';
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

  favoritList: Array<TradesmanModel>=[];
  favoritListCount: number;
  constructor(private activatedRoute: ActivatedRoute,
    private tradesmanService: TradesmanService,
    private modalService: ModalService,
    private modalService2: SignupModalService,
    // private modalSignupService: ModalSignupService
    ) { }

  ngOnInit(): void {
    
    if(this.favoritList.length>0){
      this.favoritList = JSON.parse(localStorage.getItem('favoriteList'));
      this.favoritListCount = this.favoritList.length
      // console.log(this.favoritListCount);
  
     
    }
    this.tradesmanService.currentMessage.subscribe(message => this.favoritListCount = message)
    // this.tradesmanService.changeMessage(this.favoritListCount)

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

  showFavoriteList(){

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



openModal2(id: string) {
  this.modalService2.open(id);
}

closeModal2(id: string) {
  this.modalService2.close(id);
}


}
