import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/services/materias.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {

  cargando = true;
  materias = [];

  constructor(private _servicioM : MateriasService, private router:Router) {  
    this._servicioM.getMaterias().then(
      (materias) => {
        this.materias = materias;
        this.cargando = false;
      }
    )

    }
  

  ngOnInit() {
  }
  public ir(id) {
    this.router.navigate(['/maestro',id]);
  }
}
