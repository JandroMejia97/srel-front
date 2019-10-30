import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensaje: string;

  constructor() { }

  add(mensaje: string) {
    this.mensaje = mensaje;
  }


}
