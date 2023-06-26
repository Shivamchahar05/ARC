import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { client, content, dashboard, Earning, notification, profile, staff, transaction, user } from '../../Constants/routes';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path:'',redirectTo:dashboard ,pathMatch:"full"},
      { path: dashboard, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: profile, loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
      { path: transaction, loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule) },
      { path: Earning, loadChildren: () => import('./earning/earning.module').then(m => m.EarningModule) }, 
      { path: content, loadChildren: () => import('./content/content.module').then(m => m.ContentModule) }, 
      { path: staff, loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule) },
      { path: notification, loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule) },
      { path: client, loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },  
      { path: user, loadChildren: () => import('./user/user.module').then(m => m.UserModule) },  
 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
