import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ReservasModule } from './reservas/reservas.module';
import { BooleanStringPipe } from './pipe/boolean-string.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    BooleanStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    CoreModule,
    ReservasModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
