import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExposicionService {

  url = '/api/exposiciones';

  constructor(private http: HttpClient) { }


  //get Exposiciones
  getExposiciones() {
    return this.http.get(this.url);
  }

  //Get Exposicion
  getExposicion(id: string) {
    return this.http.get(this.url + "/" + id);
  }

  //ADD Exposiciones
  addExposicion(exposicion: Exposicion) {
    return this.http.post(this.url, exposicion);
  }

  //DELETE Exposicion
  deleteExposicion(id: string | undefined) {
    return this.http.delete(this.url + "/" + id)
  }

  //PUT Exposicion
  updateExposicion(id: string | undefined, exposicion: Exposicion) {
    return this.http.put(this.url + "/" + id, exposicion);
  }
}


export interface Exposicion {
  idexposicion?: string | undefined;
  srcimg_principal?: string;
  titulo?: string;
  srcimg_tarjeta?: string;
  descripcion?: string;
  url1?: string;
  url2?: string;
}
