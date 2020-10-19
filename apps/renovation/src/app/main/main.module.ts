import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DrawYourHomeModule } from './draw-your-home/draw-your-home.module';
import { MicroservicesModule } from './microservices/microservices.module';
import { HttpClientModule } from '@angular/common/http';
import "@angular/compiler";



@NgModule({
  declarations: [],
  imports: [HttpClientModule,
    CommonModule,
    // DrawYourHomeModule,
     MicroservicesModule
  ],
  exports:[
    MicroservicesModule
    // DrawYourHomeModule
  ]
})
export class MainModule { }
