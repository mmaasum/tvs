import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FindTradesmenModule } from './components/find-tradesmen.module';
import { FindTradesmenComponent } from './components/find-tradesmen/find-tradesmen.component';
import { Routes, RouterModule } from '@angular/router';
import { AdviceCenterComponent } from './components/advice-center/advice-center.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TradesmenDetailComponent } from './components/tradesmen-detail/tradesmen-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { TradesmanService } from '../services/tradesman.service';
import { AdviceCenterService } from './services/advicecenter.service';
import { TradesmanService } from './services/tradesman.service';
import { TradesmanReviewComponent } from './components/tradesman-review/tradesman-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TradesmanDetailService } from './services/tradesman-detail.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorComponent } from './components/author/author.component';
// import { UserLoginComponent } from './login/user-login/user-login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { LoginRegistrationService } from './services/login-registration.service';
import { ModalModule } from './login/user-login';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';


const routes: Routes = [
  { path        : 'find-tradesmen', component: FindTradesmenComponent },
  { path        : 'advice-center', component: AdviceCenterComponent },
  { path        : 'advice-center-author', component: AuthorComponent },
  { path        : 'registration', component: RegistrationComponent },
  // { path        : 'login', component: UserLoginComponent },
  { path        : 'tradesmen-detail', component: TradesmenDetailComponent },
  { path        : 'tradesmen-detail/:Id', component: TradesmenDetailComponent },
  { path        : 'review', component: TradesmanReviewComponent}
];


@NgModule({
  declarations: [FindTradesmenComponent, AdviceCenterComponent, 
    TradesmenDetailComponent, TradesmanReviewComponent,
    FilterPipe,
    AuthorComponent,
    // UserLoginComponent,
    RegistrationComponent],
  imports: [MatTableModule,MatPaginatorModule,ModalModule,
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
    // UserLoginComponent,
    RegistrationComponent,ModalModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,FindTradesmenComponent, AdviceCenterComponent,
    MatCardModule,MatButtonModule
  ],
  providers: [AdviceCenterService, TradesmanService,TradesmanDetailService,
    LoginRegistrationService]
})
export class MicroservicesModule { }
