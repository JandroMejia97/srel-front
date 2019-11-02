import { Cancha } from './cancha';
import { User } from './user';
import { Time } from '@angular/common';

export class Reserva {
  constructor(
  public id: number,
  public cliente: string,
  public cancha: Cancha,
  public fecha_turno: Date,
  public hora_turno: Time,
  public fecha_reserva: Date,
  public empleado: User
  ) {}
}
