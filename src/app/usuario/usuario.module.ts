import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioService } from './usuario.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocalService } from '../local.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  exports:[
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    LocalService,
    UsuarioService
  ]
})
export class UsuarioModule { }
