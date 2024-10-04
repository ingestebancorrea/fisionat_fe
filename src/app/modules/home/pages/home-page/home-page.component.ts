import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    CarouselComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
