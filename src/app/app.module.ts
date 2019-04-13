import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

//Servicos 

import { EquipoService } from './equipo.service';
import { EquipoComponent } from './equipo/equipo.component'

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '', component: InicioComponent , pathMatch: 'full' },
  { path: '**', redirectTo: '/' , pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgclassComponent,
    NgforComponent,
    EncabezadoComponent,
    FooterComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
