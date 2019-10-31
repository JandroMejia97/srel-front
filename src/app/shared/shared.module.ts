import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
