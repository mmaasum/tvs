import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SignupModalComponent } from './modal.component';


@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [SignupModalComponent],
    exports: [SignupModalComponent]
})
export class SignupModalModule { }