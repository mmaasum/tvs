import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { SignupModalService } from './modal.service';
import { LoginRegistrationService } from '../../services/login-registration.service';
import { FormGroup } from '@angular/forms';
import { UserModel } from '../../../model/user.model';
import { UserProfileModel } from '../../../model/user-profile.model';

@Component({ 
    selector: 'jw-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class SignupModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;
    userRegistrationForm: FormGroup;
    user: any;
    userProfile:any;

    constructor(private modalService: SignupModalService, private el: ElementRef,
        private loginRegistrationService: LoginRegistrationService) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        this.user = new UserModel();
        this.userProfile = new UserProfileModel();
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    saveUser(): void{

         console.log(this.userProfile);
        this.loginRegistrationService.saveUser(this.user, this.userProfile)
        .subscribe(
          response => {
            this.loginRegistrationService =  response;
            
             console.log(response);
          },
          error => {
            console.log(error);
          }
        );
        alert('User created successfully');
        this.user = new UserModel();
        this.close();
      }

    // remove self from modal service when component is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}