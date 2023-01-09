import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {

  constructor ( private enviar: Router){

  }

  CambioPag()
{

   this.enviar.navigate([2])

}



}
