import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesarrolloService {

  url = '/api/desarrollo';

  constructor(private http: HttpClient) { }


  //get Desarrollos
  getDesarrollos() {
    return this.http.get(this.url);
  }

  //Get Desarrollo
  getDesarrollo(id: string) {
    return this.http.get(this.url + "/" + id);
  }

  //ADD Desarrollo
  addDesarrollo(desarrollo: Desarrollo) {
    return this.http.post(this.url, desarrollo);
  }

  //DELETE Desarrollo
  deleteDesarrollo(id: string | undefined) {
    return this.http.delete(this.url + "/" + id)
  }

  //PUT Desarrollo
  updateDesarrollo(id: string | undefined, desarrollo: Desarrollo) {
    return this.http.put(this.url + "/" + id, desarrollo);
  }

}


export interface Desarrollo {
  iddesarrollo?: string | undefined;
  titulo?: string;
  srcimg_main?: string;
  srcimg1?: string;
  srcimg2?: string;
  srcimg3?: string;
  srcimg4?: string;
  srcimg5?: string;
}
