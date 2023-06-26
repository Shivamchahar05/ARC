import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import {MatInputModule} from '@angular/material/input';
import { TableModule } from 'src/app/comman-table/table/table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StaffComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MatInputModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StaffModule { }
