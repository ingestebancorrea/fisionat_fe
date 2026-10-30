import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
    selector: 'app-footer',
    imports: [
    MatIconModule
],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
  email = "contacto@fisionat.com";
  currentYear: number = new Date().getFullYear();
}
