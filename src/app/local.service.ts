import { Injectable } from '@angular/core';
import { Cliente } from './cliente/Cliente';
import { Usuario } from './usuario/Usuario';
@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}
  public guardarUsuario(key: string, value: Usuario): boolean {
    //key->correo

    localStorage.setItem(key, JSON.stringify(value));

    return true;
  }

  public getUsuario(key:string){

    return localStorage.getItem(key);

  }
  public guardarClientes(key: string, value: Cliente[]) {
    //key->correo
    localStorage.setItem(key, JSON.stringify(value));
  }
  public getClientes(key: string) {
    return localStorage.getItem(key);
  }
  //let perfil = JSON.parse(localStorage.getItem('perfil'))
}
//          [routerLink]="['/vercliente', this.clienteNuevo]"
