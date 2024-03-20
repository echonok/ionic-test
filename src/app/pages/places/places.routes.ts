import { Routes } from '@angular/router';
import { PlacesPage } from './places.page';

export const placesRoutes: Routes = [
  {
    path: '',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadComponent: () => import('../places/discover/discover.page').then((m) => m.DiscoverPage),
          },
          {
            path: ':placeId',
            loadComponent: () => import('./discover/place-detail/place-detail.page').then((m) => m.PlaceDetailPage),
          },
        ],
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadComponent: () => import('./offers/offers.page').then((m) => m.OffersPage),
          },
          {
            path: 'new',
            loadComponent: () => import('./offers/new-offer/new-offer.page').then((m) => m.NewOfferPage),
          },
          {
            path: 'edit/:offerId',
            loadComponent: () => import('./offers/edit-offer/edit-offer.page').then((m) => m.EditOfferPage),
          },
          {
            path: ':offerId',
            loadComponent: () => import('./offers/offer-bookings/offer-bookings.page').then((m) => m.OfferBookingsPage),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/places/discover',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/discover',
    pathMatch: 'full',
  },
];
