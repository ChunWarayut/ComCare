import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbountRoutingModule } from './abount-routing.module';
import { AbountComponent } from './abount.component';

@NgModule({
  declarations: [AbountComponent],
  imports: [
    CommonModule,
    AbountRoutingModule
  ]
})
export class AbountModule { }
