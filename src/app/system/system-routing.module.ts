import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanchasComponent } from './canchas/canchas.component';
import { CanchaAddComponent } from './canchas/cancha-add/cancha-add.component';
import { CanchasListComponent } from './canchas/canchas-list/canchas-list.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservasListComponent } from './reservas/reservas-list/reservas-list.component';
import { ReservaAddComponent } from './reservas/reserva-add/reserva-add.component';
import { TiposComponent } from './tipos/tipos.component';
import { TiposListComponent } from './tipos/tipos-list/tipos-list.component';
import { TipoAddComponent } from './tipos/tipo-add/tipo-add.component';


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
        component: ReservaAddComponent
      }
    ]
  },
  {
    path: 'tipos',
    component: TiposComponent,
    children: [
      {
        path: '',
        component: TiposListComponent
      },
      {
        path: 'add',
        component: TipoAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
