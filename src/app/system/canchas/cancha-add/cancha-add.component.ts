import { Component, OnInit, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TipoCancha } from 'src/app/models/tipo-cancha';
import { TipoCanchaService } from 'src/app/services/tipo.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cancha-add',
  templateUrl: './cancha-add.component.html',
  styleUrls: ['./cancha-add.component.css']
})
export class CanchaAddComponent implements OnInit {
  public tipos: TipoCancha[] = [];
  public form: FormGroup;
  public submitted = false;

  constructor(
    public dialogRef: MatDialogRef<CanchaAddComponent>,
    private formBuilder: FormBuilder,
    private tipoService: TipoCanchaService,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) { }

  ngOnInit() {
    this.getTipos();
    if (this.data.cancha) {
      this.form = this.formBuilder.group({
        id: [this.data.cancha.id, Validators.required],
        tipo: new FormControl(this.data.cancha.tipo.id, [Validators.required]),
        nombre: [this.data.cancha.nombre, Validators.required],
        cod_interno: [this.data.cancha.cod_interno, Validators.required],
        tiene_vestuario: [this.data.cancha.tiene_vestuario, Validators.required],
        tiene_iluminacion: [this.data.cancha.tiene_iluminacion, Validators.required],
        tiene_cesped_sintetico: [this.data.cancha.tiene_iluminacion, Validators.required]
      });
    } else {
      this.form = this.formBuilder.group({
        tipo: new FormControl('', [Validators.required]),
        nombre: ['', Validators.required],
        cod_interno: ['', Validators.required],
        tiene_vestuario: [false, Validators.required],
        tiene_iluminacion: [false, Validators.required],
        tiene_cesped_sintetico: [false, Validators.required]
      });
    }
  }

  getTipos() {
    this.tipoService.getTipoCanchas().subscribe((data: any) => {
      this.tipos = data.results;
    });
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

}
