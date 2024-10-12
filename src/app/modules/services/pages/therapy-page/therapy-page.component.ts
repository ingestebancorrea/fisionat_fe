import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
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
  styleUrl: './therapy-page.component.css'
})
export class TherapyPageComponent {
  displayedPhysicalTherapy: Service[] = [];

  constructor() {
    this.displayedPhysicalTherapy = physicalsTherapy; // Asigna el arreglo importado
  }
}