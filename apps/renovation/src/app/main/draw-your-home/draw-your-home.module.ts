import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawHomeComponent } from './draw-home/draw-home.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DrawHomeDialogComponent } from './draw-home-dialog/draw-home-dialog.component';

import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { FindTradesmenComponent } from '../microservices/components/find-tradesmen/find-tradesmen.component';

const routes: Routes = [
  { path        : 'find-tradesmen', component: FindTradesmenComponent }
];
@NgModule({
  declarations: [DrawHomeComponent,DrawHomeDialogComponent],
  imports: [MatDialogModule,MatCardModule,BrowserAnimationsModule,
    ReactiveFormsModule,MatButtonModule,MatFormFieldModule,MatSelectModule,
    MatDatepickerModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,
    MatIconModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CommonModule,DrawHomeComponent,DrawHomeDialogComponent
  ],
  providers: [  
    MatDatepickerModule,  
  ],
})

export class DrawYourHomeModule { }
