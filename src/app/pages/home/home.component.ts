import { Component, OnInit } from '@angular/core';
import { MaestrosService } from 'src/app/services/maestros.service';
import {Router} from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  

  maestros:any[];
  cargando = true;
  busqueda: string ='';

  constructor(private _servicioMaestros:MaestrosService, private router:Router) {
      this.cargarDatos();
     
   }

  ngOnInit() {
  }

  public ir(id) {
    this.router.navigate(['/maestro',id]);
  }
  public buscar() {
    this.cargando = true;
    if (this.busqueda.length <= 0) {
      this.cargando = true;
      this.cargarDatos();
    } else {
      this.maestros = this.maestros.filter(
        (maestro) => {
          let nombre = maestro.nombre.toUpperCase();
          let apellido = maestro.apellido_paterno.toUpperCase();
          if (nombre.includes(this.busqueda.toUpperCase()) || apellido.includes(this.busqueda.toUpperCase())) {
            return true;
          }
        } 
      );
      this.cargando = false;
    }
  }

  private cargarDatos(){
    this._servicioMaestros.getMaestros().then((maestros)=>{
      this.maestros = maestros;
      this.cargando = false;
    });
  }
}
