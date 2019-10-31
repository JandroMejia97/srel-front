import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';

import { CanchasListComponent } from './canchas/canchas-list/canchas-list.component';
import { CanchasComponent } from './canchas/canchas.component';
import { CanchaAddComponent } from './canchas/cancha-add/cancha-add.component';
import { ReservasRoutingModule } from './reservas-routing.module';
import { CanchaDetailComponent } from './canchas/cancha-detail/cancha-detail.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservasListComponent } from './reservas/reservas-list/reservas-list.component';

@NgModule({
  declarations: [
    CanchasListComponent,
    CanchasComponent,
    CanchaAddComponent,
    CanchaDetailComponent,
    ReservasComponent,
    ReservasListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    ReservasRoutingModule
  ],
  exports: [
    CanchasComponent
  ],
  entryComponents: [
    CanchaDetailComponent
  ]
})
export class ReservasModule { }
