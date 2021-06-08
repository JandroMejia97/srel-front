import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tipo-add',
  templateUrl: './tipo-add.component.html',
  styleUrls: ['./tipo-add.component.css']
})
export class TipoAddComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;

  constructor(
    public dialogRef: MatDialogRef<TipoAddComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) { }

  ngOnInit() {
    if (this.data.tipo) {
      this.form = this.formBuilder.group({
        id: ['', Validators.required],
        tipo_cancha: ['', Validators.required],
      });
      this.form.patchValue(this.data.tipo);
    } else {
      this.form = this.formBuilder.group({
        tipo_cancha: ['', Validators.required]
      });
    }
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

}
