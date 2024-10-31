import { NotificationService } from '@/components/notification/service/notification.service';
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NgScrollbarModule, MaterialModule, MatButtonModule],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
  
  public brCode: number; 
  public name: string;
  constructor(private cookieService: CookieService, private router: Router, private notificationService: NotificationService) {
      try {
        this. brCode = this.cookieService.get('userInfo') ? JSON.parse(this.cookieService.get('userInfo')!).brCode : 0;
        this. name = this.cookieService.get('userInfo') ? JSON.parse(this.cookieService.get('userInfo')!).name : '';
      } catch (error) {
      // console.log(error);
      }

  }

  onLogout() { 
    this.notificationService.showError({type:"success",text:"تم تسجيل  الخروج  بنجاح"})
    this.cookieService.delete('userInfo');
    setTimeout(() => {
      this.router.navigate(['/authentication/login']);
    }, 500);
  }
}
