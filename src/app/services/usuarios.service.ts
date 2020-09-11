import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from '../Model/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = "https://api.mocki.io/v1/570c5e5c";
  constructor(private http: HttpClient) {}

  public getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }


}

