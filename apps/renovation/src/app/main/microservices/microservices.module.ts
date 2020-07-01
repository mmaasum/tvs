import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FindTradesmenModule } from './components/find-tradesmen.module';
import { FindTradesmenComponent } from './components/find-tradesmen/find-tradesmen.component';
import { Routes, RouterModule } from '@angular/router';
import { AdviceCenterComponent } from './components/advice-center/advice-center.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  { path        : 'find-tradesmen', component: FindTradesmenComponent },
  { path        : 'advice-center', component: AdviceCenterComponent }
];

@NgModule({
  declarations: [FindTradesmenComponent, AdviceCenterComponent],
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[FindTradesmenComponent, AdviceCenterComponent,
    MatCardModule,MatButtonModule
  ]
})
export class MicroservicesModule { }
