import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';


const routes: Routes = [
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'day1', loadChildren: './day1/day1.module#Day1Module' },
  { path: 'day2', loadChildren: './day2/day2.module#Day2Module' },
  { path: 'day3', loadChildren: './day3/day3.module#Day3Module' },

  { path: '', redirectTo: '/assignments', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
