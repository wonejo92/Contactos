import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public contactos = [
    { Nombre: 'Juan Andrade', Telefono: '0991463702', Mail: 'Jandrade@gmail.com' },
    { Nombre: 'Pedro Calle', Telefono: '0993296123', Mail: 'Pcalle@gmail.com' },
    { Nombre: 'Vanesa Leon', Telefono: '0993296364', Mail: 'Vleon@gmail.com' },
    { Nombre: 'Maria Mena', Telefono: '0986411830', Mail: 'Mmena@gmail.com' },
  ];

  add(){
    this.router.navigate(['crear'])
  }  
  
  showInfoContact(nombre:String,telefono:String,mail:String){
    console.log("El contacto seleccionado es" + " Nombre: " + nombre + " Telefono: " + telefono + " Mail: "+ mail)
  }
  }


