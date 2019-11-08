import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/models/reserva';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ReservaDetailComponent } from '../reserva-detail/reserva-detail.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { ReservaAddComponent } from '../reserva-add/reserva-add.component';

import * as mom from 'moment';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-reservas-list',
  templateUrl: './reservas-list.component.html',
  styleUrls: ['./reservas-list.component.css']
})
export class ReservasListComponent implements OnInit {
  columnasMostradas: string[] = [
    'fecha_turno',
    'fecha_reserva',
    'cliente',
    'cancha',
    'acciones'
  ];
  public reserva: Reserva;
  public dataSource = new MatTableDataSource<Reserva>([]);
  public cantItems = 25;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @Input() idCancha: number;

  constructor(
    private reservaService: ReservaService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    if (this.idCancha) {
      this.getReservasFiltered(this.idCancha);
    } else {
      this.getReservas();
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getReservas(): void {
    this.reservaService.getReservas({page_size: this.cantItems}).subscribe((reservas: any) => {
      this.dataSource.data = reservas.results;
    });
  }

  getReservasFiltered(idCancha: number): void {
    this.reservaService.getReservas({cancha: idCancha}).subscribe((reservas: any) => {
      const data = this.dataSource.data;
      reservas.results.forEach(reserva => {
        data.push(reserva);
      });
      this.dataSource.data = data;
    });
  }

  getReserva(id: number): void {
    this.reservaService.getReserva(id).subscribe(reserva => {
      this.reserva = reserva;
      this.openDetailDialog();
    });
  }

  addReserva(reserva: Reserva) {
    this.reservaService.addReserva(reserva).subscribe(_ => this.getReservas());
  }

  updateReserva(reserva: Reserva) {
    this.reservaService.updateReserva(reserva).subscribe(_ => this.getReservas());
  }

  deleteReserva(reserva: Reserva) {
    this.reservaService.deleteReserva(reserva.id).subscribe(_ => this.getReservas());
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(ReservaAddComponent, {
      minWidth: '50%',
      data: {reserva: null, title: 'Añade una Reserva'}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.addReserva(result);
      }
    });
  }

  openEditDialog(reserva: Reserva) {
    const dialogRef = this.dialog.open(ReservaAddComponent, {
      minWidth: '50%',
      data: {reserva, title: 'Editando la Reserva hecha el ' + mom(reserva.fecha_reserva).format('YYYY-MM-DD')}
    });

    dialogRef.afterClosed().pipe(
      filter(result => result)
    ).subscribe(result => {
      if (result) {
        this.addReserva(result);
      }
    });
  }

  openDetailDialog() {
    const dialogRef = this.dialog.open(ReservaDetailComponent, {
      maxHeight: '90vh',
      minWidth: '50%',
      data: {reserva: this.reserva}
    });

    dialogRef.afterClosed().pipe(
      filter(result => result)
    ).subscribe(result => {
      if (result) {
        this.openEditDialog(result);
      }
    });
  }

  openConfirmDialog(reserva: Reserva) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: `Eliminar: ${reserva.fecha_turno}`,
        content: `¿Seguro que desea eliminar esta reserva?`,
        icon: 'delete_forever',
        color: 'warn'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteReserva(reserva);
      }
    });
  }

}
