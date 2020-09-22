import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindTradesmenComponent } from './components/find-tradesmen/find-tradesmen.component';
import { Routes, RouterModule } from '@angular/router';
import { AdviceCenterComponent } from './components/advice-center/advice-center.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
// import { TradesmenDetailComponent } from './components/tradesmen-detail/tradesmen-detail.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdviceCenterService } from './services/advicecenter.service';
import { TradesmanService } from './services/tradesman.service';
import { TradesmanReviewComponent } from './components/tradesman-review/tradesman-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TradesmanDetailService } from './services/tradesman-detail.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorComponent } from './components/author/author.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { LoginRegistrationService } from './services/login-registration.service';
// import { SignupModalModule } from './login/registration/modal.module';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { FavoriteListComponent } from './tradesman/favorite-list/favorite-list.component';
import { TradesmanDetailComponent } from './tradesman/tradesman-detail/tradesman-detail.component';

import { NgxGalleryModule } from 'ngx-gallery-9';
import { LayoutsModule } from '../../shared/layouts/layouts.module';
import { UserReviewComponent } from './tradesman/user-review/user-review.component';
import { SMSService } from './services/sms.service';
import { DrawHomeComponent } from './draw-home/draw-home.component';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
import { NgScrollbarModule } from 'ngx-scrollbar';

const routes: Routes = [
  { path        : 'draw-home', component: DrawHomeComponent },
  { path        : 'find-tradesmen', component: FindTradesmenComponent },
  { path        : 'advice-center', component: AdviceCenterComponent },
  { path        : 'advice-center-author', component: AuthorComponent },
  { path        : 'registration', component: RegistrationComponent },
  { path        : 'tradesmen-detail', component: TradesmanDetailComponent },
  { path        : 'tradesmen-detail/:Id', component: TradesmanDetailComponent },
  { path        : 'review', component: UserReviewComponent},
  { path        : 'favorite-list', component: FavoriteListComponent}
];


@NgModule({
  declarations: [FindTradesmenComponent, AdviceCenterComponent, 
    // TradesmenDetailComponent, 
    TradesmanReviewComponent,
    FilterPipe,
    AuthorComponent,
    RegistrationComponent,
    FavoriteListComponent,
    TradesmanDetailComponent,
    UserReviewComponent,
    DrawHomeComponent],
  imports: [MatTableModule,MatPaginatorModule,
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
    RouterModule.forChild(routes)
  ],
  exports:[MatPaginatorModule, 
    RegistrationComponent,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,FindTradesmenComponent, AdviceCenterComponent,
    MatCardModule,MatButtonModule
  ],
  providers: [AdviceCenterService, TradesmanService,TradesmanDetailService,
    LoginRegistrationService,
    SMSService]
})
export class MicroservicesModule { }
