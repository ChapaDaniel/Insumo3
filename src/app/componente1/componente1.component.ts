import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Componente2Component } from '../componente2/componente2.component';
import { UserNoFoundComponent } from '../user-no-found/user-no-found.component';
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})

export class Componente1Component implements OnInit {

  constructor ( private router: Router){

  }

  ngOnInit(){
    localStorage.clear();
    localStorage.setItem('UsuarioD', "DanielChapa")
    localStorage.setItem('passwdD',  "ccccc")
  }
//-----------------------variables-------------
usuario:any
password:any
UsuarioD:any
passwdD:any
//----------------------------------------------
//------------Metodo-----------------


almacenar(){
  this.UsuarioD=localStorage.getItem('UsuarioD')
  this.passwdD=localStorage.getItem('passwdD')
  this.CambioPag();

}

  CambioPag()

{

  if(this.usuario==this.UsuarioD || this.password==this.passwdD){
    this.router.navigate([2])

  }else{
    this.router.navigate([6])
  }

}



}
