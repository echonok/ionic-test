import { Injectable } from '@angular/core';

import { Booking } from '../../models/booking.model';
import { mockBookings } from '../../mock/bookings.mock';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private _bookings: Booking[] = mockBookings;

  constructor() {
  }

  get bookings() {
    return this._bookings.slice();
  }
}
