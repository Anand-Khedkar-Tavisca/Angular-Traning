import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/app.product.component';
import { AppCommonModule } from '../common/app.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Day2RoutingModule } from './day2-routing.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    FormsModule,
    ReactiveFormsModule,
    Day2RoutingModule
  ],
  exports: [
    CommonModule
  ]
})
export class Day2Module { }
