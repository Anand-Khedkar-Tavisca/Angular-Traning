import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductReactiveComponent } from './product/product.reactive.component';


const routes: Routes = [
  {path: 'reactive', component: ProductReactiveComponent},
  { path: '', redirectTo: '/reactive', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day3RoutingModule { }
