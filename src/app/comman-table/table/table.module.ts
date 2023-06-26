import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { MatTableModule } from '@angular/material/table'  
import { TableComponent } from './table.component';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import { CustompaginatorsDirective } from 'src/app/customdirective/custompaginator/custompaginators.directive';

@NgModule({
  declarations: [TableComponent,CustompaginatorsDirective],

  imports: [
    CommonModule,
    TableRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
  ],
  exports:[TableComponent]
})
export class TableModule { }
