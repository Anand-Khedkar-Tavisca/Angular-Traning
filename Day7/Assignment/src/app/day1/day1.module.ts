import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day1RoutingModule } from './day1-routing.module';
import { TypescriptComponent } from './typescript/typescript.component';


@NgModule({
  declarations: [TypescriptComponent],
  imports: [
    CommonModule,
    Day1RoutingModule
  ]
})
export class Day1Module { }
