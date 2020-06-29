import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawYourHomeModule } from './draw-your-home/draw-your-home.module';
import { MicroservicesModule } from './microservices/microservices.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,DrawYourHomeModule, MicroservicesModule
  ],
  exports:[DrawYourHomeModule]
})
export class MainModule { }
