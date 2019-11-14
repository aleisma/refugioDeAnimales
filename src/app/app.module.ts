import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { MascotasListarComponent } from './mascotas/mascotas-listar/mascotas-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { MascotasService } from './mascotas/mascotas.service';
import { MascotasAgregarComponent } from './mascotas/mascotas-agregar/mascotas-agregar.component' ;
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MascotasEditarComponent } from './mascotas/mascotas-editar/mascotas-editar.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@NgModule({
  // servicios
  declarations: [
    AppComponent,
    InicioComponent,
    MascotasListarComponent,
    MascotasAgregarComponent,
    MascotasEditarComponent

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
