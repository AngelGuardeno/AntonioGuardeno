import { Component } from '@angular/core';
import {Cuadro, GalleryService} from '../../SERVICIOS/gallery.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  //variable
  ListarGallery!: Cuadro[];
  CuadrosTotales!: number;
  Contador: number = 0;
  constructor(private GalleryService:GalleryService) {}

  ngOnInit(): void{
    this.listarGallery();
  }

  listarGallery(){
    this.GalleryService.getGallery().subscribe(
      res=>{
        console.log(res);
        this.ListarGallery=<any>res;
        this.CuadrosTotales= this.ListarGallery.length;
        this.Contador=this.Contador;
        console.log(this.CuadrosTotales);
      },
      err => console.log(err)
    )
  }
}
