import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { Service } from '../../../../core/models/services.model';
import { geriatricPhysiotherapy } from '../../../../data/services';

@Component({
  selector: 'app-geriatric-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './geriatric-page.component.html',
  styleUrl: './geriatric-page.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class GeriatricPageComponent {
  displayedGeriatricPhysiotherapy: Service[] = [];

  constructor() {
    this.displayedGeriatricPhysiotherapy = geriatricPhysiotherapy;
  }
}
