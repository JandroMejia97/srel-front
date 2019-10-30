import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Session } from 'src/app/models/session';
import { LoginObject } from 'src/app/models/login-object';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted = false;
  public error: {code: number, message: string} = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitRegister(): void {
    this.submitted = true;
    this.error = null;
    if (this.registerForm.valid) {
      this.authService.register(new LoginObject(this.registerForm.value))
      .subscribe(
        data => this.correctLogin(data),
        error => this.error = JSON.parse(error._body));
    }
  }

  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
  }

}
