import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanchasComponent } from './canchas/canchas.component';
import { CanchaAddComponent } from './canchas/cancha-add/cancha-add.component';
import { CanchasListComponent } from './canchas/canchas-list/canchas-list.component';


const routes: Routes = [
  {
    path: '',
    component: CanchasComponent,
    children: [
      {
        path: '',
        component: CanchasListComponent
      },
      {
        path: 'add',
        component: CanchaAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
