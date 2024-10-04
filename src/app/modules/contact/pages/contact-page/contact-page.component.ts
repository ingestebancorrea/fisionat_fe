import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

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
      console.log(this.form.value);
    }
  }

}
