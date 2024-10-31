import { DeviceRecord } from '@/core/models/model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',

})


/**
 * @title Table with pagination
 */
export class InvoicesComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'no',
    'deviceName',
    'codeNo',
    'serialNo',
    'invoiceNo',
    'date',
    'amount',
    'customerNo',
    // 'notes'
  ];
  dataSource = new MatTableDataSource<DeviceRecord>(devices);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


const devices: DeviceRecord[] = [
  { no: 1, deviceName: "Birdie Car Mirror", codeNo: "351609080148961", serialNo: "72773", invoiceNo: "46501", date: "03/02/2018", amount: 1650, customerNo: "66475537", notes: "FROM OM RIRAJ" },
  { no: 2, deviceName: "Transfer Birdie Car Mirror", codeNo: "351609080130126", serialNo: "70731", invoiceNo: "46903", date: "05/02/2018", amount: 0, customerNo: "66066685", notes: "TRANSFER DEVICE" },
  { no: 3, deviceName: "Lamp Melsya Beauty", codeNo: "HR – M5 - 31134", serialNo: null, invoiceNo: null, date: "05/02/2018", amount: 400, customerNo: "7744559-77441715", notes: "OM RIRAJ FROM TEL" },
  { no: 4, deviceName: "Birdie Car Mirror", codeNo: "351609080142725", serialNo: "72709", invoiceNo: "46499", date: "05/02/2018", amount: 1650, customerNo: "55833347", notes: "BY COMPANY" },
  { no: 5, deviceName: "Birdie Car Mirror", codeNo: "351609080148227", serialNo: "72635", invoiceNo: "46493", date: "06/02/2018", amount: 1650, customerNo: "33718943", notes: "BY COMPANY" },
  { no: 6, deviceName: "Birdie Car Mirror", codeNo: "351609080149183", serialNo: "72777", invoiceNo: "46503", date: "07/02/2018", amount: 1650, customerNo: "55544105", notes: "FROM OM RIRAJ" },
  { no: 7, deviceName: "Birdie Car Mirror", codeNo: "351609080252110", serialNo: "75147", invoiceNo: "46519", date: "08/02/2018", amount: 1650, customerNo: "55033368", notes: "FROM OM RIRAJ" },
  { no: 8, deviceName: "Birdie Car Mirror", codeNo: "351609080251484", serialNo: "75084", invoiceNo: "46525", date: "12/02/2018", amount: 1650, customerNo: "66003058", notes: "BY COMPANY" },
  { no: 9, deviceName: "Birdie Car Mirror", codeNo: "351609080252003", serialNo: "75136", invoiceNo: "46517", date: "14/02/2018", amount: 1650, customerNo: "55033111", notes: "FROM OM RIRAJ" },
  { no: 10, deviceName: "Birdie Car Mirror", codeNo: "351609080251500", serialNo: "75086", invoiceNo: "46513", date: "17/02/2018", amount: 1600, customerNo: "55789993", notes: "BY COMPANY" },
  { no: 11, deviceName: "Melsya Beauty Device", codeNo: "M5 :20171109002", serialNo: null, invoiceNo: "41127", date: "18/02/2018", amount: 2950, customerNo: "33749778", notes: "BY COMPANY" },
  { no: 12, deviceName: "Birdie Car Mirror", codeNo: "351609080251435", serialNo: "75079", invoiceNo: "46515", date: "19/02/2018", amount: 1650, customerNo: "33211191", notes: "FROM OM RIRAJ" },
  { no: 13, deviceName: "Melsya Beauty Device", codeNo: "M5 :20180112001", serialNo: null, invoiceNo: "46193", date: "24/02/2018", amount: 2950, customerNo: "33887261", notes: "BY COMPANY" },
  { no: 14, deviceName: "Birdie Car Mirror", codeNo: "351609080056537", serialNo: "72460", invoiceNo: "46497", date: "25/02/2018", amount: 1650, customerNo: "66699811", notes: "BY COMPANY" }
];
