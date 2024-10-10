import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-therapy-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    MatIconModule
  ],
  templateUrl: './therapy-page.component.html',
  styleUrl: './therapy-page.component.css'
})
export class TherapyPageComponent {

}
