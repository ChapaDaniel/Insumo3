import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
  @Input() Pasar: any = " ";
  @Input() Pasar1: any = " ";
  @Input() Pasar2: any = " ";
  @Input() Pasar3: any = " ";
  @Input() Pasar4: any = " ";
@Input() Pasar5: any = " ";

mandar(){
  localStorage.setItem('0', this.Pasar)
  localStorage.setItem('1', this.Pasar1)
  localStorage.setItem('2', this.Pasar2)
  localStorage.setItem('3', this.Pasar3)
  localStorage.setItem('4', this.Pasar4)
  localStorage.setItem('5', this.Pasar5)

}
ngOnInit () : void {
  
  
}

mostrar(){
  localStorage.getItem('0')
  localStorage.getItem('1')
  localStorage.getItem('2')
  localStorage.getItem('3')
  localStorage.getItem('4')
  localStorage.getItem('5')


}









  //-------------------------------------------

  constructor( private router : Router){

  }

  factura(){
    this.router.navigate ([2])
  }

}
