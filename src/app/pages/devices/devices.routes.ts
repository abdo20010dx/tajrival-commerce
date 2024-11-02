import { Routes } from '@angular/router';
import { DevicesComponent } from './devices.component';

export const DevicesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'devices',
        component: DevicesComponent,  // Component to list all devices
      }
    ],
  },
];
