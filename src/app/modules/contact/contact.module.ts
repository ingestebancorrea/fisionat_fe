import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  imports: [
    CommonModule,
    ContactPageComponent,
  ],
  exports: [ContactPageComponent],
})
export class ContactModule { }