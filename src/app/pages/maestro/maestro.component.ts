import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MaestrosService } from 'src/app/services/maestros.service';
@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.scss']
})
export class MaestroComponent implements OnInit {
  maestro:any;
  materias:any;
  
  constructor(private _ar : ActivatedRoute, private _servicioMaestros:MaestrosService) {
      this._ar.params.subscribe(
        (params) => {
          let id = params['id'];
          this._servicioMaestros.getMaestro(id).then(
            (data) => {
              this.maestro = data;
              this._servicioMaestros.getMaterias(this.maestro.id).then(
                (datos) => {
                  this.materias = datos;
                }
              )
            }
          )
        }
      )
   }

  ngOnInit() {
  }

}
