import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserModel } from '../../../model/user.model';

@Component({ 
    selector: 'tvs-jw-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;

    userName;
    user: any;
    postUserForm: FormGroup;

    constructor(private modalService: ModalService, private el: ElementRef,
        private _formBuilder: FormBuilder) {
        this.element = el.nativeElement;
    }

    login(): void{
        // this.loginRegistrationService.changeMessage("Log Out")
    
        // const data = this.postUserForm.getRawValue();
    
        // this.loginRegistrationService.getUserByEmailId(data)
        // .subscribe(
        //   response => {
        //     this.loginRegistrationService =  response;
    
        //     localStorage.setItem('logedinUser', JSON.stringify(response));
    
        //      console.log(this.loginRegistrationService);
        //   },
        //   error => {
        //     console.log(error);
        //   }
        // );
        
      }

      createUserForm(): FormGroup
    {
        // console.log('t c createProductForm');
        return this._formBuilder.group({
          email                       : [this.user.email],
          password                    : [this.user.password]
        });
    }
    
    ngOnInit(): void {

        this.user = new UserModel();

        this.postUserForm = this.createUserForm();
    
        console.log(this.id);
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'tvs-jw-modal') {
                this.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when component is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        console.log('aa');
        this.element.style.display = 'block';
        document.body.classList.add('tvs-jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}