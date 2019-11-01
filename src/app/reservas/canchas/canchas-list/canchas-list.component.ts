import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort'
import { CanchaService } from 'src/app/services/cancha.service';
import { Cancha } from 'src/app/models/cancha';
import { CanchaDetailComponent } from '../cancha-detail/cancha-detail.component';

@Component({
  selector: 'app-canchas-list',
  templateUrl: './canchas-list.component.html',
  styleUrls: ['./canchas-list.component.css']
})
export class CanchasListComponent implements OnInit {
  columnasMostradas: string[] = [
    'nombre',
    'tipo',
    'tiene_vestuario',
    'tiene_iluminacion',
    'tiene_cesped_sintetico',
    'acciones'
  ];
  public cancha: Cancha;
  public dialogActions: string;
  public dataSource = new MatTableDataSource<Cancha>([]);
  public cantItems = 25;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private canchaService: CanchaService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCanchas();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCanchas(): void {
    this.canchaService.getCanchas(this.cantItems).subscribe((canchas: any) => {
      this.dataSource.data = canchas.results;
    });
  }

  getCancha(id: number): void {
    this.canchaService.getCancha(id).subscribe(cancha => {
      this.cancha = cancha;
      this.openDetailDialog();
    });
  }

  openDetailDialog() {
    const dialogRef = this.dialog.open(CanchaDetailComponent, {
      height: '90vh',
      minWidth: '50%',
      data: {cancha: this.cancha}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  aplicarFiltro(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  deleteCancha(cancha: Cancha) {
    this.canchaService.deleteCancha(cancha.id).subscribe(

    );
  }
}
