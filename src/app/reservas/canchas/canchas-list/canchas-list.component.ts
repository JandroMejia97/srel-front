import { Component, OnInit } from '@angular/core';
import { CANCHAS } from 'src/app/data/mock-canchas';
import { MatTableDataSource } from '@angular/material';

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
  public canchas = new MatTableDataSource(CANCHAS);


  constructor() {console.log(this.canchas)}

  ngOnInit() {
  }

  aplicarFiltro(valor: string) {
    this.canchas.filter = valor.trim().toLowerCase();
  }
}
