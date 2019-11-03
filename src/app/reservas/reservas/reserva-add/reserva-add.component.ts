import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDatepickerInputEvent } from '@angular/material';
import { CanchaService } from 'src/app/services/cancha.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReservaService } from 'src/app/services/reserva.service';
import * as mom from 'moment';
import { Cancha } from 'src/app/models/cancha';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-reserva-add',
  templateUrl: './reserva-add.component.html',
  styleUrls: ['./reserva-add.component.css']
})
export class ReservaAddComponent implements OnInit {
  public canchas: Cancha[] = [];
  public reservas: Reserva[] = [];
  public form: FormGroup;
  public submitted = false;
  public minDate = new Date(Date.now());
  public maxDate = new Date((this.minDate.toString()));

  constructor(
    public dialogRef: MatDialogRef<ReservaAddComponent>,
    private formBuilder: FormBuilder,
    private canchaService: CanchaService,
    private reservaService: ReservaService,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) { }

  ngOnInit() {
    this.maxDate.setMonth(this.maxDate.getMonth() + 2);
    this.getCanchas();
    if (this.data.reserva) {
      this.form = this.formBuilder.group({
        cliente: [this.data.reserva.cliente, Validators.required],
        fecha_turno: new FormControl(this.data.reserva.fecha_turno),
        hora_turno: [this.data.reserva.hora_turno, Validators.required],
        tipo_cancha: [this.data.reserva.cancha, Validators.required]
      });
    } else {
      this.form = this.formBuilder.group({
        cliente: ['', Validators.required],
        fecha_turno: new FormControl(mom(Date.now()).format('YYYY-MM-DD')),
        hora_turno: ['', Validators.required],
        tipo_cancha: ['', Validators.required]
      });
    }
  }

  getCanchas() {
    this.canchaService.getCanchas(null).subscribe((data: any) => {
      this.canchas = data.results;
    });
  }


  getReservas(event: MatDatepickerInputEvent<Date>) {
    const fecha = mom(event.value).format('YYYY-MM-DD');
    console.log(fecha);
    this.reservaService.getReservas({fecha_turno: fecha}).subscribe((data: any) => {
      this.reservas = data.results;
      console.log(this.reservas);
    });
  }

  submitForm() {

  }

  onCancelar(): void {
    this.dialogRef.close();
  }

}
