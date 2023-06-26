import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientdetailsRoutingModule } from './clientdetails-routing.module';
import { ClientdetailsComponent } from './clientdetails.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UploadFileModule } from 'src/app/shared_module/upload-file/upload-file.module';
import { TableModule } from 'src/app/comman-table/table/table.module';
@NgModule({
  declarations: [
    ClientdetailsComponent
  ],
  imports: [
    CommonModule,
    ClientdetailsRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    UploadFileModule,
    TableModule
  ]
})
export class ClientdetailsModule { }
