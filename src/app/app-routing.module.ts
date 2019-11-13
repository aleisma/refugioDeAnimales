import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MascotasListarComponent } from './mascotas/mascotas-listar/mascotas-listar.component';
import { MascotasAgregarComponent } from './mascotas/mascotas-agregar/mascotas-agregar.component';
import { MascotasEditarComponent } from './mascotas/mascotas-editar/mascotas-editar.component';

const routes: Routes = [

  { path: 'inicio', component: InicioComponent},  // I created start path

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  { path: 'mascotas-listar', component: MascotasListarComponent},

  { path: 'mascotas-agregar', component: MascotasAgregarComponent},

  { path: 'mascotas-editar/:id', component: MascotasEditarComponent },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
