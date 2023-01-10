import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  arrayPersona = [
    {
    'nombre': 'Luis',
    'apellido': 'Llanos',
    'carrera': 'Ing. Sistemas'
  },
  {
    'nombre': 'Jose',
    'apellido': 'Perez',
    'carrera': 'Ing. Redes'
  },
  {
    'nombre': 'Pepe',
    'apellido': 'López',
    'carrera': 'Ing. Electrónico'
  }
]

}
