import { NotificationService } from "@/components/notification/service/notification.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(private http: HttpClient, private notificationService: NotificationService) { }
    PostRequest<bodyType>(url: string, body: bodyType): Observable<any> {
        const request = this.http.post<any>(url, body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        });
        return request.pipe(tap({
            error: (error) => {
                const errorMessage = error?.error?.errors?.message || error.error.message;
                this.notificationService.showError({ type: "error", text: errorMessage })
            },
            next: (response) => {
                this.notificationService.showError({ type: "success", text: response.status.message })

            }
        }))
    }

    GetRequest(url: string, params: { [key: string]: any } = {}): Observable<any> {
        const request = this.http.get<any>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            params
        });
        return request.pipe(tap({
            error: (error) => {
                const errorMessage = error?.error?.errors?.message || error.error.message;
                this.notificationService.showError({ type: "error", text: errorMessage })
            },
            next: (response: any) => {
                this.notificationService.showError({ type: "success", text: response?.status?.message })

            }
        }))
    }

    DeleteRequest(url: string, id: string): Observable<any> {
        const request = this.http.delete<any>(url, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: { id }
        });
        return request.pipe(tap({
            error: (error) => {
                const errorMessage = error?.error?.errors?.message || error.error.message;
                this.notificationService.showError({ type: "error", text: errorMessage })
            },
            next: (response: any) => {
                this.notificationService.showError({ type: "success", text: response?.status?.message })

            }
        }))
    }

    PutRequest<bodyType>(url: string, body: bodyType): Observable<any> {
        const request = this.http.put<any>(url, body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        });
        return request.pipe(tap({
            error: (error) => {
                const errorMessage = error?.error?.errors?.message || error.error.message;
                this.notificationService.showError({ type: "error", text: errorMessage })
            },
            next: (response) => {
                this.notificationService.showError({ type: "success", text: response.status.message })

            }
        }))
    }

    PatchRequest<bodyType>(url: string, body: bodyType): Observable<any> {
        const request = this.http.patch<any>(url, body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        });
        return request.pipe(tap({
            error: (error) => {
                const errorMessage = error?.error?.errors?.message || error.error.message;
                this.notificationService.showError({ type: "error", text: errorMessage })
            },
            next: (response) => {
                this.notificationService.showError({ type: "success", text: response.status.message })

            }
        }))
    }
}