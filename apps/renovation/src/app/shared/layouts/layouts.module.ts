import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [NavBarComponent, FooterComponent, 
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports     : [
    NavBarComponent,FooterComponent,SliderComponent
  ]
})
export class LayoutsModule { }
