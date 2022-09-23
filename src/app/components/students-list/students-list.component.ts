import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  studentsList: Array<Persona> = [
    {nombre:"Jeronimo",
     apellido:"Lago",
     dni:44444442,
     telefono:"22432422",
     legajo:1046,
     sumaDeNotas:30
    },{nombre:"Franco",
    apellido:"Armani",
    dni:21908765,
    telefono:"11908756",
    legajo:1047,
    sumaDeNotas:27
   },{nombre:"Roberto",
   apellido:"Carlos",
   dni:29098666,
   telefono:"11987754",
   legajo:1048,
   sumaDeNotas:18
  },{nombre:"Richard",
  apellido:"Nixon",
  dni:13449944,
  telefono:"11897654",
  legajo:1049,
  sumaDeNotas:10
 },{nombre:"Carlos",
 apellido:"Tevez",
 dni:89675643,
 telefono:"11228456",
 legajo:1050,
 sumaDeNotas:23
},{nombre:"John",
apellido:"Doe",
dni:12456789,
telefono:"13789567",
legajo:1051,
sumaDeNotas:19
}
  ];


  constructor() { }

  ngOnInit(): void {
  }

  calcularPromedio(sumaDeNotas: number):number{
    return sumaDeNotas/3;
  };

  addStudent(persona:Persona):void{
    this.studentsList.push(persona);
   
  }

}
