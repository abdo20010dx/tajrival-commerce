import { Routes } from '@angular/router';
import { DeviceDetailComponent } from './device-detail.component';

export const DeviceDetailRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'device-detail/:id',
                component: DeviceDetailComponent,  // Component to view a single device by ID
            },
        ],
    },
];
