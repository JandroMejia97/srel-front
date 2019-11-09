import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { SystemModule } from './system/system.module';
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AuthModule,
    CoreModule,
    SystemModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
