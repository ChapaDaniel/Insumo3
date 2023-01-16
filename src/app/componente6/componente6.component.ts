import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente6',
  templateUrl: './componente6.component.html',
  styleUrls: ['./componente6.component.css']
})
export class Componente6Component {

resultado : any
resultado1 : any
resultado2 : any
resultado3 : any
resultado4 : any
resultado5 : any

ngOnInit (): void {
  this.Mostrar()
}
Mostrar()
{
  this.resultado= localStorage.getItem('0');
  this.resultado1= localStorage.getItem('1');
  this.resultado2= localStorage.getItem('2');
  this.resultado3= localStorage.getItem('3');
  this.resultado4= localStorage.getItem('4');
  this.resultado5= localStorage.getItem('5');

}
}
