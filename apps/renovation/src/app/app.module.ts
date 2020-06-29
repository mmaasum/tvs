import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { RouterModule, Routes } from '@angular/router';
// import { FindTradesmenComponent } from './main/microservices/components/find-tradesmen/find-tradesmen.component';

// const appRoutes: Routes = [
//   {
//     path        : 'renovation',
//     loadChildren: () => import('../app/main/microservices/components/find-tradesmen.module').then(m => m.FindTradesmenModule)
//   },
//   {
//       path        : 'apps',
//       loadChildren: () => import('../app/main/microservices/components/find-tradesmen.module').then(m => m.FindTradesmenModule)
//   }
  
// ];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule,MainModule,
    // RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
})
export class AppModule {}
