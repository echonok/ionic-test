import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonRow, IonSegment, IonSegmentButton, IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { PlacesService } from '../places.service';
import { Place } from '../../../models/place.model';
import { RouterLink } from '@angular/router';
import { SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonImg, IonCardContent, IonCardSubtitle, IonList, IonItem, IonThumbnail, IonLabel, IonButton, RouterLink, IonButtons, IonMenuButton, IonText, IonSegment, IonSegmentButton],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];

  constructor(
    private placesService: PlacesService,
  ) {
  }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  protected readonly Place = Place;

  onFilterUpdate($event: CustomEvent<SegmentChangeEventDetail>) {
    console.log({ $event: $event.detail })
  }
}
