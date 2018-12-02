import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';
import {Router} from '@angular/router';
declare var M;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() titulo: String;

  usuarios: any[] = [];

  usuario = {
    num: '',
    pass:''
  }

  constructor(private _servicioUsuarios: UsuariosService, private router: Router) { 
    
    this._servicioUsuarios.getUsuarios().then(
      (data) =>{ 
        this.usuarios = data;
        });
      }

  private ingresar() {
    this._servicioUsuarios.comprobar(this.usuario).then(
      (pass) => {
        if (pass) {
          localStorage.setItem('usuario',this.usuario.num);
          this.router.navigate(['/home']);
        }
      }
    )
  }

  ngOnInit() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    
  }

}
