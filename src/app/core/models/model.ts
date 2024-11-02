export interface CustomerDetailsGet {
  fullname: string;
  address1: string;
  address2: string;
  phone1: string;
  phone2: string;
  c_address: string;
  a_address: string;
  c_phone1: string;
  c_phone2: string;
  id_NUMBER: string;
}

export interface CustomerDetailsPost {
  idNumber: string;
  customerName: string;
  currentAddress: string;
  alternateAddress: string;
  phoneNo1: string;
  phoneNo2: string;
  userNumber: number;
  branchCode: number;
}

export interface DeviceRecord {
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

