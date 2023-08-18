import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  showButtons = true; // Variable para controlar la visibilidad de los botones
  showContent = false; // Variable para controlar la visibilidad del contenido

  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/register']);
    //this.showButtons = false; // Ocultar los botones después de navegar
   // this.showContent = false; // Ocultar el contenido después de navegar
  }

  goToList() {
    this.router.navigate(['/list']);
    //this.showButtons = false; // Ocultar los botones después de navegar
    //this.showContent = false; // Ocultar el contenido después de navegar
  }
}
