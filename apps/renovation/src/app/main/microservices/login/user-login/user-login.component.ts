import { Component, OnInit } from '@angular/core';
import { LoginRegistrationService } from '../../services/login-registration.service';
import { UserModel } from '../../../model/user.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'tvs-jw-modal',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginMessage = 'Hola Mundo!';
  user;
  postUserForm: FormGroup;
  constructor(private loginRegistrationService: LoginRegistrationService,
    private _formBuilder: FormBuilder) { }
  userName;

  ngOnInit(): void {
    this.user = new UserModel();

    this.postUserForm = this.createUserForm();
  }

  login(): void{
    this.loginRegistrationService.changeMessage("Log Out")

    const data = this.postUserForm.getRawValue();

    this.loginRegistrationService.getUserByEmailId(data)
    .subscribe(
      response => {
        this.loginRegistrationService =  response;

        localStorage.setItem('logedinUser', JSON.stringify(response));

         console.log(this.loginRegistrationService);
      },
      error => {
        console.log(error);
      }
    );
    
  }

  createUserForm(): FormGroup
    {
        // console.log('t c createProductForm');
        return this._formBuilder.group({
          email                       : [this.user.email],
          password                    : [this.user.password]
        });
    }
    

}
