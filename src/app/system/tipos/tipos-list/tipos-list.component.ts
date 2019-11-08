import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoAddComponent } from '../tipo-add/tipo-add.component';
import { TipoDetailComponent } from '../tipo-detail/tipo-detail.component';
import { TipoCancha } from 'src/app/models/tipo-cancha';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { TipoCanchaService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-tipo-list',
  templateUrl: './tipos-list.component.html',
  styleUrls: ['./tipos-list.component.css']
})
export class TiposListComponent implements OnInit {
  columnasMostradas: string[] = [
    'tipo_cancha',
    'acciones'
  ];
  public tipo: TipoCancha;
  public dialogActions: string;
  public dataSource = new MatTableDataSource<TipoCancha>([]);
  public cantItems = 25;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private tipoService: TipoCanchaService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getTipoCanchas();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getTipoCanchas(): void {
    this.tipoService.getTipoCanchas({page_size: this.cantItems}).subscribe((tipos: any) => {
      this.dataSource.data = tipos.results;
    });
  }

  getTipoCancha(id: number): void {
    this.tipoService.getTipoCancha(id).subscribe(tipo => {
      this.tipo = tipo;
      this.openDetailDialog();
    });
  }

  deleteTipoCancha(tipo: TipoCancha) {
    this.tipoService.deleteTipoCancha(tipo.id).subscribe(_ => this.getTipoCanchas());
  }

  addTipoCancha(tipo: TipoCancha) {
    this.tipoService.addTipoCancha(tipo).subscribe(_ => this.getTipoCanchas());
  }

  updateTipoCancha(tipo: TipoCancha) {
    this.tipoService.updateTipoCancha(tipo).subscribe(_ => this.getTipoCanchas());
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(TipoAddComponent, {
      minWidth: '50%',
      data: {tipo: null, title: 'Añade un nuevo Tipo de Cancha'}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.addTipoCancha(result);
      }
    });
  }

  openEditDialog(tipo: TipoCancha) {
    const dialogRef = this.dialog.open(TipoAddComponent, {
      minWidth: '50%',
      data: {tipo, title: 'Editando: ' + tipo.tipo_cancha}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateTipoCancha(result);
      }
    });
  }

  openDetailDialog() {
    const dialogRef = this.dialog.open(TipoDetailComponent, {
      maxHeight: '90vh',
      minWidth: '50%',
      data: {tipo: this.tipo}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openEditDialog(result);
      }
    });
  }

  openConfirmDialog(tipo: TipoCancha) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: `Eliminar: ${tipo.tipo_cancha}`,
        content: `¿Seguro que desea eliminar esta tipo de cancha?`,
        icon: 'delete_forever',
        color: 'warn'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteTipoCancha(tipo);
      }
    });
  }
}
