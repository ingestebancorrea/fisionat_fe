import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { TabsComponent } from '../../../../shared/components/tabs/tabs.component';
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    NavbarComponent,
    TabsComponent,
    FooterComponent,
    MatIconModule
],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  tabData = [
    { label: 'Misión', content: 'Transformar vidas mediante la rehabilitación integral y personalizada, innovación y educación, mejorando la salud, bienestar y calidad de vida de nuestros pacientes y su entorno,  estableciendo estándares de excelencia en la atencion y cuidado.' },
    { label: 'Visión', content: 'Establecernos como un centro de rehabilitación integral de excelencia y alta calidad, siendo reconocidos como líderes en atención humanizada,  incluyendo tecnología avanzada para mejorar la eficiencia de nuestros programas, ampliar nuestros servicios a nivel local y crear alianzas con organizaciones de salud y educación.' }
  ];
}
