import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanchasComponent } from './reservas/canchas/canchas.component';


const routes: Routes = [
  {
    path: '',
    component: CanchasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
