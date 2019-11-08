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
  public minDate = new Date(Date.now());
  public maxDate = new Date((this.minDate.toString()));
  public date?: Date;

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
      this.date = new Date(this.data.reserva.fecha_turno);
      this.form = this.formBuilder.group({
        id: [this.data.reserva.id, Validators.required],
        cliente: [this.data.reserva.cliente, Validators.required],
        cancha: new FormControl(this.data.reserva.cancha.id, [Validators.required]),
        fecha_turno: [this.date, Validators.required],
        hora_turno: [mom(this.date).format('HH:mm')]
      });
    } else {
      this.date = new Date();
      this.form = this.formBuilder.group({
        cliente: ['', Validators.required],
        cancha: new FormControl('', [Validators.required]),
        fecha_turno: [this.date, Validators.required],
        hora_turno: [mom(this.date).format('HH:mm')]
      });
    }
  }

  getCanchas() {
    this.canchaService.getCanchas(null).subscribe((data: any) => {
      this.canchas = data.results;
    });
  }

  getReservas() {
    const tipoCancha = this.form.get('cancha');
    const fecha = this.form.get('fecha_turno');
    if (tipoCancha.valid && fecha.valid) {
      this.reservaService.getReservas({
        fecha_turno: mom(fecha.value).format('YYYY-MM-DD'),
        cancha: tipoCancha.value
      }).subscribe((data: any) => {
        this.reservas = data.results;
      });
    }
  }

  public turnoValidator(): boolean {
    const date = this.stringToMoment(this.form.get('fecha_turno').value);
    const time = mom(this.form.get('hora_turno').value.toString(), 'HH:mm');
    const turno = date.set({
      hours: time.get('hours'),
      minutes: time.get('minutes')
    });
    let valid = true;
    for (const reserva of this.reservas) {
      const fechaTurno = mom(
        reserva.fecha_turno + ' ' + reserva.hora_turno,
        'YYYY-MM-DD HH:mm'
      );
      const startDate = mom(fechaTurno).subtract(1, 'hours');
      const endDate = mom(fechaTurno).add(1, 'hours');
      if (turno.isBetween(startDate, endDate, null, '[]')) {
        valid = false;
        break;
      }
    }
    return valid;
  }

  formValid() {
    return (this.form.valid && this.turnoValidator()) ? true : false;
  }

  stringToMoment(fecha: any): mom.Moment {
    const vector = fecha.toString().split(' ');
    let nuevaCadena = '';
    for (let i = 0; i < 6; i++) {
      nuevaCadena += vector[i] + ' ';
    }
    return mom(
      nuevaCadena,
      'ddd MMM DD YYYY HH:mm:ss Z ZZ'
    );
  }

  submitForm() {
    if (this.formValid()) {
      const reserva = this.form.value;
      reserva.fecha_turno = this.stringToMoment(reserva.fecha_turno).format('YYYY-MM-DD');
      if (this.data.reserva) {
        this.dialogRef.close(reserva);
      } else {
        this.dialogRef.close(reserva);
      }
    }
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

}
