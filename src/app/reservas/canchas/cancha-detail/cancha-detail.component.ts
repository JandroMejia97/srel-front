import { Component, Inject } from '@angular/core';
import { Cancha } from 'src/app/models/cancha';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cancha-detail',
  templateUrl: './cancha-detail.component.html',
  styleUrls: ['./cancha-detail.component.css']
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
