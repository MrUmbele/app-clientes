import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cliente } from '../Cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styles: [],
})
export class EditarClienteComponent implements OnInit {
  nuevo: Cliente = new Cliente();
  listaClientes:Cliente[]=this.servicio.getClientes();
  existeUser:boolean=false
  constructor(
    private ruta: ActivatedRoute,
    private servicio: ClienteService,
    private router: Router
  ) {
    this.ruta.params.subscribe((params: Params) => {
      this.nuevo.telefono = params.telefono;
    });
    console.log(this.nuevo.telefono);
  }

  ngOnInit(): void {
    this.ruta.params.subscribe((params: Params) => {
      this.nuevo.telefono = params.telefono;

    });
    if(this.nuevo.telefono!=0){
      this.existeUser=true
      let clientAux:Cliente[]= this.listaClientes.filter(cliente => cliente.telefono==this.nuevo.telefono)
      this.nuevo.apellido=clientAux[0].apellido
      this.nuevo.email=clientAux[0].email
      this.nuevo.nombre=clientAux[0].nombre
    }

  }

  agregar(): void {
    this.listaClientes = this.listaClientes.filter(cliente => cliente.telefono !=this.nuevo.telefono);
    this.listaClientes.push(this.nuevo);
    this.servicio.guardarClientes(this.listaClientes);
    this.router.navigate(['/clientes']);
  }
}
