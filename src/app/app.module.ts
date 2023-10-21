import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { LeftNavBarComponent } from './components/left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
