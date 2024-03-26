import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  ActionSheetController,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  ModalController,
  NavController,
} from '@ionic/angular/standalone';

import { PlacesService } from '../../places.service';
import { Place } from '../../../../models/place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton, RouterLink],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navController.navigateBack('/places/discover').then();
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  async onBookPlace() {
    const actionEl = await this.actionSheetController.create({
      header: 'Choose an Action',
      buttons: [
        { text: 'Select Date', handler: async () => await this.openBookingModal('select') },
        { text: 'Random Date', handler: async () => await this.openBookingModal('random') },
        { text: 'Cancel', role: 'cancel' },
      ],
    });
    await actionEl.present();
  }

  async openBookingModal(model: 'select' | 'random') {
    console.log({ model });
    const modal = await this.modalController.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place },
    });
    await modal.present();
    const { data, role } = await modal.onDidDismiss();

    if (role === 'confirm') {
      console.log('booking!!!', data);
    }
  }
}
