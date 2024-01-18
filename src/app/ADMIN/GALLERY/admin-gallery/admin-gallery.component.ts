import { Component } from '@angular/core';
import {Cuadro, GalleryService} from '../../../SERVICIOS/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.css']
})
export class AdminGalleryComponent {

    //variable
    ListarGallery!: Cuadro[];
    CuadrosTotales!: number;
    Contador: number = 0;
    constructor(private GalleryService:GalleryService, private router: Router) {}
  
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

    deleteCuadro(id:string | undefined){
      this.GalleryService.deleteCuadro(id).subscribe(
        res=>{
          console.log('Desarrollo eliminado');
          this.listarGallery()
        },
        err => console.log(err)
      )
    }

    updateCuadro(id:string | undefined){
      this.router.navigate(['administradorAGG1970/adminGallery/editCuadro/'+id]);
    }

}
