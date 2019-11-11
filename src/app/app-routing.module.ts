import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MascotasListarComponent } from './mascotas-listar/mascotas-listar.component';


const routes: Routes = [

  { path: 'inicio', component: InicioComponent},   // I created start path
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  { path: 'mascotas-listar', component: MascotasListarComponent},   // I created list pets
  { path: '', redirectTo: '/mascotas-listar', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
