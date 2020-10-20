import { Component, OnInit } from '@angular/core';
// import { LoginRegistrationService } from '../../services/login-registration.service';
import { LoginRegistrationService } from '../login-registration.service';
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
    
  }

}
