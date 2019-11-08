import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [AuthComponent, RegisterComponent, LoginComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
