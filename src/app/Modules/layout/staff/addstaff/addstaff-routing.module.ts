import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstaffComponent } from './addstaff.component';

const routes: Routes = [
  {path:"", component:AddstaffComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddstaffRoutingModule { }
