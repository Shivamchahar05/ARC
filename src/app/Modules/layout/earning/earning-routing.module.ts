import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarningComponent } from './earning.component';

const routes: Routes = [{path:'',component:EarningComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarningRoutingModule { }
