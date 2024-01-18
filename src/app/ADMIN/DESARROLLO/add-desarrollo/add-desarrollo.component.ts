import { Component } from '@angular/core';
import { Desarrollo, DesarrolloService } from 'src/app/SERVICIOS/desarrollo.service';
import { Router } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser';
import { Storage, ref, uploadBytes, listAll, list, getDownloadURL } from '@angular/fire/storage'


@Component({
  selector: 'app-add-desarrollo',
  templateUrl: './add-desarrollo.component.html',
  styleUrls: ['./add-desarrollo.component.css']
})
export class AddDesarrolloComponent {

  /*
  NOTA:
  Esta pagina esta muy mal optimizada. Pendiente de optimizar en el futuro.
  */


  desarrollo: Desarrollo = {
    iddesarrollo: '',
    titulo: '',
    srcimg_main: '',
    srcimg1: '',
    srcimg2: '',
    srcimg3: '',
    srcimg4: '',
    srcimg5: '',
  };
  archivos: any = [];
  public previsualizacion!: string;

  cargando: boolean = false;

  constructor(private DesarrolloService: DesarrolloService, 
    private router: Router,
    private sanitizer: DomSanitizer,
    private storage: Storage) { }

    ngOnInit(): void {
    }
  
    addDesarrollo() {
      delete this.desarrollo.iddesarrollo;
  
      this.DesarrolloService.addDesarrollo(this.desarrollo).subscribe();
      this.router.navigate(['/administradorAGG1970/adminDesarrollo']);
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
    async uploadImageMain($event: any){
      const file = $event.target.files[0];
      console.log(file);
  
      const imgRef = ref(this.storage, `desarrollo/${file.name}`)
  
      uploadBytes(imgRef, file)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        
      this.cargando = true;
      await this.esperarSegundos()
      console.log("espera terminada")
      this.getImagesMain(file.name)
      this.cargando = false;
      console.log("hola "+this.desarrollo.srcimg_main)
      
    }

    getImagesMain(fileName: string){
      const imagesRef = ref(this.storage, 'desarrollo')
      let enlace ="";
      listAll(imagesRef)
      .then(async response => {
        for(let item of response.items){
          const url = await getDownloadURL(item);
          if(item.fullPath == ("desarrollo/")+fileName){
            enlace = url;
            this.desarrollo.srcimg_main= url
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
    Image1--------------------------------------------------------------------------------
    */
    async uploadImage1($event: any){
      const file = $event.target.files[0];
      console.log(file);
  
      const imgRef = ref(this.storage, `desarrollo/${file.name}`)
  
      uploadBytes(imgRef, file)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        
      this.cargando = true;
      await this.esperarSegundos()
      console.log("espera terminada")
      this.getImages1(file.name)
      this.cargando = false;
      console.log("hola "+this.desarrollo.srcimg1)
      
    }

    getImages1(fileName: string){
      const imagesRef = ref(this.storage, 'desarrollo')
      let enlace ="";
      listAll(imagesRef)
      .then(async response => {
        for(let item of response.items){
          const url = await getDownloadURL(item);
          if(item.fullPath == ("desarrollo/")+fileName){
            enlace = url;
            this.desarrollo.srcimg1= url
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
    Image2--------------------------------------------------------------------------------
    */
    async uploadImage2($event: any){
      const file = $event.target.files[0];
      console.log(file);
  
      const imgRef = ref(this.storage, `desarrollo/${file.name}`)
  
      uploadBytes(imgRef, file)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        
      this.cargando = true;
      await this.esperarSegundos()
      console.log("espera terminada")
      this.getImages2(file.name)
      this.cargando = false;
      console.log("hola "+this.desarrollo.srcimg2)
      
    }

    getImages2(fileName: string){
      const imagesRef = ref(this.storage, 'desarrollo')
      let enlace ="";
      listAll(imagesRef)
      .then(async response => {
        for(let item of response.items){
          const url = await getDownloadURL(item);
          if(item.fullPath == ("desarrollo/")+fileName){
            enlace = url;
            this.desarrollo.srcimg2= url
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
    Image3--------------------------------------------------------------------------------
    */
    async uploadImage3($event: any){
      const file = $event.target.files[0];
      console.log(file);
  
      const imgRef = ref(this.storage, `desarrollo/${file.name}`)
  
      uploadBytes(imgRef, file)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        
      this.cargando = true;
      await this.esperarSegundos()
      console.log("espera terminada")
      this.getImages3(file.name)
      this.cargando = false;
      console.log("hola "+this.desarrollo.srcimg3)
      
    }

    getImages3(fileName: string){
      const imagesRef = ref(this.storage, 'desarrollo')
      let enlace ="";
      listAll(imagesRef)
      .then(async response => {
        for(let item of response.items){
          const url = await getDownloadURL(item);
          if(item.fullPath == ("desarrollo/")+fileName){
            enlace = url;
            this.desarrollo.srcimg3= url
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
    Image3--------------------------------------------------------------------------------
    */
    async uploadImage4($event: any){
      const file = $event.target.files[0];
      console.log(file);
  
      const imgRef = ref(this.storage, `desarrollo/${file.name}`)
  
      uploadBytes(imgRef, file)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        
      this.cargando = true;
      await this.esperarSegundos()
      console.log("espera terminada")
      this.getImages4(file.name)
      this.cargando = false;
      console.log("hola "+this.desarrollo.srcimg4)
      
    }

    getImages4(fileName: string){
      const imagesRef = ref(this.storage, 'desarrollo')
      let enlace ="";
      listAll(imagesRef)
      .then(async response => {
        for(let item of response.items){
          const url = await getDownloadURL(item);
          if(item.fullPath == ("desarrollo/")+fileName){
            enlace = url;
            this.desarrollo.srcimg4= url
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
    Image5--------------------------------------------------------------------------------
    */
    async uploadImage5($event: any){
      const file = $event.target.files[0];
      console.log(file);
  
      const imgRef = ref(this.storage, `desarrollo/${file.name}`)
  
      uploadBytes(imgRef, file)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        
      this.cargando = true;
      await this.esperarSegundos()
      console.log("espera terminada")
      this.getImages5(file.name)
      this.cargando = false;
      console.log("hola "+this.desarrollo.srcimg5)
      
    }

    getImages5(fileName: string){
      const imagesRef = ref(this.storage, 'desarrollo')
      let enlace ="";
      listAll(imagesRef)
      .then(async response => {
        for(let item of response.items){
          const url = await getDownloadURL(item);
          if(item.fullPath == ("desarrollo/")+fileName){
            enlace = url;
            this.desarrollo.srcimg5= url
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
  
}
