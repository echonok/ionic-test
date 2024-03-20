import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanMatchFn = (route, state) => {
  if (!inject(AuthService).userIsAuth) {
    inject(Router).navigateByUrl('/auth').then()
  }
  return inject(AuthService).userIsAuth;
};
