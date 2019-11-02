import { TipoCancha } from './tipo-cancha';

export class Cancha {
  constructor(
    public nombre: string,
    public cod_interno: string,
    public tiene_vestuario: boolean,
    public tiene_iluminacion: boolean,
    public tiene_cesped_sintetico: boolean,
    public tipo: TipoCancha,
    public id: number = null
  ) {}

}
