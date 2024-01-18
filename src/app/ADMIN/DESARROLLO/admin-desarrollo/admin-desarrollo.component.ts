import { Component } from '@angular/core';
import { Desarrollo, DesarrolloService } from '../../../SERVICIOS/desarrollo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-desarrollo',
  templateUrl: './admin-desarrollo.component.html',
  styleUrls: ['./admin-desarrollo.component.css']
})
export class AdminDesarrolloComponent {

  //variable
  ListarDesarrollo!: Desarrollo[];
  DesarrollosTotales!: number;
  Contador: number = 0;
  constructor(private DesarrolloService: DesarrolloService, private router: Router) { }

  ngOnInit(): void {
    this.listarDesarrollo();
  }

  listarDesarrollo(){
    this.DesarrolloService.getDesarrollos().subscribe(
      res=>{
        console.log(res);
        this.ListarDesarrollo=<any>res;
        this.DesarrollosTotales= this.ListarDesarrollo.length;
        this.Contador=this.Contador;
        console.log(this.DesarrollosTotales);
      },
      err => console.log(err)
    )
  }


  deleteDesarrollo(id:string | undefined){
    this.DesarrolloService.deleteDesarrollo(id).subscribe(
      res=>{
        console.log('Desarrollo eliminado');
        this.listarDesarrollo()
      },
      err => console.log(err)
    )
  }

  updateDesarrollo(id:string | undefined){
    this.router.navigate(['administradorAGG1970/adminDesarrollo/editDesarrollo/'+id]);
  }

}
