import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddstaffRoutingModule } from './addstaff-routing.module';
import { AddstaffComponent } from './addstaff.component';
import {MatInputModule} from '@angular/material/input';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AddstaffComponent
  ],
  imports: [
    CommonModule,
    AddstaffRoutingModule,
    MatInputModule,
    // FormGroup,
    // ReactiveFormsModule
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,

  ]
})
export class AddstaffModule { }
