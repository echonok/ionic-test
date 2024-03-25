import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  IonButton,
  IonButtons, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList,
  IonMenuButton, IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { trash } from 'ionicons/icons';

import { BookingService } from './booking.service';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonMenuButton, IonList, IonItem, IonItemSliding, IonLabel, IonGrid, IonRow, IonCol, IonItemOption, IonItemOptions, IonIcon],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[] = this.bookingService.bookings;

  constructor(
    private bookingService: BookingService,
  ) {
    addIcons({ trash });
  }

  ngOnInit() {
  }

  async onCancelBooking(bookingId: string, slidingBooking: IonItemSliding) {
    await slidingBooking.close();
    // TODO cancel booking
  }
}
