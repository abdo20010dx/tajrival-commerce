import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';

interface DeviceRecord {
  no: number;
  deviceName: string;
  codeNo: string;
  serialNo: string | null;
  deviceNo: string | null;
  date: string;
  amount: number;
  customerNo: string;
  notes: string;
}

// The sample devices array
const devices: DeviceRecord[] = [
  { no: 1, deviceName: "Birdie Car Mirror", codeNo: "351609080148961", serialNo: "72773", deviceNo: "46501", date: "03/02/2018", amount: 1650, customerNo: "66475537", notes: "FROM OM RIRAJ" },
  // other records...
];

@Component({
  selector: 'app-device-detail',
  styleUrls: ['./device-detail.component.scss'],
  templateUrl: './device-detail.component.html',
  imports: [MatFormFieldModule, CommonModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatCardModule
  ],
  standalone: true,
})
export class DeviceDetailComponent implements OnInit {
  device: DeviceRecord | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      // Find the device by 'no' field in devices array
      this.device = devices.find(device => device.no === id);

      if (!this.device) {
        alert("Device not found!");
        this.router.navigate(['/devices']);
      }
    });
  }

  saveDevice(): void {
    if (this.device) {
      // Update the record in the devices array
      const index = devices.findIndex(device => device.no === this.device!.no);
      if (index !== -1) {
        devices[index] = this.device;
        alert("Device saved successfully!");
      }
    }
  }
}
