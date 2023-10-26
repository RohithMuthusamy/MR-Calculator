import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
declare var ExitApp: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router,private platform: Platform,) {
    this.platform.ready().then(() => {
      this.setupBackButton();
    });
  }
  private setupBackButton() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      if (typeof ExitApp !== 'undefined') {
        ExitApp.exit();
      } else {
        window.close();
      }
    });
  }
  home() {
    this.router.navigate(['/home'])
  }
  bmi() {
    this.router.navigate(['/bmi'])
  }
  feedback() {
    this.router.navigate(['/feedback'])
  }
  contact() {
    this.router.navigate(['/contact-details'])
  }
  privacypolicy() {
    this.router.navigate(['/privacypolicy'])
  }
  about() {
    this.router.navigate(['/about'])
  }

}
