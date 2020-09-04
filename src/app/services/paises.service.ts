import { Injectable } from '@angular/core';
import { Usuario } from '../Model/usuario';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  usuarioPais: string = "servicio Funcionando";
  constructor() { }
}
