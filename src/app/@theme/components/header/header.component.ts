import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { filter } from 'rxjs/operators';
import { UserService } from '../../../@core/services/user/user.service';
import { AuthenticationService } from '../../../@core/services/authentication/appAuthentication.service';

@Component({
  selector: 'houseey-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';

  userName: string;

  userMenu = [{ title: 'Log out', data: { id: 'logout' } }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
    private userService: UserService,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit() {
    this.userName = this.userService.getUserName();
    this.menuService
      .onItemClick()
      .pipe(filter(({ tag }) => tag === undefined))
      .subscribe((menuItem) => {
        if (menuItem.item.data && menuItem.item.data['id'] === 'logout') {
          this.authenticationService.logout();
        }
      });
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
}
