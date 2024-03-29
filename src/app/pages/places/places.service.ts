import { Injectable } from '@angular/core';

import { Place } from '../../models/place.model';
import { Offer } from '../../models/offer.model';
import { mockPlaces } from '../../mock/places.mock';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = mockPlaces;
  private _offers: Offer[] = mockPlaces;

  constructor() { }

  get places(): Place[] {
    return this._places.slice();
  }

  get offers() {
    return this._offers.slice();
  }

  getPlace(placeId: string) {
    return { ...this._places.find((place) => place._id === placeId) };
  }

  getOffer(offerId: string) {
    return { ...this._offers.find((offer) => offer._id === offerId) };
  }
}
