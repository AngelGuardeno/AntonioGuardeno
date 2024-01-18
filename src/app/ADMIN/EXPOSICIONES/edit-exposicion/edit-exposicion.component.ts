import { Component } from '@angular/core';
import { Exposicion, ExposicionService } from 'src/app/SERVICIOS/exposicion.service';
import { Router, ActivatedRoute } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser';
import { Storage, ref, uploadBytes, listAll, list, getDownloadURL } from '@angular/fire/storage'



@Component({
  selector: 'app-edit-exposicion',
  templateUrl: './edit-exposicion.component.html',
  styleUrls: ['./edit-exposicion.component.css']
})
export class EditExposicionComponent {
  
  /*
  NOTA:
  Esta pagina esta muy mal optimizada. Pendiente de optimizar en el futuro.
  */

  ListarExposiciones!: Exposicion[];

  exposicion: Exposicion = {
    idexposicion: '',
    srcimg_principal: '',
    titulo: '',
    srcimg_tarjeta: '',
    descripcion: '',
    url1: '',
    url2: '',
  };

  mostrar = false;
  mensaje = '';

  archivos: any = [];
  public previsualizacion!: string;

  cargando: boolean = false;

  constructor(private ExposicionService: ExposicionService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private storage: Storage) {

  }


  ngOnInit(): void {
    const id_entrada = <string>this.activateRoute.snapshot.params['idexposicion'];
    console.log('id de entrada: ' + id_entrada);

    if (id_entrada) {
      this.ExposicionService.getExposicion(id_entrada).subscribe(
        res => {
          this.ListarExposiciones = <any>res
          this.exposicion = this.ListarExposiciones[0]
          console.log(this.ListarExposiciones[0])
        },
        err => console.log(err)
      )
    }
  }

  updateExposicion() {
    this.ExposicionService.updateExposicion(this.exposicion.idexposicion, this.exposicion).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    this.mostrarMensaje()
  }

  addExposicion() {
    delete this.exposicion.idexposicion;

    this.ExposicionService.addExposicion(this.exposicion).subscribe();
    this.router.navigate(['/administradorAGG1970/adminExposicion']);
  }

  esperarSegundos(): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }


  
      /*
    ImageMain--------------------------------------------------------------------------------
    */
    async uploadImagePrincipal($event: any){
      const file = $event.target.files[0];
      console.log(file);
  
      const imgRef = ref(this.storage, `exposiciones/${file.name}`)
  
      uploadBytes(imgRef, file)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        
      this.cargando = true;
      await this.esperarSegundos()
      console.log("espera terminada")
      this.getImagesPrincipal(file.name)
      this.cargando = false;
      console.log("hola "+this.exposicion.srcimg_principal)
      
    }

    getImagesPrincipal(fileName: string){
      const imagesRef = ref(this.storage, 'exposiciones')
      let enlace ="";
      listAll(imagesRef)
      .then(async response => {
        for(let item of response.items){
          const url = await getDownloadURL(item);
          if(item.fullPath == ("exposiciones/")+fileName){
            enlace = url;
            this.exposicion.srcimg_principal= url
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


    /*
    Image tarjeta--------------------------------------------------------------------------------
    */
    async uploadImageTarjeta($event: any){
      const file = $event.target.files[0];
      console.log(file);
  
      const imgRef = ref(this.storage, `exposiciones/${file.name}`)
  
      uploadBytes(imgRef, file)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        
      this.cargando = true;
      await this.esperarSegundos()
      console.log("espera terminada")
      this.getImagesTarjeta(file.name)
      this.cargando = false;
      console.log("hola "+this.exposicion.srcimg_tarjeta)
      
    }

    getImagesTarjeta(fileName: string){
      const imagesRef = ref(this.storage, 'exposiciones')
      let enlace ="";
      listAll(imagesRef)
      .then(async response => {
        for(let item of response.items){
          const url = await getDownloadURL(item);
          if(item.fullPath == ("exposiciones/")+fileName){
            enlace = url;
            this.exposicion.srcimg_tarjeta= url
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


    mostrarMensaje() {
      this.mostrar = true;
      this.mensaje = 'EXPOSICION ACTUALIZADA';
  
      setTimeout(() => {
        this.mostrar = false;
      }, 2000);
    }
  
}
