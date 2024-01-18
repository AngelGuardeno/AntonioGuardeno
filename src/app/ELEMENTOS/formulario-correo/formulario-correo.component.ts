import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';


@Component({
  selector: 'app-formulario-correo',
  templateUrl: './formulario-correo.component.html',
  styleUrls: ['./formulario-correo.component.css']
})
export class FormularioCorreoComponent {

  datos: FormGroup;
  esCorreoValido = false;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.datos = new FormGroup({
      email: new FormControl('aguardenocampana@gmail.com', [Validators.required, Validators.email]),
      asunto: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      correoEnvio: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', Validators.required)

    })
  }


  envioCorreo() {

    Notiflix.Loading.standard('Cargando...');

    let correoEnvio = this.datos.value.correoEnvio;
    
    let params = {
      email: this.datos.value.email,
      asunto: this.datos.value.asunto,
      mensaje: this.datos.value.mensaje + ".<br>------Nombre: " + this.datos.value.nombre + ".<br>--------Correo_contacto: " + correoEnvio
    }
    

    console.log(params);

    this.httpClient.post('http://localhost:3000/api/envio', params).subscribe(
      res => {
        console.log(res)
        Notiflix.Loading.remove();
        this.validarCorreo(correoEnvio)
        if (this.esCorreoValido){
          Notiflix.Notify.success('Enviado correctamente');
        }else{
          Notiflix.Notify.failure('Error, correo incorrecto');
        }
        

      },

      )

  }


  onSubmit() {
    this.validarCorreo(this.datos.value.correoEnvio)
    // Lógica para procesar el formulario
    if(this.esCorreoValido){
      this.router.navigate(['/correoEnviado']);
    }else{
      this.router.navigate(['/correoNoEnviado']);
    }

  }

  validarCorreo(correo: string) {
    const patronCorreo = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    this.esCorreoValido = patronCorreo.test(correo);
  }

}
