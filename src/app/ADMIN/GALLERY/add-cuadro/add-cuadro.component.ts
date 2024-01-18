import { Component } from '@angular/core';
import { Cuadro, GalleryService } from 'src/app/SERVICIOS/gallery.service';
import { Router } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser';
import { Storage, ref, uploadBytes, listAll, list, getDownloadURL } from '@angular/fire/storage'


@Component({
  selector: 'app-add-cuadro',
  templateUrl: './add-cuadro.component.html',
  styleUrls: ['./add-cuadro.component.css']
})

export class AddCuadroComponent {

  cuadro: Cuadro = {
    idgallery: '',
    srcimg: '',
    titulo: '',
    tecnica: '',
    medidas: '',
    anio: ''
  };
  archivos: any = [];
  public previsualizacion!: string;

  cargando: boolean = false;

  constructor(private GalleryService: GalleryService, 
    private router: Router,
    private sanitizer: DomSanitizer,
    private storage: Storage) { }

  ngOnInit(): void {
  }

  addCuadro() {
    delete this.cuadro.idgallery;

    this.GalleryService.addCuadro(this.cuadro).subscribe();
    this.router.navigate(['/administradorAGG1970/adminGallery']);
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
  
}
