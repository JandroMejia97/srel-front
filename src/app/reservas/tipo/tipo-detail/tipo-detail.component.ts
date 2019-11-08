import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tipo-detail',
  templateUrl: './tipo-detail.component.html',
  styleUrls: ['./tipo-detail.component.css']
})
export class TipoDetailComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<TipoDetailComponent>
  ) { }

  onCancelar(): void {
    this.dialogRef.close();
  }

}
