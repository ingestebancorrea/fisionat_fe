import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { phoneValidator } from '../../../../core/validators/phone.validator';
import { environment } from '../../../../../environments/environment';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-home-page',
    imports: [
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  form: FormGroup;
  email: string = environment.email;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', [Validators.required, phoneValidator()]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      try {
        const publicKey = (import.meta as any).env?.['NG_APP_PUBLIC_KEY'] || (import.meta as any).env?.['VITE_PUBLIC_KEY'];
        const serviceId = (import.meta as any).env?.['NG_APP_SERVICE_ID'] || (import.meta as any).env?.['VITE_SERVICE_ID'];
        const templateId = (import.meta as any).env?.['NG_APP_TEMPLATE_ID'] || (import.meta as any).env?.['VITE_TEMPLATE_ID'];
        
        if (publicKey && serviceId && templateId) {
          emailjs.init(publicKey);
          emailjs.send(serviceId, templateId, {
            name: this.form.value.name,
            lastName: this.form.value.lastName,
            email: this.form.value.email,
            cellphone: this.form.value.cellphone,
            subject: this.form.value.subject,
            message: this.form.value.message,
          });
        }
      } catch (e) {
        console.log(e);
      }

      alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
      this.form.reset();
    }
  }
}
