import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';

const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuario', component: ControlEntidadComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
