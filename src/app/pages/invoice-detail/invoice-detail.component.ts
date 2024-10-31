import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { ActivatedRoute, Router } from '@angular/router';

interface DeviceRecord {
  no: number;
  deviceName: string;
  codeNo: string;
  serialNo: string | null;
  invoiceNo: string | null;
  date: string;
  amount: number;
  customerNo: string;
  notes: string;
}

// The sample devices array
const devices: DeviceRecord[] = [
  { no: 1, deviceName: "Birdie Car Mirror", codeNo: "351609080148961", serialNo: "72773", invoiceNo: "46501", date: "03/02/2018", amount: 1650, customerNo: "66475537", notes: "FROM OM RIRAJ" },
  // other records...
];

@Component({
  selector: 'app-invoice-detail',
  styleUrls: ['./invoice-detail.component.scss'],
  templateUrl: './invoice-detail.component.html',
  imports: [MatFormFieldModule, CommonModule,
    FormsModule,
    MatGridListModule,
    MatCardModule
  ],
  standalone: true,
})
export class InvoiceDetailComponent implements OnInit {
  invoice: DeviceRecord | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      // Find the invoice by 'no' field in devices array
      this.invoice = devices.find(device => device.no === id);

      if (!this.invoice) {
        alert("Invoice not found!");
        this.router.navigate(['/invoices']);
      }
    });
  }

  saveInvoice(): void {
    if (this.invoice) {
      // Update the record in the devices array
      const index = devices.findIndex(device => device.no === this.invoice!.no);
      if (index !== -1) {
        devices[index] = this.invoice;
        alert("Invoice saved successfully!");
      }
    }
  }
}
