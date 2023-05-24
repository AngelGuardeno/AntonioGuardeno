import { Component } from '@angular/core';
import { Cuadro, GalleryService } from 'src/app/SERVICIOS/gallery.service';
import { Router, ActivatedRoute } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser';
import { Storage, ref, uploadBytes, listAll, list, getDownloadURL } from '@angular/fire/storage'


@Component({
  selector: 'app-edit-cuadro',
  templateUrl: './edit-cuadro.component.html',
  styleUrls: ['./edit-cuadro.component.css']
})
export class EditCuadroComponent {

  ListarGallery!: Cuadro[];

  cuadro: Cuadro={
    idgallery:'',
    srcimg:'',
    titulo:'',
    tecnica:'',
    medidas:'',
    anio:''
  };

  mostrar = false;
  mensaje = '';

  archivos: any = [];
  public previsualizacion!: string;

  cargando: boolean = false;

  constructor(private GalleryService: GalleryService, 
    private router: Router,
    private activateRoute: ActivatedRoute,
    private storage: Storage) {
      
  }

  ngOnInit(): void{
    const id_entrada = <string>this.activateRoute.snapshot.params['idgallery'];
    console.log('id de entrada: '+ id_entrada);

      if(id_entrada){
        this.GalleryService.getCuadro(id_entrada).subscribe(
          res=>{
            this.ListarGallery = <any>res
            this.cuadro = this.ListarGallery[0]
            console.log(this.ListarGallery[0])
          },
          err => console.log(err)
        )
      }
  }

  updateCuadro(){
    this.GalleryService.updateCuadro(this.cuadro.idgallery, this.cuadro).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    )
    this.mostrarMensaje()
  }

  addCuadro() {
    delete this.cuadro.idgallery;

    this.GalleryService.addCuadro(this.cuadro).subscribe();
    this.router.navigate(['/admin/adminGallery']);
  }

  async uploadImage($event: any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `gallery/${file.name}`)

    uploadBytes(imgRef, file)
      .then(response => console.log(response))
      .catch(error => console.log(error));
      
    this.cargando = true;
    await this.esperarSegundos()
    console.log("espera terminada")
    this.getImages(file.name)
    this.cargando = false;
    console.log("hola "+this.cuadro.srcimg)
    
    
  }


  getImages(fileName: string){
    const imagesRef = ref(this.storage, 'gallery')
    let enlace ="";
    listAll(imagesRef)
    .then(async response => {
      for(let item of response.items){
        const url = await getDownloadURL(item);
        if(item.fullPath == ("gallery/")+fileName){
          enlace = url;
          this.cuadro.srcimg= url
          console.log(url)
        }
      }
      
      return enlace;
    })
    .catch(error => {
      return null
    })

    return enlace
  }



  esperarSegundos(): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000); 
    });
  }
  



  mostrarMensaje() {
    this.mostrar = true;
    this.mensaje = 'CUADRO ACTUALIZADO';

    setTimeout(() => {
      this.mostrar = false;
    }, 2000);
  }


  
}

