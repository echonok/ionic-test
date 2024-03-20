import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { business, checkboxOutline, exit } from 'ionicons/icons';

import { AuthService } from './pages/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, RouterLink, IonMenuToggle],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    addIcons({ business, checkboxOutline, exit });
  }

  onLogOut() {
    this.authService.logout();
    this.router.navigateByUrl('/auth').then();
  }
}
