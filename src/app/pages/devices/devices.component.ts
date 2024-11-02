import { DeviceRecord } from '@/core/models/model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DBConfig, NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss',

})


/**
 * @title Table with pagination
 */
export class DevicesComponent implements AfterViewInit {
  constructor(private dbService: NgxIndexedDBService) { }
  ngOnInit(): void {
    this.dbService.bulkAdd('devices', devicesData).subscribe(data => {
      console.log(data);

    })
    this.loaddevices();
  }
  devices: DeviceRecord[] = [];

  loaddevices() {
    this.dbService.getAll('devices').subscribe((devices) => {
      this.devices = devices as DeviceRecord[];
    });
  }

  displayedColumns: string[] = [
    'no',
    'deviceName',
    'codeNo',
    'serialNo',
    'deviceNo',
    'date',
    'amount',
    'customerNo',
    // 'notes'
  ];
  dataSource = new MatTableDataSource<DeviceRecord>(this.devices);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


const devicesData = [
  { no: 1, deviceName: "Birdie Car Mirror", codeNo: "351609080148961", serialNo: "72773", deviceNo: "46501", date: "03/02/2018", amount: 1650, customerNo: "66475537", notes: "FROM OM RIRAJ" },
  { no: 2, deviceName: "Transfer Birdie Car Mirror", codeNo: "351609080130126", serialNo: "70731", deviceNo: "46903", date: "05/02/2018", amount: 0, customerNo: "66066685", notes: "TRANSFER DEVICE" },
  { no: 3, deviceName: "Lamp Melsya Beauty", codeNo: "HR – M5 - 31134", serialNo: null, deviceNo: null, date: "05/02/2018", amount: 400, customerNo: "7744559-77441715", notes: "OM RIRAJ FROM TEL" },
  { no: 4, deviceName: "Birdie Car Mirror", codeNo: "351609080142725", serialNo: "72709", deviceNo: "46499", date: "05/02/2018", amount: 1650, customerNo: "55833347", notes: "BY COMPANY" },
  { no: 5, deviceName: "Birdie Car Mirror", codeNo: "351609080148227", serialNo: "72635", deviceNo: "46493", date: "06/02/2018", amount: 1650, customerNo: "33718943", notes: "BY COMPANY" },
  { no: 6, deviceName: "Birdie Car Mirror", codeNo: "351609080149183", serialNo: "72777", deviceNo: "46503", date: "07/02/2018", amount: 1650, customerNo: "55544105", notes: "FROM OM RIRAJ" },
  { no: 7, deviceName: "Birdie Car Mirror", codeNo: "351609080252110", serialNo: "75147", deviceNo: "46519", date: "08/02/2018", amount: 1650, customerNo: "55033368", notes: "FROM OM RIRAJ" },
  { no: 8, deviceName: "Birdie Car Mirror", codeNo: "351609080251484", serialNo: "75084", deviceNo: "46525", date: "12/02/2018", amount: 1650, customerNo: "66003058", notes: "BY COMPANY" },
  { no: 9, deviceName: "Birdie Car Mirror", codeNo: "351609080252003", serialNo: "75136", deviceNo: "46517", date: "14/02/2018", amount: 1650, customerNo: "55033111", notes: "FROM OM RIRAJ" },
  { no: 10, deviceName: "Birdie Car Mirror", codeNo: "351609080251500", serialNo: "75086", deviceNo: "46513", date: "17/02/2018", amount: 1600, customerNo: "55789993", notes: "BY COMPANY" },
  { no: 11, deviceName: "Melsya Beauty Device", codeNo: "M5 :20171109002", serialNo: null, deviceNo: "41127", date: "18/02/2018", amount: 2950, customerNo: "33749778", notes: "BY COMPANY" },
  { no: 12, deviceName: "Birdie Car Mirror", codeNo: "351609080251435", serialNo: "75079", deviceNo: "46515", date: "19/02/2018", amount: 1650, customerNo: "33211191", notes: "FROM OM RIRAJ" },
  { no: 13, deviceName: "Melsya Beauty Device", codeNo: "M5 :20180112001", serialNo: null, deviceNo: "46193", date: "24/02/2018", amount: 2950, customerNo: "33887261", notes: "BY COMPANY" },
  { no: 14, deviceName: "Birdie Car Mirror", codeNo: "351609080056537", serialNo: "72460", deviceNo: "46497", date: "25/02/2018", amount: 1650, customerNo: "66699811", notes: "BY COMPANY" }
]