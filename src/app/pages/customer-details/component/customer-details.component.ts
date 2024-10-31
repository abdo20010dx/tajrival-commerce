import { NotificationService } from '@/components/notification/service/notification.service';
import { CustomerDetailsGet, CustomerDetailsPost } from '@/core/models/model';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CookieService } from 'ngx-cookie-service';
import { CustomerDetailsService } from '../service/customer-details.service';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  idNumber: string;
  // errorMessage: string = '';
  isEditing: boolean = false; // Toggle edit mode



  fullname: string;
  address1: string; // residenceAddress
  address2: string; // activityAddress
  phone1: string = '';
  phone2: string = '';
  c_address: string;// residenceAddress
  a_address: string;// activityAddress
  c_phone1: string;
  c_phone2: string;
  id_NUMBER: string;



  //to save data
  userNumber:number
  customerName:string
  currentAddress:string
  alternateAddress:string
  phoneNo1:string
  phoneNo2:string
  branchCode:number


  constructor(
    private customerDetailsService: CustomerDetailsService,
    private notificationService: NotificationService,
    private cookieService:CookieService
  ) { }
// onKeyDownSearch(): void {
//   if (this?.idNumber?.length == 14) {    
//     this.onSearch();
//   }
// }
  onSearch(): void {
        if(isNaN(+this.idNumber)) return this.notificationService.showError({text:"الرقم القومى يجب ان يكون ارقاما فقط",type:"error"}); 
    if (this.idNumber.length == 14) {
      this.isEditing = true;
      this.customerDetailsService.getCustomerDetails(this.idNumber).subscribe(
        (response) => {
          const data:CustomerDetailsGet = response.data;
          // this.notificationService.showError({type:"success",text:response.status.message})
          this.fullname = data.fullname || '';
          this.address1 = data.address1 || '';
          this.address2 = data.address2 || '';
          this.phone1 = data.phone1 || '';
          this.phone2 = data.phone2 || '';
          this.c_address = data.c_address || '';
          this.a_address = data.a_address || '';
          this.c_phone1 = data.c_phone1 || '';
          this.c_phone2 = data.c_phone2 || '';
          this.isEditing = false; // Disable editing mode after successful fetch

        },
        (error) => {
          // console.error('Error fetching details:', error);
          // this.notificationService.showError({type:"error",text:errorMessage})
              this.isEditing = false; // Disable editing mode after successful fetch
        }
      );
    } else {
          const errorMessage = 'يرجى كتابة الرقم القومى.';
          this.notificationService.showError({type:"error",text:errorMessage})
    }

  }

  onSave(): void {
    const data : CustomerDetailsPost = {
            idNumber: this.idNumber,
            userNumber:this.cookieService.get('userInfo') ? JSON.parse(this.cookieService.get('userInfo')!).username : 0,
            customerName:this.fullname,
            currentAddress:this.c_address,
            alternateAddress:this.a_address,
            phoneNo1:this.phone1,
            phoneNo2:this.phone2,
            branchCode:this.cookieService.get('userInfo') ? JSON.parse(this.cookieService.get('userInfo')!).brCode:0,
            
    };
    
    this.isEditing = true;
    this.customerDetailsService.saveCustomerDetails(data).subscribe(
      (response) => {        
          this.isEditing =false;
        console.log(response.status.code);

        if (response.status.code < 400) {          
          this.currentAddress = ""
          this.alternateAddress = ""
          this.phoneNo1 = ""
          this.phoneNo2 = ""
          this.onSearch()

          // this.fullname = { ...data }; // Update customer data
        } else {
          // this.errorMessage = response.statusMsg;
        }
      },
      (error) => {

        // const errorMessage = 'لم يتم حفظ البيانات';
        //   this.notificationService.showError({type:"error",text:errorMessage})
        // console.error('Error saving details:', error);
        this.isEditing =false;

      }
    );

  }
}
