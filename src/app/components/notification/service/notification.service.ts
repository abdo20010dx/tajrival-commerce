import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
interface Message {
  type: ("error"  | "success") 
  text:string
}
let time = -1600;
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly errorsSubject$ = new Subject<Message | undefined>();

  public errors$() { 
    return this.errorsSubject$.asObservable();
  }

  public showError(message: Message): void {
    time += 1600;
    
    setTimeout(() => {
      this.errorsSubject$.next(message);
    }, time);
    setTimeout(() => {
      this.errorsSubject$.next(undefined);
          time -= 1600;
    }, time + 1500);
  }
}