import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MaterialModule } from '../../../material.module';
import { SideLoginService } from './service/side-login.service';


@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
    styleUrls: ['side-login.css'],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  constructor(private sideLoginService: SideLoginService, private router: Router,private cookieService: CookieService) {}
uname :string = "";
  password :string = "";
  // form = new FormGroup({
  //   uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //   password: new FormControl('', [Validators.required]),
  // });

  // get f() {
  //   return this.form.controls;
  // }

  onSubmit() {
    
    this.sideLoginService.login(this.uname as any, this.password as any).subscribe(
      (response) => {        
        
        if (response.status.code < 400) {          
          // Redirect to home
          this.cookieService.set('userInfo', JSON.stringify(response.data));
          // this.router.navigate(['/']);
          setTimeout(() => {
            this.router.navigate(['/customer-details']);
          }, 500);
        } else {
          // Show error message
          // this.errorMessage = response.statusMsg;
        }
      },
      // (error) => {
      //   // Handle error response
      //   this.errorMessage =error.error.data.statusMsg || 'An error occurred. Please try again later.';
      //   console.error('Login error:', error);
      // }
    );
  }}
