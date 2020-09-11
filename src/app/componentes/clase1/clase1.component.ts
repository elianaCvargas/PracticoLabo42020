import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-clase1',
  templateUrl: './clase1.component.html',
  styleUrls: ['./clase1.component.css']
})
export class Clase1Component implements OnInit {

  title = 'practicaLab4';
  edad1;
  edad2;
  promedio = 0;
  suma = 0;
  usuario = "";
  miVariableaPasaraotrocomp;
  constructor(private paisesServ: PaisesService) { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem("Usuario");
    console.log(this.paisesServ.usuarioPais);
  }


  CalcularPromedio()
  {
    this.suma = (parseFloat(this.edad1.toString()) + parseFloat(this.edad2.toString()));
    this.promedio = this.suma /2;
  }

}
