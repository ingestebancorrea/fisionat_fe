import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Card } from '../../../core/models/card.model';
import { cards } from '../../../data/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  displayedCards: Card[] = [];
  currentIndex = 0;
  interval: any;
  cardsToShow: number = 4; // Default number of cards to show

  ngOnInit() {
    this.updateDisplayedCards();
    this.startAutoSlide();
    this.updateCardsToShow();
    window.addEventListener('resize', this.updateCardsToShow.bind(this));
  }

  ngOnDestroy() {
    this.stopAutoSlide();
    window.removeEventListener('resize', this.updateCardsToShow.bind(this));
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.next();
    }, 10000); // Change every 10 seconds
  }

  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % cards.length;
    this.updateDisplayedCards();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + cards.length) % cards.length;
    this.updateDisplayedCards();
  }

  updateDisplayedCards() {
    this.displayedCards = this.getVisibleCards();
  }

  getVisibleCards(): Card[] {
    const start = this.currentIndex;
    return Array.from({ length: this.cardsToShow }, (_, i) => 
      cards[(start + i) % cards.length]
    );
  }

  updateCardsToShow() {
    const width = window.innerWidth;
    if (width < 1040) {
      this.cardsToShow = 2; // Pantallas medianas (tabletas)
    } else if (width < 1280) {
      this.cardsToShow = 3;// Pantallas grandes (laptops pequeñas)
    } else {
      this.cardsToShow = 4;// Pantallas muy grandes (laptops/desktops)
    }
    this.updateDisplayedCards(); // Update displayed cards when changing layout
  }

  isActive(index: number) {
    return index === 1; // Ajusta según cuál tarjeta esté activa
  }
}