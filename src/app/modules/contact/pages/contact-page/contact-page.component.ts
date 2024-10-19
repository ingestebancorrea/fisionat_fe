import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FooterComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lastName: ['', Validators.required],
      cellphone: ['', [Validators.required, Validators.maxLength(10)]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      emailjs.init(import.meta.env['NG_APP_PUBLIC_KEY']);
      emailjs.send(import.meta.env['NG_APP_SERVICE_ID'], import.meta.env['NG_APP_TEMPLATE_ID'], {
        name: this.form.value.name,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        cellphone: this.form.value.cellphone,
        subject: this.form.value.subject,
        message: this.form.value.message,
      });
      
      alert('Mensaje enviado.');
      this.form.reset();
    }
  }

}
