import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { finalize } from 'rxjs';
import { phoneValidator } from '../../../../core/validators/phone.validator';
import { ContactApiService } from '../../../../core/services/contact-api.service';
import { ContactRequest } from '../../../../core/models/contact-request.model';
import { EmailResponse } from '../../../../core/models/email-response.model';
import { ContactResponseMessage, getContactResponseMessage } from '../../../../core/enums/contact-response-message.enum';

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
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  email = 'fisionat1416@gmail.com';

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
  isSubmitting = false;
  notification: { type: 'success' | 'error'; message: string } | null = null;
  isNotificationClosing = false;

  private autoSlideInterval: ReturnType<typeof setInterval> | null = null;
  private notificationTimer: ReturnType<typeof setTimeout> | null = null;
  private notificationCloseTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly contactApiService = inject(ContactApiService);
  private readonly cdr = inject(ChangeDetectorRef);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      cellphone: ['', [Validators.required, phoneValidator()]],
      subject: ['', [Validators.required, Validators.maxLength(255)]],
      message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(2000)]]
    });
  }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
    this.clearNotificationTimers();
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
      this.autoSlideInterval = null;
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

  onSubmit(): void {
    if (this.form.invalid || this.isSubmitting) {
      this.form.markAllAsTouched();
      return;
    }

    const request: ContactRequest = {
      name: String(this.form.value.name ?? '').trim(),
      lastName: String(this.form.value.lastName ?? '').trim(),
      email: String(this.form.value.email ?? '').trim(),
      cellphone: String(this.form.value.cellphone ?? '').trim(),
      subject: String(this.form.value.subject ?? '').trim(),
      message: String(this.form.value.message ?? '').trim()
    };

    this.isSubmitting = true;
    this.contactApiService.sendWelcome(request).pipe(
      finalize(() => {
        this.isSubmitting = false;
        this.cdr.markForCheck();
      })
    ).subscribe({
      next: (response: EmailResponse) => {
        if (response?.success) {
          this.showNotification('success', ContactResponseMessage.SUCCESS);
          this.form.reset();
        } else {
          this.showNotification('error', ContactResponseMessage.UNKNOWN_ERROR);
        }
      },
      error: (error: unknown) => {
        this.showNotification('error', this.extractErrorMessage(error));
      }
    });
  }

  closeNotification(): void {
    if (!this.notification || this.isNotificationClosing) {
      return;
    }
    this.clearNotificationTimers();
    this.isNotificationClosing = true;
    this.cdr.markForCheck();
    this.notificationCloseTimer = setTimeout(() => {
      this.notification = null;
      this.isNotificationClosing = false;
      this.notificationCloseTimer = null;
      this.cdr.markForCheck();
    }, 250);
  }

  private showNotification(type: 'success' | 'error', message: string): void {
    this.clearNotificationTimers();
    this.notification = { type, message };
    this.isNotificationClosing = false;
    this.cdr.markForCheck();
    this.notificationTimer = setTimeout(() => {
      this.notificationTimer = null;
      this.closeNotification();
    }, 5000);
  }

  private clearNotificationTimers(): void {
    if (this.notificationTimer) {
      clearTimeout(this.notificationTimer);
      this.notificationTimer = null;
    }
    if (this.notificationCloseTimer) {
      clearTimeout(this.notificationCloseTimer);
      this.notificationCloseTimer = null;
    }
  }

  private extractErrorMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      return getContactResponseMessage(error.status);
    }
    if (typeof error === 'object' && error !== null && 'status' in error) {
      const status = (error as { status?: number }).status;
      return getContactResponseMessage(status);
    }
    return ContactResponseMessage.UNKNOWN_ERROR;
  }
}