import { Component } from '@angular/core';

import { NotificationComponent } from '@/components/notification/notification.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: [],
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule,NotificationComponent],
})
export class BlankComponent {
  constructor() {}
}
