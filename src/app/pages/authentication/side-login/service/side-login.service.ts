import { RequestService } from '@/core/services/requests-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../../core/config/appconfig';

@Injectable({
  providedIn: 'root'
})
export class SideLoginService {
  private apiUrl = AppConfig.apiUrl('admin/customerDetails/login');

  constructor(private RequestService: RequestService) { }

  login(userNo: string, password: string): Observable<any> {

    const body = {
      userNo: userNo,
      password: password
    };
    return this.RequestService.PostRequest<any>(this.apiUrl, body);
  }
}
