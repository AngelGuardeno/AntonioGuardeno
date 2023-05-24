import { Component } from '@angular/core';
import {Cuadro, GalleryService} from '../../SERVICIOS/gallery.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

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
        },
        err => console.log(err)
      )
    }

}
