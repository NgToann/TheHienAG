import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ThnavbarComponent } from './components/thnavbar/thnavbar/thnavbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, NavbarComponent, LogoComponent, LinksComponent, DropdownModule, ButtonsModule  } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home/home.component';
import { FooterComponent } from './components/footer/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ThnavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
