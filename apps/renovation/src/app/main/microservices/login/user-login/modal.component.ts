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
    ppp
    userName;
    user: any;
    postUserForm: FormGroup;

    constructor(private modalService: ModalService, 
                private el: ElementRef,
                private _formBuilder: FormBuilder) 
                {
                    this.element = el.nativeElement;
                }

    
    login(): void{
        console.log(this.modalService);
        this.modalService.changeMessage("Log Out")
        this.modalService.wellcomeMessage('show')

        this.ppp = this.modalService.getUserByEmailId(this.user)
        .subscribe(
          response => {
            localStorage.setItem('logedinUser', JSON.stringify(response));
            
          },
          error => {
            console.log(error);
          }
        );

        // this.userName = JSON.parse(localStorage.getItem('logedinUser'));
        //   console.log(this.ppp);
        // this.modalService.userName(this.ppp)

        this.close();
      }

    
    ngOnInit(): void {

        this.user = new UserModel();
        this.userName = new UserModel();

        console.log(localStorage.getItem('logedinUser'));
        
        if(localStorage.getItem('logedinUser')){
            this.modalService.changeMessage("Log Out")
            this.modalService.wellcomeMessage('show')
        }
        // this.postUserForm = this.createUserForm();
    
        // console.log(this.id);
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
        this.element.style.display = 'block';
        document.body.classList.add('tvs-jw-modal-open');
    }

    openSignup(): void {
        this.close();
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}