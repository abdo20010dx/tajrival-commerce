import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: '/customer-details',
    //     pathMatch: 'full',
    //   },
    //   // {
    //   //   path: 'dashboard',
    //   //   loadChildren: () =>
    //   //     import('./pages/pages.routes').then((m) => m.PagesRoutes),
    //   // },
    //   // {
    //   //   path: 'ui-components',
    //   //   loadChildren: () =>
    //   //     import('./pages/ui-components/ui-components.routes').then(
    //   //       (m) => m.UiComponentsRoutes
    //   //     ),
    //   // },
    //   // {
    //   //   path: 'extra',
    //   //   loadChildren: () =>
    //   //     import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
    //   // },
    // ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
        // canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/customer-details/customer-details.routes').then(
            (m) => m.CustomerDetailsRoutes
          ),
        // canActivate: [AuthGuard],
      },
    ],
  }, {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/invoices/invoices.routes').then(
            (m) => m.InvoicesRoutes
          ),
        // canActivate: [AuthGuard],
      },
    ],
  },
  //   { path: '**',
  //   loadComponent: () => import('./app.component').then(m => m.AppComponent), // Replace with actual path to your home component
  //   canActivate: [AuthGuard] // Protect the home route with AuthGuard
  // },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
