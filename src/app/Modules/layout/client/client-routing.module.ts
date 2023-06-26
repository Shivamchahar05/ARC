import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { clientdetails } from 'src/app/Constants/routes';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {path:"", component:ClientComponent},
  { path: clientdetails, loadChildren: () => import('./clientdetails/clientdetails.module').then(m => m.ClientdetailsModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
