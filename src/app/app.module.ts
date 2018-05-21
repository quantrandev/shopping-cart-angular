import { AppRoutes } from './app-routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, LoginComponent],
  imports: [BrowserModule, NgbModule.forRoot(), AppRoutes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
