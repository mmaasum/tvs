import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TradesmanService } from './tradesman/tradesman.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './login/registration/registration.component';
import { LoginRegistrationService } from './login/login-registration.service';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FavoriteListComponent } from './tradesman/favorite-list/favorite-list.component';
import { TradesmanDetailComponent } from './tradesman/tradesman-detail/tradesman-detail.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { LayoutsModule } from '../../shared/layouts/layouts.module';
import { UserReviewComponent } from './tradesman/user-review/user-review.component';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { PrintHomeComponent } from './draw-home/print-home/print-home.component';
import { DrawHomeService } from './draw-home/draw-home.service';
import { MaterialCostComponent } from './draw-home/material-cost/material-cost.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { MiddlePaneComponent } from './draw-home/middle-pane/middle-pane.component';
import { TemplateDisplayPaneComponent } from './draw-home/template-display-pane/template-display-pane.component';
import { LeftPaneComponent } from './draw-home/left-pane/left-pane.component';
import { DrawYourHomeComponent } from './draw-home/draw-your-home/draw-your-home.component';
import { TradesmanComponent } from './tradesman/tradesman/tradesman.component';

// const routes = [
//   {
//       path        : 'draw-your-home',
//       loadChildren: () => import('../microservices/draw-home/draw-home.module').then(m => m.DrawHomeModule)
//   },
//   {
//       path        : 'dashboards/project',
//       loadChildren: () => import('./dashboards/project/project.module').then(m => m.ProjectDashboardModule)
//   },
// ];
const routes: Routes = [
  // {
  //   path        : 'draw-your-home',
  //   loadChildren: () => import('../microservices/draw-home/draw-home.module').then(m => m.DrawHomeModule)
  // },

  { path        : 'tradesman', component: TradesmanComponent },
  { path        : 'draw-your-home', component: DrawYourHomeComponent },
  { path        : 'print-home', component: PrintHomeComponent },
  { path        : 'registration', component: RegistrationComponent },
  { path        : 'tradesmen-detail', component: TradesmanDetailComponent },
  { path        : 'tradesmen-detail/:Id', component: TradesmanDetailComponent },
  { path        : 'review', component: UserReviewComponent},
  { path        : 'favorite-list', component: FavoriteListComponent}
];


@NgModule({
  declarations: [
    FilterPipe,
    RegistrationComponent,
    FavoriteListComponent,
    TradesmanDetailComponent,
    UserReviewComponent,
    PrintHomeComponent,
    MaterialCostComponent,
    MiddlePaneComponent,
    TemplateDisplayPaneComponent,
    LeftPaneComponent,
    DrawYourHomeComponent,
    TradesmanComponent],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    NgScrollbarModule,
    SplitterModule,
    LayoutsModule,
    NgxGalleryModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    MatPaginatorModule, 
    LoadingBarModule,
    LoadingBarRouterModule,
    RegistrationComponent,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatCardModule,MatButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    TradesmanService,
    LoginRegistrationService,
    DrawHomeService
  ]
})
export class MicroservicesModule { }
