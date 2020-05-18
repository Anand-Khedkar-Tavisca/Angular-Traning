import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductReactiveComponent } from './product/product.reactive.component';
import { AppCommonModule } from '../common/app.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Day3RoutingModule } from './day3-routing.module';



@NgModule({
  declarations: [
    ProductReactiveComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    FormsModule,
    ReactiveFormsModule,
    Day3RoutingModule
  ],
  exports: [
    CommonModule,
  ]
})
export class Day3Module { }
