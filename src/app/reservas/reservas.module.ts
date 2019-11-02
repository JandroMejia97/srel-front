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
  MatPaginatorModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatTooltipModule
} from '@angular/material';

import { CanchasListComponent } from './canchas/canchas-list/canchas-list.component';
import { CanchasComponent } from './canchas/canchas.component';
import { CanchaAddComponent } from './canchas/cancha-add/cancha-add.component';
import { ReservasRoutingModule } from './reservas-routing.module';
import { CanchaDetailComponent } from './canchas/cancha-detail/cancha-detail.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservasListComponent } from './reservas/reservas-list/reservas-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservaDetailComponent } from './reservas/reserva-detail/reserva-detail.component';
import { ReservaAddComponent } from './reservas/reserva-add/reserva-add.component';

@NgModule({
  declarations: [
    CanchasListComponent,
    CanchasComponent,
    CanchaAddComponent,
    CanchaDetailComponent,
    ReservasComponent,
    ReservasListComponent,
    ReservaDetailComponent,
    ReservaAddComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReservasRoutingModule
  ],
  exports: [
    CanchasComponent
  ],
  entryComponents: [
    CanchaAddComponent,
    ReservaAddComponent,
    CanchaDetailComponent,
    ReservaDetailComponent
  ]
})
export class ReservasModule { }
