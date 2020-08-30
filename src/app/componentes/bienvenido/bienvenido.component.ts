import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {


  title = 'practicaLab4';
  edad1;
  edad2;
  promedio = 0;
  suma = 0;
  constructor() { }

  ngOnInit(): void {
  }

  CalcularPromedio()
  {
    this.suma = (parseFloat(this.edad1.toString()) + parseFloat(this.edad2.toString()));
    this.promedio = this.suma /2;
  }
}
