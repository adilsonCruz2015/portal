import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutoRoutingModule } from './instituto-routing.module';
import { InstitutiInfoComponent } from './instituti-info/instituti-info.component';

@NgModule({
  declarations: [InstitutiInfoComponent],
  imports: [
    CommonModule,
    InstitutoRoutingModule
  ]
})
export class InstitutoModule { }
