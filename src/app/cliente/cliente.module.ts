import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { TablaClienteComponent } from './tabla-cliente/tabla-cliente.component';
import { ClienteService } from './cliente.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LocalService } from '../local.service';



@NgModule({
  declarations: [
    EditarClienteComponent,
    TablaClienteComponent
  ],
  exports:[
    EditarClienteComponent,
    TablaClienteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    ClienteService,
    LocalService
  ]
})
export class ClienteModule { }
