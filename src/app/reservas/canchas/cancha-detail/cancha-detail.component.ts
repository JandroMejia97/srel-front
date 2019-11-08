import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cancha-detail',
  templateUrl: './cancha-detail.component.html'
})
export class CanchaDetailComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<CanchaDetailComponent>
  ) { }

  onCancelar(): void {
    this.dialogRef.close();
  }

}
