import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { TableModule } from 'src/app/comman-table/table/table.module';
import { RemovedialogComponent } from './removedialog/removedialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ClientComponent,
    RemovedialogComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
