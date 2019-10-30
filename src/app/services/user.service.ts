import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'https://localhost:8000/api/auth';
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService
  ) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, { username: user.username, password: user.password }, this.httpOptions)
    .pipe(
      tap(_ => this.log('Datos actualizados exitosamente')),
      catchError(this.handleError<User>(`login(username: ${user.username})`))
    );
  }

  private log(mensaje: string){
    this.mensajeService.add(`HeroService: ${ mensaje }`)
  }

  handleError<T>(operacion: string = 'operacion()', resultado?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operacion} fallida: ${error.message}`);
      return of(resultado as T);
    };
  }
}
