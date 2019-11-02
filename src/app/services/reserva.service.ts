import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Reserva } from '../models/reserva';
import { MensajeService } from './mensaje.service';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private reservasUrl = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `token ${this.storageService.getCurrentToken()}`
    })
  };

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService,
    private storageService: StorageService
  ) { }

  getReservas(...criterios: any[]): Observable<Reserva[]> {
    let filterParameters = '';
    for (const key in criterios) {
      if(criterios.hasOwnProperty(key)) {
        filterParameters += `${key}=${criterios[key]}`;
      }
    }
    return this.http.get<Reserva[]>(
      `${this.reservasUrl}/reservas?${filterParameters}`,
      this.httpOptions
    ).pipe(
      tap(_ => console.log('Datos recuperados exitosamente')),
      catchError(this.handleError('getReservas()', []))
    );
  }

  /*getReservas(pageSize: number = 25): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(
      `${this.reservasUrl}/reservas?page_size=${pageSize}`,
      this.httpOptions
    ).pipe(
      tap(_ => console.log('Datos recuperados exitosamente')),
      catchError(this.handleError('getReservas()', []))
    );
  }*/

  getReserva(id: number): Observable<Reserva> {
    const url = `${this.reservasUrl}/reservas/${id}`;
    return this.http.get<Reserva>(url, this.httpOptions).pipe(
        tap(_ => console.log('Datos recuperados exitosamente')),
        catchError(this.handleError<Reserva>(`getReserva(id=${id})`))
      );
  }

  updateReserva(reserva: Reserva): Observable<any> {
    return this.http.put(this.reservasUrl, reserva, this.httpOptions)
    .pipe(
      tap(_ => this.log('Datos actualizados exitosamente')),
      catchError(this.handleError<any>(`updateReserva(id=${reserva.id}, fecha: ${reserva.fecha_reserva})`))
    );
  }

  addReserva(reserva: Reserva): Observable<any> {
    return this.http.post(this.reservasUrl, reserva, this.httpOptions)
    .pipe(
      tap(_ => this.log('Reserva guardada exitosamente')),
      catchError(this.handleError<Reserva>('addReserva()'))
    );
  }

  deleteReserva(reserva: Reserva | number): Observable<Reserva> {
    const id = typeof reserva === 'number' ? reserva : reserva.id;
    const url = `${this.reservasUrl}/reservas/${id}/`;
    return this.http.delete<Reserva>(url, this.httpOptions)
    .pipe(
      tap(_ => this.log('Reserva eliminada exitosamente')),
      catchError(this.handleError<Reserva>(`deleteReserva(id=${id})`))
    );
  }

  private log(mensaje: string) {
    this.mensajeService.openSnackBar(`${ mensaje }`);
  }

  handleError<T>(operacion: string = 'operacion()', resultado?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operacion} fallida: ${error.message}`);
      return of(resultado as T);
    };
  }
}
