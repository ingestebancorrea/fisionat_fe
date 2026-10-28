import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { phoneValidator } from '../../../../core/validators/phone.validator';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FooterComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
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
        if (import.meta.env['NG_APP_PUBLIC_KEY']) {
          emailjs.init(import.meta.env['NG_APP_PUBLIC_KEY']);
          emailjs.send(import.meta.env['NG_APP_SERVICE_ID'], import.meta.env['NG_APP_TEMPLATE_ID'], {
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
