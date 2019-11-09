import { Component, OnInit } from '@angular/core';
import { TipoCanchaService } from 'src/app/services/tipo.service';
import { TipoCancha } from 'src/app/models/tipo-cancha';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  public tiposCancha: TipoCancha[] = [];
  public form: FormGroup;
  constructor(
    private tipoCanchaService: TipoCanchaService,
    public dialogRef: MatDialogRef<AdvancedComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getTipoCanchas();
    this.form = this.formBuilder.group({
      tipo: new FormControl(null),
      tiene_vestuario: new FormControl(null),
      tiene_iluminacion: new FormControl(null),
      tiene_cesped_sintetico: new FormControl(null)
    });
  }

  getTipoCanchas(): void {
    this.tipoCanchaService.getTipoCanchas({page_size: 100}).subscribe((data: any) => {
      this.tiposCancha = data.results;
    });
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

}
