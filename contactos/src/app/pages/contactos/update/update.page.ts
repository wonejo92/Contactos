import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  constructor(private router:Router, private activeRoute:ActivatedRoute) { }
   nombrec="";
   telefonoC="";
   mailC="";

  ngOnInit() {
    this.nombrec=this.activeRoute.snapshot.paramMap.get('nombre');
    this.telefonoC=this.activeRoute.snapshot.paramMap.get('telefono');
    this.mailC=this.activeRoute.snapshot.paramMap.get('mail');
    console.log("Llego los parametros y son :" + this.nombrec,this.telefonoC,this.mailC)

  }
  save(){
    this.router.navigate(['lista'])
  } 

}
