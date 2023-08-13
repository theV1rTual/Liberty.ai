import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent} from "./components/footer/footer.component";
import {RequestDemoComponent} from "./components/request-demo/request-demo.component";
import {TechnologiesComponent} from "./components/technologies/technologies.component";
import {CasesComponent} from "./components/cases/cases.component";
import {SystemToolsComponent} from "./components/system-tools/system-tools.component";
import {QaComponent} from "./components/qa/qa.component";
import {HeroComponent} from "./components/hero/hero.component";
import {WillSuitComponent} from "./components/will-suit/will-suit.component";
import {StartWorkComponent} from "./components/start-work/start-work.component";
import {ProcessesComponent} from "./components/processes/processes.component";
import {SolutionsComponent} from "./components/solutions/solutions.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RequestDemoComponent,
    TechnologiesComponent,
    CasesComponent,
    SystemToolsComponent,
    QaComponent,
    HeroComponent,
    WillSuitComponent,
    StartWorkComponent,
    ProcessesComponent,
    SolutionsComponent
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
