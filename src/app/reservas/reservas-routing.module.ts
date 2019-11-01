import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanchasComponent } from './canchas/canchas.component';
import { CanchaAddComponent } from './canchas/cancha-add/cancha-add.component';
import { CanchasListComponent } from './canchas/canchas-list/canchas-list.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservasListComponent } from './reservas/reservas-list/reservas-list.component';


const routes: Routes = [
  {
    path: 'canchas',
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
  },
  {
    path: 'reservas',
    component: ReservasComponent,
    children: [
      {
        path: '',
        component: ReservasListComponent
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
