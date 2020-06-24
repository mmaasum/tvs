import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { DrawYourHomeModule } from '../../main/draw-your-home/draw-your-home.module';
import { FrontBlocksComponent } from './front-blocks/front-blocks.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [NavBarComponent, FooterComponent, 
    SliderComponent, FrontBlocksComponent
  ],
  imports: [
    CommonModule,DrawYourHomeModule,MatCardModule,MatButtonModule
  ],
  exports     : [
    NavBarComponent,FooterComponent,SliderComponent,DrawYourHomeModule
  ]
})
export class LayoutsModule { }
