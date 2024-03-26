import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  LoadingController,
} from '@ionic/angular/standalone';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton],
})
export class AuthPage {

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
  ) {
  }

  async onLogin() {
    this.authService.login();
    const loadingEl = await this.loadingController.create({ keyboardClose: true, message: 'Logging in...' });
    await loadingEl.present();
    setTimeout(async () => {
      await loadingEl.dismiss();
      await this.router.navigateByUrl('/places/discover');
    }, 3_000)
  }
}
