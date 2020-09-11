import { Component, OnInit } from '@angular/core';
import {
  Usuario
} from '../../Model/usuario';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 usuariodto: Usuario;
  username;
  password;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login()
  {
    // this.usuariodto = new Usuario;

    //   if( this.username == "carla.vargas@gmail.com" && this.password ==  "asd123")
    //   {
    //     this.usuariodto.Nombre = this.username;
    //     this.usuariodto.clave = this.password;
    //     localStorage.setItem('Usuario', this.usuariodto.nombre);
    //     this.router.navigate(['']);
    //   }
  }
}
