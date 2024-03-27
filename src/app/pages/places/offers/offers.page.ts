import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon,
  IonImg,
  IonItem, IonItemOption, IonItemOptions, IonItemSliding,
  IonLabel,
  IonList,
  IonMenuButton,
  IonRow,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { PlacesService } from '../places.service';
import { Offer } from '../../../models/offer.model';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, create } from 'ionicons/icons';
import { OfferItemComponent } from './offer-item/offer-item.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonImg, IonItem, IonLabel, IonList, IonRow, IonThumbnail, RouterLink, IonButtons, IonIcon, IonMenuButton, IonItemSliding, IonItemOptions, IonItemOption, OfferItemComponent],
})
export class OffersPage implements OnInit {

  loadedOffers: Offer[];

  constructor(
    private placesService: PlacesService,
  ) {
    addIcons({ add, create });
  }

  ngOnInit() {
    this.loadedOffers = this.placesService.offers;
  }

  onEdit(offerId: string) {
    console.log({ offerId });
  }
}
