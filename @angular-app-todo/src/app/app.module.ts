import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderLayoutComponent } from './shared/components/header-layout/header-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLayoutComponent,
    MainLayoutComponent,
    ErrorPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
