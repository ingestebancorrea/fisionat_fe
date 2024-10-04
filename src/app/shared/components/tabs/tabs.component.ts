import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import{ MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    MatTabsModule,
    CommonModule
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Input() tabs: { label: string; content: string }[] = [];

  logChange(index: number | null) {
    console.log(index);
  }

  selectedIndex = 0;
}
