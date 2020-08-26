import { Component, OnInit } from '@angular/core';
import { LoginRegistrationService } from '../../services/login-registration.service';
// import { userInfo } from 'os';

@Component({
  selector: 'tvs-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', './registration.component.less']
})
export class RegistrationComponent implements OnInit {

  constructor(private loginRegistrationService: LoginRegistrationService) { }

  ngOnInit(): void {
  }

  saveUser(): void{
    // this.loginRegistrationService.saveUser()
    // .subscribe(
    //   response => {
    //     this.loginRegistrationService =  response;
    //     // console.log(this.adviceCenterPost);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    
  }

}
