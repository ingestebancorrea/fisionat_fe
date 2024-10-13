import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { physicalsTherapy } from '../../../../data/services';
import { Service } from '../../../../core/models/services.model';

@Component({
  selector: 'app-therapy-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './therapy-page.component.html',
  styleUrl: './therapy-page.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class TherapyPageComponent {
  displayedPhysicalTherapy: Service[] = [];

  constructor() {
    this.displayedPhysicalTherapy = physicalsTherapy; // Asigna el arreglo importado
  }
}