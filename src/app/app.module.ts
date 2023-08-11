import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent} from "./components/footer/footer.component";
import {RequestDemoComponent} from "./components/request-demo/request-demo.component";
import {TechnologiesComponent} from "./components/technologies/technologies.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RequestDemoComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
