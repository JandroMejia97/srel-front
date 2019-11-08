import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';


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
