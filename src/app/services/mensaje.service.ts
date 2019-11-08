import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(
    public snackBar: MatSnackBar
  ) { }

  openSnackBar(mensaje: string, accion: string = 'OK', duracion: number = 4000) {
    this.snackBar.open(mensaje, accion, {
      duration: duracion,
    });
  }

}
