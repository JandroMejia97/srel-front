import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatFormFieldModule } from '@angular/material';

import { CanchasListComponent } from './canchas/canchas-list/canchas-list.component';
import { CanchasComponent } from './canchas/canchas.component';
import { CanchaAddComponent } from './canchas/cancha-add/cancha-add.component';
import { ReservasRoutingModule } from './reservas-routing.module';

@NgModule({
  declarations: [
    CanchasListComponent,
    CanchasComponent,
    CanchaAddComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    ReservasRoutingModule
  ],
  exports: [
    CanchasComponent
  ]
})
export class ReservasModule { }
