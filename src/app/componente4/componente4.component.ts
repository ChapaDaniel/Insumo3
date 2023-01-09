import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component {

  constructor( private cambiar : Router){

  }

  Volver(){
    this.cambiar.navigate ([2])
  }

}
