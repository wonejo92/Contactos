import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private router:Router,public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  nombre="";

  public contactos = [
    { Nombre: 'Juan Andrade', Telefono: '0991463702', Mail: 'Jandrade@gmail.com' },
    { Nombre: 'Pedro Calle', Telefono: '0993296123', Mail: 'Pcalle@gmail.com' },
    { Nombre: 'Vanesa Leon', Telefono: '0993296364', Mail: 'Vleon@gmail.com' },
    { Nombre: 'Maria Mena', Telefono: '0986411830', Mail: 'Mmena@gmail.com' },
  ];

  add(){
    this.router.navigate(['crear'])
  } 
  update(nombre:string,telefono:string,mail:string){
    this.router.navigate(['update',nombre,telefono,mail])
  }
  
  showInfoContact(nombre:String,telefono:String,mail:String){
    console.log("El contacto seleccionado es" + " Nombre: " + nombre + " Telefono: " + telefono + " Mail: "+ mail)
  }
  async showMenu(nombre:string) {
    const actionSheet = await this.actionSheetController.create({
      header: nombre,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Call',
        icon: 'call',
        handler: () => {
          console.log('Play clicked');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}


