import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort'
import { CanchaService } from 'src/app/services/cancha.service';
import { Cancha } from 'src/app/models/cancha';
import { CanchaDetailComponent } from '../cancha-detail/cancha-detail.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { CanchaAddComponent } from '../cancha-add/cancha-add.component';
import { AdvancedComponent } from '../../actions/advanced/advanced.component';

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
  @Input() idTipo: number;
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
    if (this.idTipo) {
      this.getCanchasFiltered({tipo: this.idTipo});
    } else {
      this.getCanchas();
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getCanchas(): void {
    this.canchaService.getCanchas({page_size: this.cantItems}).subscribe((canchas: any) => {
      this.dataSource.data = canchas.results;
    });
  }

  getCanchasFiltered(criterios: any): void {
    this.canchaService.getCanchas(criterios).subscribe((canchas: any) => {
      this.dataSource.data = canchas.results;
    });
  }

  getCancha(id: number): void {
    this.canchaService.getCancha(id).subscribe(cancha => {
      this.cancha = cancha;
      this.openDetailDialog();
    });
  }

  deleteCancha(cancha: Cancha) {
    this.canchaService.deleteCancha(cancha.id).subscribe(_ => this.getCanchas());
  }

  addCancha(cancha: Cancha) {
    this.canchaService.addCancha(cancha).subscribe(_ => this.getCanchas());
  }

  updateCancha(cancha: Cancha) {
    this.canchaService.updateCancha(cancha).subscribe(_ => this.getCanchas());
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(CanchaAddComponent, {
      minWidth: '50%',
      data: {cancha: null, title: 'Añade una Cancha'}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.addCancha(result);
      }
    });
  }

  openEditDialog(cancha: Cancha) {
    const dialogRef = this.dialog.open(CanchaAddComponent, {
      minWidth: '50%',
      data: {cancha, title: 'Editando: ' + cancha.nombre}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateCancha(result);
      }
    });
  }

  openDetailDialog() {
    const dialogRef = this.dialog.open(CanchaDetailComponent, {
      maxHeight: '90vh',
      minWidth: '50%',
      data: {cancha: this.cancha}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openEditDialog(result);
      }
    });
  }

  openConfirmDialog(cancha: Cancha) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: `Eliminar: ${cancha.nombre}`,
        content: `¿Seguro que desea eliminar esta cancha?`,
        icon: 'delete_forever',
        color: 'warn'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteCancha(cancha);
      }
    });
  }

  openAdvancedFilterDialog() {
    const dialogRef = this.dialog.open(AdvancedComponent, {
      maxHeight: '90vh',
      minWidth: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getCanchasFiltered(result);
      }
    });
  }
}
