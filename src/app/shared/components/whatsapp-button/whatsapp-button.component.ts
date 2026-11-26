import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsappButtonComponent {
  private static readonly phoneNumber = '573008061718';
  private static readonly defaultMessage = 'Hola FisioNat, quiero agendar una consulta virtual.';

  readonly whatsappUrl = `https://wa.me/${WhatsappButtonComponent.phoneNumber}?text=${encodeURIComponent(WhatsappButtonComponent.defaultMessage)}`;
  readonly ariaLabel = 'Escríbenos por WhatsApp al +57 300 806 1718';
}
