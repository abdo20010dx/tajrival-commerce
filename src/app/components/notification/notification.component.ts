import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatProgressBar } from "@angular/material/progress-bar";
import { NotificationService } from "./service/notification.service";

@Component({
  imports: [CommonModule,MatProgressBar],
  standalone:true,
  selector: "app-notification",
  templateUrl: `./notification.component.html`,
  styleUrls: [`./notification.component.scss`],
})
export class NotificationComponent {
  message$ = this.notificationService.errors$();

  constructor(private readonly notificationService: NotificationService) {}
}