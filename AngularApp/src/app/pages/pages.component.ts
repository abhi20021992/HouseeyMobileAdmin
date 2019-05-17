import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'houseey-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <houseey-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </houseey-one-column-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
