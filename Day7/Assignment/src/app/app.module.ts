import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppCommonModule } from './common/app.common.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { Day1Module } from './day1/day1.module';
import { Day2Module } from './day2/day2.module';
import { Day3Module } from './day3/day3.module';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppCommonModule,

    Day1Module,
    Day2Module,
    Day3Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
