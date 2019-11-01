import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatSortModule,
  MatInputModule,
  MatPaginatorModule
} from '@angular/material';

import { CanchasListComponent } from './canchas/canchas-list/canchas-list.component';
import { CanchasComponent } from './canchas/canchas.component';
import { CanchaAddComponent } from './canchas/cancha-add/cancha-add.component';
import { ReservasRoutingModule } from './reservas-routing.module';
import { CanchaDetailComponent } from './canchas/cancha-detail/cancha-detail.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservasListComponent } from './reservas/reservas-list/reservas-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReservaDetailComponent } from './reservas/reserva-detail/reserva-detail.component';

@NgModule({
  declarations: [
    CanchasListComponent,
    CanchasComponent,
    CanchaAddComponent,
    CanchaDetailComponent,
    ReservasComponent,
    ReservasListComponent,
    ReservaDetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReservasRoutingModule
  ],
  exports: [
    CanchasComponent
  ],
  entryComponents: [
    CanchaDetailComponent,
    ReservaDetailComponent
  ]
})
export class ReservasModule { }
