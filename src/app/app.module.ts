
// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';


// Services
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';
import { MascotasService } from './mascotas/mascotas.service';
import { MascotasListarComponent } from './mascotas/mascotas-listar/mascotas-listar.component';
import { MascotasAgregarComponent } from './mascotas/mascotas-agregar/mascotas-agregar.component' ;
import { MascotasEditarComponent } from './mascotas/mascotas-editar/mascotas-editar.component';
import { MascotasAdoptarComponent } from './mascotas/mascotas-adoptar/mascotas-adoptar.component';



@NgModule({
  // servicios
  declarations: [
    AppComponent,
    InicioComponent,
    MascotasListarComponent,
    MascotasAgregarComponent,
    MascotasEditarComponent,
    MascotasAdoptarComponent

  ],
  // modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module


  ],
  providers: [MascotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
