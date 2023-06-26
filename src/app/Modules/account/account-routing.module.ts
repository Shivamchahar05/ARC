import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { forgotPassword, resetPassword } from '../../Constants/routes';

const routes: Routes = [
  {
    path: '', component: AccountComponent, children: [
      { path: '', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule) },
      { path: forgotPassword, loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
      { path: resetPassword, loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
