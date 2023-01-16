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

  Usuario: any = "";
  Contrasena: any = "";

  guardar(){
    localStorage.setItem('USER', this.Usuario)
    localStorage.setItem('KEY', this.Contrasena )
  }
  
  Mostrar ()
  {
  localStorage.getItem ('USER')
  localStorage.getItem ('KEY')
  
  
  }

  CambioPag()
{
 if ( this.Usuario='DanielChapa' && this.Contrasena== 'cccc') {

  this.enviar.navigate([2])
  
 } else {

  this.enviar.navigate(['5'])
 }
 

}



}
