import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- NgModel lives here
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RandomChildComponent } from './random-child/random-child.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ReactiveFormsPracticeComponent } from './reactive-forms-practice/reactive-forms-practice.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', canActivate: [AuthGuardService], component: DashboardComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'detail/:id', canActivate: [AuthGuardService], component: HeroDetailComponent },
  { path: 'reactiveForms', canActivate: [AuthGuardService], component: ReactiveFormsPracticeComponent },
  { path: 'addhero', canActivate: [AuthGuardService], component: FormComponent },
  { path: 'rxjs', canActivate: [AuthGuardService], component: RxjsComponent },
  {path: 'heroes', canActivate: [AuthGuardService],
  component: HerosComponent,
 // children routes
  children: [
    { path: '',  component: HerosComponent },
    {path: 'test123', component: RandomChildComponent }
    // if url is changed to test123 then child component data will be displayed
  ]
  },
  // redirection to 404 component
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    RandomChildComponent,
    FormComponent,
    PageNotFoundComponent,
    LoginComponent,
    ReactiveFormsPracticeComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [HeroService, MessageService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
