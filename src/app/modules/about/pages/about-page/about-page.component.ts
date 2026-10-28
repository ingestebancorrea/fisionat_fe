import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MatIconModule, RouterLink],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
}
