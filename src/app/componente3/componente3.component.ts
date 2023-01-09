import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {

  constructor( private router : Router){

  }

  factura(){
    this.router.navigate ([2])
  }

}
