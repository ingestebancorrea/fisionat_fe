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
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  displayedCards: Card[] = [];
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.updateDisplayedCards();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
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
    const start = this.currentIndex - 1; // Adjust to show three cards
    this.displayedCards = [
      cards[(start + cards.length) % cards.length], // Previous
      cards[this.currentIndex],
      cards[(this.currentIndex + 1) % cards.length] // Next
    ];
  }

  isActive(index: number) {
    return index === 1; // The middle card is always active
  }
  
}