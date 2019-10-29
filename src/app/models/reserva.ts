import { Cancha } from './cancha';
import { User } from './user';

export class Reserva {
  id: number;
  cliente: string;
  cancha: Cancha;
  fechaTurno: Date;
  fechaReserva: Date;
  empleado: User;
}
