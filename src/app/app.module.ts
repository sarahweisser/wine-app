// TODO group files into smaller ngModules
// rename files to make use clearer

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WineService } from './services/wine.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { UserRegistrationFormComponent } from './components/user-registration-form/user-registration-form.component';
import { WineRegistrationFormComponent } from './components/wine-registration-form/wine-registration-form.component';
import { UserLoginFormComponent } from './components/user-login-form/user-login-form.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoggedInHomePageComponent } from './components/logged-in-home-page/logged-in-home-page.component';
import { LoggedInWineFactComponent } from './components/logged-in-wine-fact/logged-in-wine-fact.component';
import { LoggedInWineJournalComponent } from './components/logged-in-wine-journal/logged-in-wine-journal.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { WineFoodQuizComponent } from './components/wine-food-quiz/wine-food-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    UserRegistrationFormComponent,
    WineRegistrationFormComponent,
    UserLoginFormComponent,
    ErrorPageComponent,
    LandingPageComponent,
    LoggedInHomePageComponent,
    LoggedInWineFactComponent,
    LoggedInWineJournalComponent,
    UserRegistrationComponent,
    WineFoodQuizComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
