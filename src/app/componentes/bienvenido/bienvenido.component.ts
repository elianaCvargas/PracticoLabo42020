import { Component, OnInit, Input } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
