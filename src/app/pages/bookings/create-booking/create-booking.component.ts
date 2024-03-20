import { Component, Input } from '@angular/core';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';

import { Place } from '../../../models/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonIcon,
  ],
})
export class CreateBookingComponent {
  @Input() selectedPlace: Place;

  constructor(
    private modalController: ModalController,
  ) {
    addIcons({ closeOutline });
  }

  async onBookPlace() {
    await this.modalController.dismiss({ message: 'book!' }, 'confirm');
  }

  async onCancel() {
    await this.modalController.dismiss(null, 'cancel');
  }
}
