import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/Model/usuario';


@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  usuariosRecibidos: Usuario[] = [];
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {

  }

  cargarUsuarios()
  {
    this.usuarioService.getUsuarios().subscribe((data: Usuario [] )=> {
      this.usuariosRecibidos = data;
    });
  }

}
