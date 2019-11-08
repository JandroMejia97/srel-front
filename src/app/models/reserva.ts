import { Cancha } from './cancha';
import { User } from './user';
import { Time } from '@angular/common';
import * as mom from 'moment';

export class Reserva {
  constructor(
  public id: number,
  public cliente: string,
  public cancha: Cancha,
  public fecha_turno: string,
  public hora_turno: Time,
  public fecha_reserva: string,
  public empleado: User
  ) {}
}
