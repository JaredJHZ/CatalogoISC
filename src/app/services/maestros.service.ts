import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class MaestrosService {

  constructor(public db : AngularFirestore) { 
    
  }

  public getMaestros():Promise<any>{
    let maestros = [];
    return new Promise((resolve,reject) => {
        this.db.collection('maestros').get().subscribe(
          (data) => {
            data.forEach(
              (maestro) => maestros.push(maestro.data())
            )
          }
        );
        resolve(maestros);
    });
  }

  public getMaestro(id):Promise<any> {
    return new Promise ((resolve, reject) => {
      let maestro = this.db.collection('maestros');
      let query = maestro.ref.where('id','==',Number(id));
      query.get().then(
        (data) => {
          data.forEach(
            (maestro) => {
              resolve(maestro.data())
            }
          )
        }
      )
    })
  }

  public getMaterias(id) {
    return new Promise((resolve, reject) => {
      let maestro = this.db.collection('maestros');
      let query = maestro.ref.where('id','==',Number(id));
              query.get().then(
                (data) => {
                  data.forEach(
                    (maestro) => {
                      let enlace = maestro.ref.collection('materias');
                      let materias = [];
                      enlace.get().then(
                        (datos) => {
                          datos.forEach(
                            (materia) => materias.push(materia.data())
                          )
                          resolve(materias);
                        }
                      )
                    }
                  )
                }
              );
    });
  }
}
