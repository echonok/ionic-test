import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  NavController,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Offer } from '../../../../models/offer.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons],
})
export class EditOfferPage implements OnInit {

  offer: Offer;

  constructor(
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('offerId')) {
        this.navController.navigateBack('/places/offers').then();
      }
      this.offer = this.placesService.getOffer(paramMap.get('offerId'));
    });
  }

}
