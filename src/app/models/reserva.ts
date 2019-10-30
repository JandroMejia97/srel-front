import { Cancha } from './cancha';
import { User } from './user';

export class Reserva {
  constructor(
  public id: number,
  public cliente: string,
  public cancha: Cancha,
  public fechaTurno: Date,
  public fechaReserva: Date,
  public empleado: User
  ) {}
}
