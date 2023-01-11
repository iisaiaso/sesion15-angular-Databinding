import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  nombre!: string
  apellido!: string
  carrera!: string

  arrayPersona: any[] = [
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

  savePerson() {
    this.arrayPersona.push(new Persona(this.nombre, this.apellido, this.carrera))
  }
  deletePerson(n: string) {
    if (confirm("¿ Desea eliminar el Registro ?")) {
      // this.arrayPersona.splice(n, 1);
      this.arrayPersona = this.arrayPersona.filter(function (x) {
        return x.nombre !== n;
      });
    }
  }

}
export class Persona {
  constructor(public nombre: string, public apellido: string, public carrera: string) {
  }
}
