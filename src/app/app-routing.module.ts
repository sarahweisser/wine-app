import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { UserLoginFormComponent } from './components/user-login-form/user-login-form.component';
import { WineRegistrationFormComponent } from './components/wine-registration-form/wine-registration-form.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { UserRegistrationFormComponent } from './components/user-registration-form/user-registration-form.component';
import { LoggedInHomePageComponent } from './components/logged-in-home-page/logged-in-home-page.component';
import { LoggedInWineFactComponent } from './components/logged-in-wine-fact/logged-in-wine-fact.component';
import { LoggedInWineJournalComponent } from './components/logged-in-wine-journal/logged-in-wine-journal.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { WineFoodQuizComponent } from './components/wine-food-quiz/wine-food-quiz.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'log-in',
    component: UserLoginFormComponent
  },
  {
    path: 'sign-up',
    component: UserRegistrationFormComponent
  },
  {
    path: 'wine-form',
    component: WineRegistrationFormComponent
  },
  {
    path: 'quiz',
    component: WineFoodQuizComponent
  },
  {
    path: 'logged-in-home',
    component: LoggedInHomePageComponent,
    children: [
      {
        path: 'wine-fact',
        component: LoggedInWineFactComponent
      },
      {
        path: 'wine-journal',
        component: LoggedInWineJournalComponent
      },
      {
        path: 'admin/view/:id',
        component: ViewRegistrationComponent
      },
      {
        path: 'admin/user/:id',
        component: UserRegistrationComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: '',
        redirectTo: '/logged-in-home/wine-fact', 
        pathMatch: 'full'
      }
    ]
  },
  
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: '',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
