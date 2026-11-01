import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
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
    MatInputModule,
    MatSelectModule
],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  form: FormGroup;
  email: string = environment.email;

  allServices = [
    {
      icon: 'accessibility_new',
      title: 'Terapia física virtual',
      description: 'Ejercicios terapéuticos guiados y seguimiento para dolor, lesiones y postoperatorio.'
    },
    {
      icon: 'psychology',
      title: 'Neurorehabilitación virtual',
      description: 'Rehabilitación para ACV, traumatismo, Parkinson y otras patologías neurológicas desde casa.'
    },
    {
      icon: 'child_care',
      title: 'Estimulación temprana virtual',
      description: 'Orientación terapéutica a padres con ejercicios para potenciar el desarrollo infantil.'
    },
    {
      icon: 'elderly',
      title: 'Fisioterapia geriátrica virtual',
      description: 'Fortalecimiento, equilibrio, marcha y prevención de caídas para adultos mayores.'
    },
    {
      icon: 'assignment',
      title: 'Valoración fisioterapéutica virtual',
      description: 'Evaluación funcional integral por teleconsulta para identificar necesidades, generar diagnóstico terapéutico y elaborar un plan de tratamiento personalizado.'
    },
    {
      icon: 'accessibility',
      title: 'Ergonomía y adaptación de actividades',
      description: 'Recomendaciones ergonómicas, corrección postural y adaptación de actividades diarias o laborales para prevenir lesiones y mejorar la funcionalidad.'
    },
    {
      icon: 'family_restroom',
      title: 'Orientación en fisioterapia pediátrica',
      description: 'Orientación a familias y cuidadores con ejercicios, pautas y estrategias terapéuticas para favorecer el desarrollo motor, sensorial y funcional del niño.'
    }
  ];

  currentServiceSlide = 0;
  private autoSlideInterval: any;

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

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.nextServiceSlide();
    }, 3000);
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  prevServiceSlide(): void {
    this.stopAutoSlide();
    this.currentServiceSlide = (this.currentServiceSlide - 1 + this.allServices.length) % this.allServices.length;
    this.startAutoSlide();
  }

  nextServiceSlide(): void {
    this.stopAutoSlide();
    this.currentServiceSlide = (this.currentServiceSlide + 1) % this.allServices.length;
    this.startAutoSlide();
  }

  goToServiceSlide(index: number): void {
    this.stopAutoSlide();
    this.currentServiceSlide = index;
    this.startAutoSlide();
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
