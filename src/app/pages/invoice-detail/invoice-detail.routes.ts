import { Routes } from '@angular/router';
import { InvoiceDetailComponent } from './invoice-detail.component';

export const InvoiceDetailRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'invoice-detail/:id',
                component: InvoiceDetailComponent,  // Component to view a single invoice by ID
            },
        ],
    },
];
