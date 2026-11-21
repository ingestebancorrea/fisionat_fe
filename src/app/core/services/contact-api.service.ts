import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactRequest } from '../models/contact-request.model';
import { EmailResponse } from '../models/email-response.model';

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {
  private readonly http = inject(HttpClient);

  // El builder sustituye esta expresión en tiempo de compilación. El encadenamiento
  // opcional evita el TypeError si `import.meta.env` no llega a estar definido.
  private readonly baseUrl = `${import.meta.env?.['NG_APP_MAIL_BASE_URL'] ?? ''}/api/v1`;

  sendWelcome(request: ContactRequest): Observable<EmailResponse> {
    return this.http.post<EmailResponse>(`${this.baseUrl}/mail/welcome`, request);
  }
}
