import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { SharedModule } from './modules/shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { PanelComponent } from './shared/panel/panel.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PanelComponent,
    LoginComponent
  ],
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
