import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
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
  styleUrl: './stimulation-page.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class StimulationPageComponent {
  displayedStimulation: Service[] = [];

  constructor() {
    this.displayedStimulation = stimulation;
  }

}
