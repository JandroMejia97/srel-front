import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { Cancha } from "../models/cancha";
import { MensajeService } from "./mensaje.service";
import { StorageService } from "./storage.service";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class CanchaService {
  private canchasUrl = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json",
      Authorization: `token ${this.storageService.getCurrentToken()}`,
    }),
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private mensajeService: MensajeService,
    private storageService: StorageService
  ) {}

  getCanchas(...criterios: any[]): Observable<Cancha[]> {
    const path = this.router.createUrlTree(["/canchas"], {
      queryParams: { ...criterios[0] },
    });
    return this.http
      .get<Cancha[]>(`${this.canchasUrl}${path.toString()}`, this.httpOptions)
      .pipe(
        tap((_) => console.log("Datos recuperados exitosamente")),
        catchError(this.handleError("getCanchas()", []))
      );
  }

  getCancha(id: number): Observable<Cancha> {
    const url = `${this.canchasUrl}/canchas/${id}`;
    return this.http.get<Cancha>(url, this.httpOptions).pipe(
      tap((_) => console.log("Datos recuperados exitosamente")),
      catchError(this.handleError<Cancha>(`getCancha(id=${id})`))
    );
  }

  updateCancha(cancha: Cancha): Observable<any> {
    return this.http
      .put(`${this.canchasUrl}/canchas/${cancha.id}/`, cancha, this.httpOptions)
      .pipe(
        tap((_) => this.log("Datos actualizados exitosamente")),
        catchError(
          this.handleError<any>(
            `updateCancha(id=${cancha.id}, name: ${cancha.nombre})`
          )
        )
      );
  }

  addCancha(cancha: Cancha): Observable<any> {
    return this.http
      .post(`${this.canchasUrl}/canchas/`, cancha, this.httpOptions)
      .pipe(
        tap((_) => this.log("Cancha guardada exitosamente")),
        catchError(this.handleError<Cancha>("addCancha()"))
      );
  }

  deleteCancha(cancha: Cancha | number): Observable<Cancha> {
    const id = typeof cancha === "number" ? cancha : cancha.id;
    const url = `${this.canchasUrl}/canchas/${id}/`;
    return this.http.delete<Cancha>(url, this.httpOptions).pipe(
      tap((_) => this.log("Cancha eliminada exitosamente")),
      catchError(this.handleError<Cancha>(`deleteCancha(id=${id})`))
    );
  }

  private log(mensaje: string) {
    this.mensajeService.openSnackBar(`${mensaje}`);
  }

  handleError<T>(operacion: string = "operacion()", resultado?: T) {
    return (error: any): Observable<T> => {
      if (error.error) {
        for (const key in error.error) {
          if (error.error.hasOwnProperty(key)) {
            this.log(`${key.toUpperCase()}: ${error.error[key]}`);
          }
        }
      }
      return of(resultado as T);
    };
  }
}
