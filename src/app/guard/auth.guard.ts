import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '@app/core/services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  // testsing == alway true
  if (!userService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/auth']);
};