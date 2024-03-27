import { Component, Input, OnInit } from '@angular/core';
import { IonIcon, IonImg, IonItem, IonLabel, IonText, IonThumbnail } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendar } from 'ionicons/icons';

import { Offer } from '../../../../models/offer.model';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
    RouterLink,
    IonIcon,
    IonText,
    DatePipe,
  ],
})
export class OfferItemComponent implements OnInit {
  @Input({ required: true }) offer: Offer;

  constructor() {
    addIcons({ calendar });
  }

  ngOnInit() {
  }

  getDummyDate() {
    return new Date();
  }
}
