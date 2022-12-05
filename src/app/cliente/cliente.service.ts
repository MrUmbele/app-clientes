import { Injectable } from '@angular/core';
import { LocalService } from '../local.service';
import { Cliente } from './Cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public get localService(): LocalService {
    return this._localService;
  }
  public set localService(value: LocalService) {
    this._localService = value;
  }
  constructor(private _localService: LocalService) { }
  getClientes():Cliente[] {
    let clientesString=this.localService.getClientes("clientes")
    let clientes:Cliente[]=[]
    if (clientesString!=null){
      let jsonCliente = JSON.parse(clientesString)
      for (let i = 0; i < jsonCliente.length; i++) {
        let cliente=Object.assign(new Cliente(), jsonCliente[i])
        clientes.push(cliente)
      }
      //console.log(jsonCliente)
    }

    return clientes;
  }
  guardarClientes(clientes:Cliente[]){
    this._localService.guardarClientes("clientes",clientes)
  }

}
