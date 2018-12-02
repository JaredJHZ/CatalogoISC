import { Component, OnInit } from '@angular/core';
import { MaestrosService } from 'src/app/services/maestros.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  

  maestros:any[];

  constructor(private _servicioMaestros:MaestrosService, private router:Router) {
      this._servicioMaestros.getMaestros().then((maestros)=>{
        this.maestros = maestros;
      });
   }

  ngOnInit() {
  }

  public ir(id) {
    this.router.navigate(['/maestro',id]);
  }

}
