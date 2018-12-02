import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SesionService {
  logged : Subject<any> = new Subject();
  admin = false;
  usuario:any;
  constructor() {
    this.isLogged();
   }

   iniciar(usuario) {
     this.usuario = usuario;
     localStorage.setItem('usuario', JSON.stringify(this.usuario));
   }

   isLogged(){
     let usuario = localStorage.getItem('usuario');
     if (usuario) {
      usuario = JSON.parse(usuario);
      this.usuario = usuario;
      this.logged.next(this.usuario);
      return true;
     } else {
       return false;
     }
   }
   cerrar() {
    this.usuario = null;
    localStorage.clear();
    this.logged.next(false);
    
   }
}
