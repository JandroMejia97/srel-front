import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = new User(0, '', '', '');
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const dato = this.form.value;
    if (dato.username && dato.password) {
      this.user.username = dato.username;
      this.user.password = dato.password;
      this.userService.login(this.user).subscribe(
        () => {
            console.log('User is logged in');
            this.router.navigateByUrl('');
        }
    );
    }
  }
}
