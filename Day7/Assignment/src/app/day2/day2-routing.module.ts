import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/app.product.component';


const routes: Routes = [
  {path: 'form', component: ProductComponent},
  { path: '', redirectTo: '/form', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day2RoutingModule { }
