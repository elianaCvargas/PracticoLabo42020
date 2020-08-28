import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase1',
  templateUrl: './clase1.component.html',
  styleUrls: ['./clase1.component.css']
})
export class Clase1Component implements OnInit {

  public ejemplo = 'Hola Mundo';
  public ejemplo2 = 'Hola Mundo';
  constructor() { }

  ngOnInit() {
  }

  PruebaClick() {
    this.ejemplo2 = 'Ejecutamos el evento!!!';
  }



}
