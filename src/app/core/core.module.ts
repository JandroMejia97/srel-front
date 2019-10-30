import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { AuthorizatedGuard } from '../services/auth-guard';


@NgModule({
  declarations: [ToolBarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ToolBarComponent
  ],
  providers: [
    AuthorizatedGuard
  ]
})
export class CoreModule { }
