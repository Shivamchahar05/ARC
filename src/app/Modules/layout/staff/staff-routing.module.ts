import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addstaff } from 'src/app/Constants/routes';
import { StaffComponent } from './staff.component';

const routes: Routes = [
  // {
  //   path: '', component: StaffComponent, children: [
  //     { path: addstaff, loadChildren: () => import('./addstaff/addstaff.module').then(m => m.AddstaffModule) },
  //   ]}
  {path: '', component: StaffComponent},
   { path: addstaff, loadChildren: () => import('./addstaff/addstaff.module').then(m => m.AddstaffModule) },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
