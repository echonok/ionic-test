import { Routes } from '@angular/router';

import { authGuard } from './pages/auth/auth.guard';

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
    loadChildren: () => import('./pages/places/places.routes').then((m) => m.placesRoutes),
    canMatch: [authGuard],
  },
  {
    path: 'bookings',
    loadComponent: () => import('./pages/bookings/bookings.page').then((m) => m.BookingsPage),
    canMatch: [authGuard],
  },
];
