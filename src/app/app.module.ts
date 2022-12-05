import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { TablaClienteComponent } from './cliente/tabla-cliente/tabla-cliente.component';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LocalService } from './local.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    ClienteModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports:[
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
