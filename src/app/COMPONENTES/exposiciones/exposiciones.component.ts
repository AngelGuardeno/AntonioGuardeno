import { Component } from '@angular/core';
import { Exposicion, ExposicionService} from '../../SERVICIOS/exposicion.service'


@Component({
  selector: 'app-exposiciones',
  templateUrl: './exposiciones.component.html',
  styleUrls: ['./exposiciones.component.css']
})
export class ExposicionesComponent {

    //variable
    ListarExposiciones!: Exposicion[];
    ExposicionesTotales!: number;
    Contador: number = 0;
    constructor(private ExposicionService: ExposicionService) {}
  
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
}
