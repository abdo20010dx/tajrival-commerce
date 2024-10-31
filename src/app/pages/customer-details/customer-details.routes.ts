import { Routes } from '@angular/router';
import { CustomerDetailsComponent } from './component/customer-details.component';


export const CustomerDetailsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'customer-details',
        component: CustomerDetailsComponent,
      },
    ],
  },
];
