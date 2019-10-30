import { TipoCancha } from './tipo-cancha';

export class Cancha {
  constructor(
    public id: number,
    public nombre: string,
    public codInterno: string,
    public tieneVestuario: boolean,
    public tieneIluminacion: boolean,
    public tieneCespedSintetico: boolean,
    public tipo: TipoCancha
  ) {}

}
