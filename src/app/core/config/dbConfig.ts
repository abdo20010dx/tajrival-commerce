import { DBConfig } from "ngx-indexed-db";

export const dbConfig: DBConfig = {
    name: 'Tajrival',
    version: 1,
    objectStoresMeta: [{
        store: 'devices',
        storeConfig: { keyPath: 'no', autoIncrement: true },
        storeSchema: [
            { name: 'no', keypath: 'no', options: { unique: false } },
            { name: 'deviceName', keypath: 'deviceName', options: { unique: false } },
            { name: 'codeNo', keypath: 'codeNo', options: { unique: false } },
            { name: 'serialNo', keypath: 'serialNo', options: { unique: true } },  // Ensure unique serial numbers
            { name: 'deviceNo', keypath: 'deviceNo', options: { unique: true } }, // Ensure unique device numbers
            { name: 'date', keypath: 'date', options: { unique: false } },
            { name: 'amount', keypath: 'amount', options: { unique: false } },
            { name: 'customerNo', keypath: 'customerNo', options: { unique: false } },
            { name: 'notes', keypath: 'notes', options: { unique: false } },
        ]
    }]
};
