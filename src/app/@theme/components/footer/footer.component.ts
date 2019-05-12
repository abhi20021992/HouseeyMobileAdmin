import { Component } from '@angular/core';

@Component({
  selector: 'houseey-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"
      >&copy;<b><a href="https://houseey.com" target="_blank">houseey.com</a></b> 2019</span
    >
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {}
