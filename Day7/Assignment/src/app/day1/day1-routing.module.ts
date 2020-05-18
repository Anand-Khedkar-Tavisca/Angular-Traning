import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypescriptComponent } from './typescript/typescript.component';


const routes: Routes = [
  {path: 'typescript', component: TypescriptComponent},
  { path: '', redirectTo: '/typescript', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day1RoutingModule { }
