import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FindTradesmenComponent } from './find-tradesmen/find-tradesmen.component';

const routes: Routes = [
  {
      path        : 'find-tradesmen',
      component: FindTradesmenComponent
  }
];


@NgModule({
  declarations: [FindTradesmenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[FindTradesmenComponent]
})
export class FindTradesmenModule { }
