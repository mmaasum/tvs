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
import { ClientFeedbackComponent } from './tradesman/client-feedback/client-feedback.component';
import { NgxGalleryModule } from 'ngx-gallery-9';

const routes: Routes = [
  { path        : 'find-tradesmen', component: FindTradesmenComponent },
  { path        : 'advice-center', component: AdviceCenterComponent },
  { path        : 'advice-center-author', component: AuthorComponent },
  { path        : 'registration', component: RegistrationComponent },
  // { path        : 'tradesmen-detail', component: TradesmenDetailComponent },
  // { path        : 'tradesmen-detail/:Id', component: TradesmenDetailComponent },

  { path        : 'tradesmen-detail', component: TradesmanDetailComponent },
  { path        : 'tradesmen-detail/:Id', component: TradesmanDetailComponent },

  { path        : 'review', component: TradesmanReviewComponent},
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
    ClientFeedbackComponent],
  imports: [MatTableModule,MatPaginatorModule,
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
    LoginRegistrationService]
})
export class MicroservicesModule { }
