import { Cancha } from './cancha';
import { User } from './user';

export class Reserva {
  constructor(
  public id: number,
  public cliente: string,
  public cancha: Cancha,
  public fecha_turno: Date,
  public fecha_reserva: Date,
  public empleado: User
  ) {}
}
