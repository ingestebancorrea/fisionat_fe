import { Component, OnInit, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {  MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterLink, 
    RouterLinkActive,
    MatMenuModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isMobile: boolean = false;
  mobileMenuOpen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
      if (!this.isMobile) {
        this.mobileMenuOpen = false;
      }
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
