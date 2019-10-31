import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
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
    'id',
    'nombre',
    'tipo',
    'tiene_vestuario',
    'tiene_iluminacion',
    'tiene_cesped_sintetico',
    'acciones'
  ];
  public canchas: Cancha[];
  public cancha: Cancha;
  public dialogActions: string;
  public tabla;

  constructor(
    private canchaService: CanchaService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCanchas();
  }

  getCanchas(): void {
    this.canchaService.getCanchas().subscribe(canchas => {
      if (canchas.hasOwnProperty('results')) {
        this.canchas = canchas['results'];
      }
      this.tabla = new MatTableDataSource(this.canchas);
    });
  }

  getCancha(id: number): void {
    this.canchaService.getCancha(id).subscribe(cancha => {
      this.cancha = cancha;
      this.openDialog();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CanchaDetailComponent, {
      height: '90vh',
      width: '50%',
      data: {cancha: this.cancha}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  aplicarFiltro(valor: string) {
    this.tabla.filter = valor.trim().toLowerCase();
  }
}
