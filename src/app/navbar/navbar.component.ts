import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Car List',
        routerLink: '/',
      },
      {
        label: 'Add Car',
        routerLink: '/cars',
      },
      
    ];
  }
}
