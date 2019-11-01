import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { LoginObject } from '../models/login-object';
import { Session } from '../models/session';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  public error: {code: number, message: string} = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    console.log(this.form);
  }

  submitLogin(): void {
    this.submitted = true;
    this.error = null;
    if (this.form.valid) {
      this.authService.login(new LoginObject(this.form.value))
      .subscribe(
        data => this.correctLogin(data),
        error => this.error = JSON.parse(error._body));
    }
  }

  submitRegister(): void {
    this.submitted = true;
    this.error = null;
    if (this.form.valid) {
      this.authService.register(new LoginObject(this.form.value))
      .subscribe(
        data => this.submitLogin(),
        error => this.error = JSON.parse(error._body));
    }
  }

  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
    this.router.navigate(['canchas']);
  }

}
