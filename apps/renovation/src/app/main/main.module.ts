import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawYourHomeModule } from './draw-your-home/draw-your-home.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,DrawYourHomeModule
  ],
  exports:[DrawYourHomeModule]
})
export class MainModule { }
