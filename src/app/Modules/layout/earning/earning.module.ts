import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningRoutingModule } from './earning-routing.module';
import { EarningComponent } from './earning.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { TableModule } from 'src/app/comman-table/table/table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    EarningComponent
  ],
  imports: [
    CommonModule,
    EarningRoutingModule,
    MatSelectModule,
    MatInputModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EarningModule { }
