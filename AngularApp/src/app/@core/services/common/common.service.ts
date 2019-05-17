import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
declare var $: any;

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private toasterService: NbToastrService) {}

  getDisplayName(name: string) {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function(str) {
        return str.toUpperCase();
      })
      .trim();
  }

  isMobile() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  showNotification(message: string, status: string, hasIcon: boolean, duration?: number) {
    this.toasterService.show(message, status, {
      hasIcon: hasIcon,
      duration: duration ? duration : 5000,
    });
  }
}
