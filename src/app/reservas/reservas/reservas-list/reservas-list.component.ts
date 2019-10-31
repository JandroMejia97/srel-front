import { Component, OnInit, Input } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/models/reserva';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-reservas-list',
  templateUrl: './reservas-list.component.html',
  styleUrls: ['./reservas-list.component.css']
})
export class ReservasListComponent implements OnInit {
  columnasMostradas: string[] = [
    'id',
    'fecha_turno',
    'fecha_reserva',
    'cliente',
    'acciones'
  ];
  public reservas: Reserva[];
  public tabla;
  @Input() idCancha: number;

  constructor(
    private reservaService: ReservaService
  ) { }

  ngOnInit() {
    if (this.idCancha) {
      this.getReservasFiltered(this.idCancha);
    } else {
      this.getReservas();
    }
  }

  getReservas(): void {
    this.reservaService.getReservas().subscribe(reservas => {
      if (reservas.hasOwnProperty('results') ) {
        this.reservas = reservas['results'];
      }
      this.tabla = new MatTableDataSource(this.reservas);
    });
  }

  getReservasFiltered(idCancha: number): void {
    this.reservaService.getReservasFiltered(idCancha).subscribe(reservas => {
      if (reservas.hasOwnProperty('results') ) {
        this.reservas = reservas['results'];
      }
      this.tabla = new MatTableDataSource(this.reservas);
    });
  }

}
