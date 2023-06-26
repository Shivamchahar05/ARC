import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { dashboard } from './Constants/routes';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./Modules/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
      {
        path: 'layout',
        loadChildren: () =>
          import('./Modules/layout/layout.module').then((m) => m.LayoutModule),
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
