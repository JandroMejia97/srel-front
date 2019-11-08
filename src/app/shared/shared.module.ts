import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    ConfirmationDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
