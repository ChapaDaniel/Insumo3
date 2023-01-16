import { Component,OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {

  constructor(private enviar : Router){

  }
  factura(){
    this.enviar.navigate (['6'])
    
  }
  

  Pasar: any 
  Pasar1: any 
  Pasar2: any 
  Pasar3: any 
  Pasar4: any 
  Pasar5: any 

mandar(){
  localStorage.setItem('01', this.Pasar)
  localStorage.setItem('02', this.Pasar1)
  localStorage.setItem('03', this.Pasar2)
  localStorage.setItem('04', this.Pasar3)
  localStorage.setItem('05', this.Pasar4)
  localStorage.setItem('06', this.Pasar5)
  this.factura()

}


ngOnInit () : void {
 
  
}


}
