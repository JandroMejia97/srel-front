import { TipoCancha } from './tipo-cancha';

export class Cancha {
  id: number;
  tipo: TipoCancha;
  nombre: string;
  codInterno: string;
  tieneVestuario: boolean;
  tieneIluminacion: boolean;
  tieneCespedSintetico: boolean;
}
