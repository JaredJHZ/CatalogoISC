import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';
import {Router} from '@angular/router';
declare var M; 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  nombre: string = '';
  carrera: string ='';
  numero: any = '';

  constructor(private _sessionS: SesionService, private router:Router) {
    this._sessionS.logged.subscribe(
      (data) => {
        this.nombre = data.nombre;
        this.carrera = data.carrera;
        this.numero = data.numero_control;
      }
    )
   }

  ngOnInit() {
   
  }

  cerrar(){
    this._sessionS.cerrar();
    this.router.navigate(['/']);
  }

}
