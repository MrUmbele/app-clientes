import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/local.service';
import { Usuario } from '../Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  pass:string = "";
  existeError:boolean = false;
  constructor(
    private localService:LocalService,
    private router:Router

    ) { }

  ngOnInit(): void {
  }

  login():void{
    //1. comprobar con la key (correo) si está registrado
    let user:Usuario
    let string = this.localService.getUsuario(this.email)
    let jsonCliente
    if (string!=null){
        jsonCliente=JSON.parse(string)
        user=Object.assign(new Usuario(), jsonCliente)
        if (user.pass==this.pass && user.email==this.email){
          this.router.navigate(['/clientes']);
        }else{
          this.existeError=true
        }
    }
  }



}
