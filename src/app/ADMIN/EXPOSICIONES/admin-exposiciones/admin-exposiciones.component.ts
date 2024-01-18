import { Component } from '@angular/core';
import { Exposicion, ExposicionService } from '../../../SERVICIOS/exposicion.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-exposiciones',
  templateUrl: './admin-exposiciones.component.html',
  styleUrls: ['./admin-exposiciones.component.css']
})
export class AdminExposicionesComponent {

    //variable
    ListarExposiciones!: Exposicion[];
    ExposicionesTotales!: number;
    Contador: number = 0;
    constructor(private ExposicionService: ExposicionService, private router: Router) { }

  
    ngOnInit(): void{
      this.listarExposicion();
    }
  
    listarExposicion(){
      this.ExposicionService.getExposiciones().subscribe(
        res=>{
          console.log(res);
          this.ListarExposiciones=<any>res;
          this.ExposicionesTotales= this.ListarExposiciones.length;
          this.Contador=this.Contador;
          console.log(this.ExposicionesTotales);
        },
        err => console.log(err)
      )
    }


    deleteDesarrollo(id:string | undefined){
      this.ExposicionService.deleteExposicion(id).subscribe(
        res=>{
          console.log('Exposicion eliminada');
          this.listarExposicion()
        },
        err => console.log(err)
      )
    }
  
    updateDesarrollo(id:string | undefined){
      this.router.navigate(['administradorAGG1970/adminExposicion/editExposicion/'+id]);
    }
  
  
}
