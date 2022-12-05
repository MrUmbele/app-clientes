import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/local.service';
import { Usuario } from '../Usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombre:string = "";
  email:string="";
  pass:string="";

  nuevoUsuario:Usuario = new Usuario();

  constructor(private servicio:LocalService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarUsuario():void{
    this.nuevoUsuario.nombre = this.nombre;
    this.nuevoUsuario.email = this.email;
    this.nuevoUsuario.pass = this.pass;

    if(this.servicio.guardarUsuario(this.email, this.nuevoUsuario) == true){
      this.router.navigate(['/']);
    }



  }

}
