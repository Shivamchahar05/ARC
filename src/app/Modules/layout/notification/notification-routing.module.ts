import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification.component';
import { SendnotificationComponent } from './sendnotification/sendnotification.component';

const routes: Routes = [
  {
    path:"", component:NotificationComponent
  },
  {path:"sendnotification",component:SendnotificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
