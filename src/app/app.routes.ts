import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'places',
    loadChildren: () => import('./pages/places/places.routes').then((m) => m.placesRoutes)
  },
  {
    path: 'bookings',
    loadComponent: () => import('./pages/bookings/bookings.page').then((m) => m.BookingsPage)
  },
];
