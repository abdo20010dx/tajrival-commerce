import { Routes } from '@angular/router';
import { InvoiceDetailComponent } from './invoice-detail.component';

export const InvoicesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'invoices/:id',
                component: InvoiceDetailComponent,  // Component to view a single invoice by ID
            },
        ],
    },
];
