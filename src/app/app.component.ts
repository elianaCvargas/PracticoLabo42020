import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaLab4';
  edad1 = 0;
  edad2 = 0;
  promedio = 0;

  CalcularPromedio()
  {
    this.promedio = (parseInt(this.edad1.toString()) + parseInt(this.edad2.toString())) / 2;
  }

}
