import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(public db : AngularFirestore) { }

  public getMaterias():Promise<any> {

      return new Promise((resolve,reject) => {
        this.db.collection('maestros').get().subscribe(
          (data) => {
            let objetoA = [];
            data.forEach(
              (maestro) => {

                maestro.ref.collection('materias').get().then(
                  (materias) => {
                    materias.forEach(
                      (materia) => {
                        let objecto = {
                          maestro: null,
                          materia: null
                        };
                        objecto.materia = materia.data();
                        objecto.maestro = maestro.data();
                        objetoA.push(objecto);
                      }
                    )
                  }
                )
              }
            )
            resolve(objetoA);
          }
        )
      });
  }
}
