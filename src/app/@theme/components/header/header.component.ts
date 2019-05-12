import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'houseey-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile', click: this.goToProfile }, { title: 'Log out', click: this.logout }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserData,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
  ) {
    menuService.onItemClick().subscribe((bag) => console.log(bag));
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => (this.user = users.nick));
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  goToProfile() {}

  logout() {
    console.log('logpout');
  }
}
