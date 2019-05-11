import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  showNotification(arg0: string, arg1: string, arg2: string, arg3: string) {
    throw new Error('Method not implemented.');
  }
  constructor() {}

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
}
