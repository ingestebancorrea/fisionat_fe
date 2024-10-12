import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Service } from '../../../../core/models/services.model';
import { stimulation } from '../../../../data/services';

@Component({
  selector: 'app-stimulation-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './stimulation-page.component.html',
  styleUrl: './stimulation-page.component.css'
})
export class StimulationPageComponent {
  displayedStimulation: Service[] = [];

  constructor() {
    this.displayedStimulation = stimulation;
  }

}
