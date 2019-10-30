import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MensajeService } from './mensaje.service';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginObject } from '../models/login-object';
import { Session } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userUrl = 'http://localhost:8000';
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };
  public token: string;

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService,
    private router: Router
  ) { }

  login(user: LoginObject): Observable<Session> {
    return this.http.post<Session>(this.userUrl + '/api/auth', { username: user.username, password: user.password }, this.httpOptions)
    .pipe(
      tap(_ => this.log('Se inició sesión exitosamente')),
      catchError(this.handleError<Session>(`login(username: ${user.username})`))
    );
  }

  register(user: LoginObject): Observable<Session> {
    return this.http.post<Session>(this.userUrl + '/users/', { username: user.username, password: user.password }, this.httpOptions)
    .pipe(
      tap(_ => this.log(`Se resgistró al usuario ${user.username} exitosamente`)),
      catchError(this.handleError<Session>(`Register(username: ${user.username})`))
    );
  }

  private log(mensaje: string) {
    this.mensajeService.openSnackBar(`${ mensaje }`);
  }

  handleError<T>(operacion: string = 'operacion()', resultado?: T) {
    return (error: any): Observable<T> => {
      if (error.error) {
        let errorMessage = '';
        for (const key in error.error) {
          if (error.error.hasOwnProperty(key)) {
            errorMessage += (key).toUpperCase() + ': ' + error.error[key];
          }
        }
        this.log(`${errorMessage}`);
      }
      return of(resultado as T);
    };
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
