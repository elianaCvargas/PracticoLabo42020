import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { RouterModule } from '@angular/router';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
