import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:"inicio",component:HomeComponent},
  {path:"registro",component:RegistroComponent},
  {path:"ingresar",component:LoginComponent},
  {path:"productos/:id",component:DetalleComponent},
  {path:"",component:BienvenidaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
