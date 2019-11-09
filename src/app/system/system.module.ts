import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatSortModule,
  MatListModule,
  MatChipsModule,
  MatInputModule,
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { CanchasListComponent } from './canchas/canchas-list/canchas-list.component';
import { CanchasComponent } from './canchas/canchas.component';
import { CanchaAddComponent } from './canchas/cancha-add/cancha-add.component';
import { SystemRoutingModule } from './system-routing.module';
import { CanchaDetailComponent } from './canchas/cancha-detail/cancha-detail.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservasListComponent } from './reservas/reservas-list/reservas-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservaDetailComponent } from './reservas/reserva-detail/reserva-detail.component';
import { ReservaAddComponent } from './reservas/reserva-add/reserva-add.component';
import { TiposComponent } from './tipos/tipos.component';
import { TiposListComponent } from './tipos/tipos-list/tipos-list.component';
import { TipoDetailComponent } from './tipos/tipo-detail/tipo-detail.component';
import { TipoAddComponent } from './tipos/tipo-add/tipo-add.component';
import { BooleanToStringPipe } from '../pipe/boolean-to-string.pipe';
import { ActionsComponent } from './actions/actions.component';
import { AdvancedComponent } from './actions/advanced/advanced.component';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    TiposComponent,
    ActionsComponent,
    TipoAddComponent,
    CanchasComponent,
    ReservasComponent,
    AdvancedComponent,
    TiposListComponent,
    CanchaAddComponent,
    ReservaAddComponent,
    TipoDetailComponent,
    BooleanToStringPipe,
    CanchasListComponent,
    CanchaDetailComponent,
    ReservasListComponent,
    ReservaDetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatSortModule,
    MatListModule,
    MatChipsModule,
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
    SystemRoutingModule
  ],
  providers: [AuthService],
  entryComponents: [
    TipoAddComponent,
    AdvancedComponent,
    CanchaAddComponent,
    ReservaAddComponent,
    TipoDetailComponent,
    CanchaDetailComponent,
    ReservaDetailComponent
  ]
})
export class SystemModule { }
