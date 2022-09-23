import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output()
  studentEvent:EventEmitter<Persona> = new EventEmitter<Persona>();
  student:Persona;
  constructor() { 
    this.student = {nombre:"",
    apellido:"",
    dni:0,
    telefono:"",
    legajo:0,
    sumaDeNotas:0
   };
  }

  ngOnInit(): void {
  }
  sendStudent():void{
    this.studentEvent.emit(this.student);
    this.cleanInputs();
  }
  cleanInputs():void{
    this.student = { 
      nombre:"",
      apellido:"",
      dni:0,
      telefono:"",
      legajo:0,
      sumaDeNotas:0
     };
  }
  
}
