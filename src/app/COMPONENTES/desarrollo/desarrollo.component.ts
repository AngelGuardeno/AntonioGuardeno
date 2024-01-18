import { Component } from '@angular/core';
import { Desarrollo, DesarrolloService} from '../../SERVICIOS/desarrollo.service'

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent {

  //variable
  ListarDesarrollos!: Desarrollo[];
  DesarrollosTotales!: number;
  Contador: number = 0;
  constructor(private DesarrolloService: DesarrolloService) {}

  ngOnInit(): void{
    this.listarDesarrollo();
  }

  listarDesarrollo(){
    this.DesarrolloService.getDesarrollos().subscribe(
      res=>{
        console.log(res);
        this.ListarDesarrollos=<any>res;
        this.DesarrollosTotales= this.ListarDesarrollos.length;
        this.Contador=this.Contador;
        console.log(this.DesarrollosTotales);
      },
      err => console.log(err)
    )
  }

}
