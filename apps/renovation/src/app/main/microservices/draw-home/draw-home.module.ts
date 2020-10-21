import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DrawYourHomeComponent } from './draw-your-home/draw-your-home.component';
import { DrawHomeService } from './draw-home.service';
import { Routes } from '@angular/router';

const routes: Routes = [
    { path: 'draw-your-home', component: DrawYourHomeComponent}
];

@NgModule({
  declarations: [],
  imports: [],
  exports:[],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DrawHomeService]
})
export class DrawHomeModule { }



