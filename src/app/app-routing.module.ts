import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Studentform} from '../studentform';




const routes: Routes = [
  { path: "v1/register", component: Studentform }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
