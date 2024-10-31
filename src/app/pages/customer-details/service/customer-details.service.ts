import { CustomerDetailsPost } from '@/core/models/model';
import { RequestService } from '@/core/services/requests-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../core/config/appconfig';

@Injectable({
  providedIn: 'root',
})
export class CustomerDetailsService {
  private getCustomerDetailsApi = AppConfig.apiUrl("admin/customerDetails"); // Replace with your actual API URL
  private saveCustomerDetailsApi = AppConfig.apiUrl("admin/customerDetails/save"); // Replace with your actual API URL

  constructor(private requestService: RequestService) {

  }

  // Method to get customer details by userNumber
  getCustomerDetails(userNumber: string): Observable<any> {
    return this.requestService.PostRequest<{ idnumber: string }>(this.getCustomerDetailsApi, { idnumber: userNumber });
  }

  // Method to save customer details
  saveCustomerDetails(data: CustomerDetailsPost): Observable<any> {
    return this.requestService.PostRequest<CustomerDetailsPost>(this.saveCustomerDetailsApi, data);

  }
}
