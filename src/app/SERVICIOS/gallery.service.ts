import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  url = '/api/cuadros';

  constructor(private http: HttpClient) { }


  //get equipos
  getGallery(){
    return this.http.get(this.url);
  }

  //Get cuadro
  getCuadro(id:string){
    return this.http.get(this.url + "/"+ id);
  }

  //ADD cuadro
  addCuadro(cuadro:Cuadro){
    return this.http.post(this.url, cuadro);
  }

  //DELETE cuadro
  deleteCuadro(id:string | undefined){
    return this.http.delete(this.url + "/" + id)
  }

  //PUT cuadro
  updateCuadro(id:string | undefined, cuadro:Cuadro){
    return this.http.put(this.url + "/" +id, cuadro);
  }


}


export interface Cuadro{
  idgallery?:string | undefined;
  srcimg?: string;
  titulo?: string;
  tecnica?: string;
  medidas?: string;
  anio?: string;
}
