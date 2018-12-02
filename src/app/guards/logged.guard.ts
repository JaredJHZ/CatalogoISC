import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(private sesion:SesionService, private router: Router) {

  }
  canActivate(){
    if (this.sesion.isLogged() ) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
    
  }
}
