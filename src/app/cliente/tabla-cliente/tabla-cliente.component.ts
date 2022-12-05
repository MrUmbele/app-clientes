import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-tabla-cliente',
  templateUrl: './tabla-cliente.component.html',
  styles: [
  ]
})
export class TablaClienteComponent implements OnInit {
  clientes:Cliente[]=[]
  clienteNuevo:Cliente
  public get service(): ClienteService {
    return this._service;
  }
  public set service(value: ClienteService) {
    this._service = value;
  }
  constructor(private _service: ClienteService) {
    this.clienteNuevo= new Cliente()
  }

  ngOnInit(): void {
    this.clientes=this._service.getClientes()

  }
  deleteClient(telefono:number){
    let fixedArray:Cliente[]  = this.clientes.filter(cliente => cliente.telefono !=telefono);
    this.service.guardarClientes(fixedArray)
    this.clientes=this._service.getClientes()
  }
 //solo para debug
  addClient(){
    let cliente:Cliente = new Cliente()
    cliente.apellido="barboza"
    cliente.nombre="brais"
    cliente.telefono=Math.floor(Math.random() * 1000000000);
    cliente.email="brais.barboza@minsait.com"
    this.clientes.push(cliente)
    this.service.guardarClientes(this.clientes)
  }
}
