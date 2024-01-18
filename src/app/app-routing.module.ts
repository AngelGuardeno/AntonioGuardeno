import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './COMPONENTES/index/index.component';
import { BiografiaComponent } from './COMPONENTES/biografia/biografia.component';
import { DesarrolloComponent } from './COMPONENTES/desarrollo/desarrollo.component';
import { ExposicionesComponent } from './COMPONENTES/exposiciones/exposiciones.component';
import { GaleriaComponent } from './COMPONENTES/galeria/galeria.component';
import { FormularioCorreoComponent } from './ELEMENTOS/formulario-correo/formulario-correo.component';
import { CorreoEnviadoComponent } from './ELEMENTOS/correo-enviado/correo-enviado.component';
import { IndexAdminComponent } from './ADMIN/index-admin/index-admin.component';
import { AdminGalleryComponent } from './ADMIN/GALLERY/admin-gallery/admin-gallery.component';
import { AddCuadroComponent } from './ADMIN/GALLERY/add-cuadro/add-cuadro.component';
import { EditCuadroComponent } from './ADMIN/GALLERY/edit-cuadro/edit-cuadro.component';
import { CorreoNoEnviadoComponent } from './ELEMENTOS/correo-no-enviado/correo-no-enviado.component';
import { AdminDesarrolloComponent } from './ADMIN/DESARROLLO/admin-desarrollo/admin-desarrollo.component';
import { AddDesarrolloComponent } from './ADMIN/DESARROLLO/add-desarrollo/add-desarrollo.component';
import { EditDesarrolloComponent } from './ADMIN/DESARROLLO/edit-desarrollo/edit-desarrollo.component';
import { AdminExposicionesComponent } from './ADMIN/EXPOSICIONES/admin-exposiciones/admin-exposiciones.component';
import { AddExposicionComponent } from './ADMIN/EXPOSICIONES/add-exposicion/add-exposicion.component';
import { EditExposicionComponent } from './ADMIN/EXPOSICIONES/edit-exposicion/edit-exposicion.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'biografia', component: BiografiaComponent },
  { path: 'desarrollo', component: DesarrolloComponent },
  { path: 'exposiciones', component: ExposicionesComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'correo', component: FormularioCorreoComponent },
  { path: 'correoEnviado', component: CorreoEnviadoComponent },
  { path: 'correoNoEnviado', component: CorreoNoEnviadoComponent },
  { path: 'administradorAGG1970', component: IndexAdminComponent },
  { path: 'administradorAGG1970/adminGallery', component: AdminGalleryComponent },
  { path: 'administradorAGG1970/adminGallery/addCuadro', component: AddCuadroComponent },
  { path: 'administradorAGG1970/adminGallery/editCuadro/:idgallery', component: EditCuadroComponent },
  { path: 'administradorAGG1970/adminDesarrollo', component: AdminDesarrolloComponent },
  { path: 'administradorAGG1970/adminDesarrollo/addDesarrollo', component: AddDesarrolloComponent },
  { path: 'administradorAGG1970/adminDesarrollo/editDesarrollo/:iddesarrollo', component: EditDesarrolloComponent },
  { path: 'administradorAGG1970/adminExposicion', component: AdminExposicionesComponent },
  { path: 'administradorAGG1970/adminExposicion/addExposicion', component: AddExposicionComponent },
  { path: 'administradorAGG1970/adminExposicion/editExposicion/:idexposicion', component: EditExposicionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
