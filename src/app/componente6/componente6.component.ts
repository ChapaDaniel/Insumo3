import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


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

input(): void{
 
}
ngOnInit (): void {
  this.resultado=localStorage.getItem('01')
  this.resultado1=localStorage.getItem('02')
  this.resultado2=localStorage.getItem('03')
  this.resultado3=localStorage.getItem('04')
  this.resultado4=localStorage.getItem('05')
  this.resultado5=localStorage.getItem('06')

}


}
