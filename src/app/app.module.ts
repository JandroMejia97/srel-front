import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ReservasModule } from './reservas/reservas.module';
import { BooleanStringPipe } from './pipe/boolean-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooleanStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ReservasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
