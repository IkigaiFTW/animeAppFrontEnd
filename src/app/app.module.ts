import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MobileNavbarComponent } from './home/mobile/mobile-navbar/mobile-navbar.component';
import { UserLogoComponent } from './components/user-logo/user-logo.component';
import { MobileMainCarouselComponent } from './components/mobile/mobile-main-carousel/mobile-main-carousel.component';
import { MobileSecondaryCarouselComponent } from './components/mobile/mobile-secondary-carousel/mobile-secondary-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MobileNavbarComponent,
    UserLogoComponent,
    MobileMainCarouselComponent,
    MobileSecondaryCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
