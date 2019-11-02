import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/models/reserva';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ReservaDetailComponent } from '../reserva-detail/reserva-detail.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

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
    this.reservaService.getReservas({page_size: 'page_size', cantItems: this.cantItems}).subscribe((reservas: any) => {
      this.dataSource.data = reservas.results;
    });
  }

  getReservasFiltered(idCancha: number): void {
    this.reservaService.getReservas({cancha: 'cancha', idCancha}).subscribe((reservas: any) => {
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
      this.openDialog();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ReservaDetailComponent, {
      height: '45vh',
      minWidth: '50%',
      data: {reserva: this.reserva}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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

  deleteReserva(reserva: Reserva) {
    this.reservaService.deleteReserva(reserva.id).subscribe(_ => this.getReservas());
  }
}
