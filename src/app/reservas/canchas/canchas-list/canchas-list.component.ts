import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CanchaService } from 'src/app/services/cancha.service';
import { Cancha } from 'src/app/models/cancha';

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
    'tieneVestuario',
    'tieneIluminacion',
    'tieneCespedSintetico'
  ];
  public canchas: Cancha[];
  public tabla = new MatTableDataSource(this.canchas);

  constructor(
    private canchaService: CanchaService
  ) {}

  ngOnInit() {
    this.getCanchas();
  }

  getCanchas(): void {
    this.canchaService.getCanchas().subscribe(
    canchas => this.canchas = canchas
    );
  }

  aplicarFiltro(valor: string) {
    this.tabla.filter = valor.trim().toLowerCase();
  }
}
