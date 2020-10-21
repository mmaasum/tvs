import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../../main/microservices/login/user-login';
import { SignupModalService } from '../../../main/microservices/login/registration';
import { TradesmanModel } from '../../../main/model/tradesman.model';
import { TradesmanService } from '../../../main/microservices/tradesman/tradesman.service';

@Component({
  selector: 'tvs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  master = 'Draw Home';
  routLinkName:string;
  isDisplay:boolean;
  message:string;
  bodyText: string;
  wellcomeMessage = 'hide';
  userName:string;

  favoritList: Array<TradesmanModel>=[];
  favoritListCount: number;
  constructor(private activatedRoute: ActivatedRoute,
    private tradesmanService: TradesmanService,
    private modalService: ModalService,
    private modalService2: SignupModalService,
    // private modalSignupService: ModalSignupService
    ) { }

    ngAfterViewInit() {
      this.favoritList = JSON.parse(localStorage.getItem('favoriteList'));
      // if(this.favoritList.length > 0){
      //   // this.favoritListCount = this.favoritList.length
      // }
      this.tradesmanService.changeMessage(this.favoritListCount);

      this.tradesmanService.currentMessage.subscribe(message1 => this.favoritListCount = message1)
      // this.modalService.currentMessage.subscribe(message => this.message = message)
      this.modalService.currentWellcomeMessage.subscribe(wMessage => this.wellcomeMessage = wMessage)

    }

  
  ngOnInit(): void {
    this.isDisplay = true;
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
