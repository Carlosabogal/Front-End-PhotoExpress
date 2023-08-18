import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  showImages: boolean = true; 
  constructor(private router: Router) {}

  goToRegister() {
    this.showImages = false;
    this.router.navigate(['/register']);
  }

  goToList() {
    this.showImages = false; // Set to false to hide images when going to list page
    this.router.navigate(['/list']);
  }
}
