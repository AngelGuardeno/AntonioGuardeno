import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ELEMENTOS/header/header.component';
import { FooterComponent } from './ELEMENTOS/footer/footer.component';
import { IndexComponent } from './COMPONENTES/index/index.component';
import { BiografiaComponent } from './COMPONENTES/biografia/biografia.component';
import { GaleriaComponent } from './COMPONENTES/galeria/galeria.component';
import { DesarrolloComponent } from './COMPONENTES/desarrollo/desarrollo.component';
import { ExposicionesComponent } from './COMPONENTES/exposiciones/exposiciones.component';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FormularioCorreoComponent } from './ELEMENTOS/formulario-correo/formulario-correo.component';


import { ReactiveFormsModule } from '@angular/forms';  
import { ContactService } from './SERVICIOS/contact.service';
import { CorreoEnviadoComponent } from './ELEMENTOS/correo-enviado/correo-enviado.component';
import { IndexAdminComponent } from './ADMIN/index-admin/index-admin.component';
import { AdminGalleryComponent } from './ADMIN/GALLERY/admin-gallery/admin-gallery.component';
import { AddCuadroComponent } from './ADMIN/GALLERY/add-cuadro/add-cuadro.component';
import { EditCuadroComponent } from './ADMIN/GALLERY/edit-cuadro/edit-cuadro.component';
import { CorreoNoEnviadoComponent } from './ELEMENTOS/correo-no-enviado/correo-no-enviado.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AdminDesarrolloComponent } from './ADMIN/DESARROLLO/admin-desarrollo/admin-desarrollo.component';
import { AddDesarrolloComponent } from './ADMIN/DESARROLLO/add-desarrollo/add-desarrollo.component';
import { EditDesarrolloComponent } from './ADMIN/DESARROLLO/edit-desarrollo/edit-desarrollo.component';
import { AdminExposicionesComponent } from './ADMIN/EXPOSICIONES/admin-exposiciones/admin-exposiciones.component';
import { AddExposicionComponent } from './ADMIN/EXPOSICIONES/add-exposicion/add-exposicion.component';
import { EditExposicionComponent } from './ADMIN/EXPOSICIONES/edit-exposicion/edit-exposicion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    BiografiaComponent,
    GaleriaComponent,
    DesarrolloComponent,
    ExposicionesComponent,
    FormularioCorreoComponent,
    CorreoEnviadoComponent,
    IndexAdminComponent,
    AdminGalleryComponent,
    AddCuadroComponent,
    EditCuadroComponent,
    CorreoNoEnviadoComponent,
    AdminDesarrolloComponent,
    AddDesarrolloComponent,
    EditDesarrolloComponent,
    AdminExposicionesComponent,
    AddExposicionComponent,
    EditExposicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
