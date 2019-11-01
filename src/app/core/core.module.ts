import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { AuthorizatedGuard } from '../services/auth-guard';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ToolBarComponent, SideBarComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  exports: [
    ToolBarComponent,
    SideBarComponent
  ],
  providers: [
    AuthorizatedGuard
  ]
})
export class CoreModule { }
