import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { TipoCancha } from '../models/tipo-cancha';
import { MensajeService } from './mensaje.service';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoCanchaService {
  private tipoCanchasUrl = environment.apiUrl;
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

  getTipoCanchas(...criterios: any[]): Observable<TipoCancha[]> {
    let filterParameters = '';
    if (criterios) {
      filterParameters = '?';
      criterios.forEach(criterio => {
        for (const key in criterio) {
          if (criterio.hasOwnProperty(key)) {
            filterParameters += `${key}=${criterio[key]}&`;
          }
        }
      });
    }
    return this.http.get<TipoCancha[]>(
      `${this.tipoCanchasUrl}/tipos${filterParameters}`,
      this.httpOptions
    ).pipe(
      tap(_ => console.log('Datos recuperados exitosamente')),
      catchError(this.handleError('getTipoCanchas()', []))
    );
  }

  getTipoCancha(id: number): Observable<TipoCancha> {
    const url = `${this.tipoCanchasUrl}/tipos/${id}`;
    return this.http.get<TipoCancha>(url, this.httpOptions).pipe(
        tap(_ => console.log('Datos recuperados exitosamente')),
        catchError(this.handleError<TipoCancha>(`getTipoCancha(id=${id})`))
      );
  }

  updateTipoCancha(tipoCancha: TipoCancha): Observable<any> {
    return this.http.put(`${this.tipoCanchasUrl}/tipos/${tipoCancha.id}/`, tipoCancha, this.httpOptions)
    .pipe(
      tap(_ => this.log('Datos actualizados exitosamente')),
      catchError(this.handleError<any>(`updateTipoCancha(id=${tipoCancha.id}, name: ${tipoCancha.tipo_cancha})`))
    );
  }

  addTipoCancha(tipoCancha: TipoCancha): Observable<any> {
    return this.http.post(`${this.tipoCanchasUrl}/tipos/`, tipoCancha, this.httpOptions)
    .pipe(
      tap(_ => this.log('Tipo de Cancha guardado exitosamente')),
      catchError(this.handleError<TipoCancha>('addTipoCancha()'))
    );
  }

  deleteTipoCancha(tipoCancha: TipoCancha | number): Observable<TipoCancha> {
    const id = typeof tipoCancha === 'number' ? tipoCancha : tipoCancha.id;
    const url = `${this.tipoCanchasUrl}/tipos/${id}/`;
    return this.http.delete<TipoCancha>(url, this.httpOptions)
    .pipe(
      tap(_ => this.log('Tipo de Cancha eliminada exitosamente')),
      catchError(this.handleError<TipoCancha>(`deleteTipoCancha(id=${id})`))
    );
  }

  private log(mensaje: string){
    this.mensajeService.openSnackBar(`${ mensaje }`, 'Cerrar');
  }

  handleError<T>(operacion: string = 'operacion()', resultado?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operacion} fallida: ${error.message}`);
      return of(resultado as T);
    };
  }
}
