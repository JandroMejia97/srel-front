import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDatepickerInputEvent } from '@angular/material';
import { TipoCanchaService } from 'src/app/services/tipo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservaService } from 'src/app/services/reserva.service';
import * as mom from 'moment';
import { TipoCancha } from 'src/app/models/tipo-cancha';

@Component({
  selector: 'app-reserva-add',
  templateUrl: './reserva-add.component.html',
  styleUrls: ['./reserva-add.component.css']
})
export class ReservaAddComponent implements OnInit {
  public tipos: TipoCancha[] = [];
  public form: FormGroup;
  public submitted = false;
  public minDate = new Date(Date.now());
  public maxDate = new Date((this.minDate.toString()));

  constructor(
    public dialogRef: MatDialogRef<ReservaAddComponent>,
    private formBuilder: FormBuilder,
    private tipoService: TipoCanchaService,
    private reservaService: ReservaService,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) { }

  ngOnInit() {
    this.maxDate.setMonth(this.maxDate.getMonth() + 2);
    this.getTipos();
    this.form = this.formBuilder.group({
      cliente: ['', Validators.required],
      fecha_turno: ['', Validators.required],
      hora_turno: ['', Validators.required],
      tipo_cancha: ['', Validators.required]
    });
  }

  getTipos() {
    this.tipoService.getTipoCanchas().subscribe((data: any) => {
      this.tipos = data.results;
    });
  }


  getReservas(event: MatDatepickerInputEvent<Date>) {
    const fecha = mom(event.value).format('YYYY-MM-DD');
    console.log(fecha);
    this.reservaService.getReservas('fecha_turno', fecha).subscribe((data: any) => {
      this.tipos = data.results;
    });
  }

  submitForm() {

  }

  onCancelar(): void {
    this.dialogRef.close();
  }

}
