import { Cancha } from '../models/cancha';
import { TIPOS } from './mock-tipo';

export const CANCHAS: Cancha[] = [
  {
    id: 1,
    nombre: 'La Diego Armando',
    codInterno: 'full-AF321',
    tieneVestuario: true,
    tieneIluminacion: false,
    tieneCespedSintetico: true,
    tipo: TIPOS[1]
  },
  {
    id: 2,
    nombre: 'Terranova',
    codInterno: 'full2',
    tieneVestuario: true,
    tieneIluminacion: false,
    tieneCespedSintetico: false,
    tipo: TIPOS[2]
  }
];
