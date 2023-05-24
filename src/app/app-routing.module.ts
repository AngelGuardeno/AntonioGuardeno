import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './COMPONENTES/index/index.component';
import { BiografiaComponent } from './COMPONENTES/biografia/biografia.component';
import { ContactoComponent } from './COMPONENTES/contacto/contacto.component';
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

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'biografia', component: BiografiaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'desarrollo', component: DesarrolloComponent },
  { path: 'exposiciones', component: ExposicionesComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'correo', component: FormularioCorreoComponent },
  { path: 'correoEnviado', component: CorreoEnviadoComponent },
  { path: 'correoNoEnviado', component: CorreoNoEnviadoComponent },
  { path: 'admin', component: IndexAdminComponent },
  { path: 'admin/adminGallery', component: AdminGalleryComponent },
  { path: 'admin/adminGallery/addCuadro', component: AddCuadroComponent },
  { path: 'admin/adminGallery/editCuadro/:idgallery', component: EditCuadroComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
