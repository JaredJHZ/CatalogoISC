import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { SesionService } from './sesion.service';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public db : AngularFirestore, private sesion: SesionService) { }

  public getUsuarios():Promise<any> {
    return new Promise((resolve, reject) => {
      let usuarios = [];
      this.db.collection('usuarios').get().subscribe(
        (data) => {
          data.forEach((doc) => {
            usuarios.push(doc.data());
          }
          )
          resolve(usuarios);
        }
      )
    })
  }

  public comprobar(usuario:any): Promise<boolean>{
    let usuarios = this.db.collection('usuarios');
    let query = usuarios.ref.where('numero_control','==',Number(usuario.num)).where('password','==',Number(usuario.pass));
    return new Promise((resolve,reject) =>{
      query.get().then(
        (data) => {
          data.forEach(
            (usuario) => {
              this.sesion.iniciar(usuario.data());
              resolve(true);
            }
          )
        }
      )
    })
  }


}
