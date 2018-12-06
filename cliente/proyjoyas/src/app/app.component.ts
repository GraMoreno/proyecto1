import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioService} from '.././app/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//export class AppComponent {
//  title = 'proyjoyas';
//}
export class AppComponent {
//categorias;
  constructor(public userSv: UsuarioService, public router: Router) {}
  //constructor(){
   // this.categorias = [
    //  {
     //   id: "asddasdow1292190",
      //  nombre: "collares",
     // },
     // {
      //  id:2,
      //  nombre: "anillos",
     // },
     // {
     //   id:3,
     //   nombre: "pendientes",
     // },

   // ]
  //}
  title = 'proyjoyas';
  get logged() {
    return this.userSv.logueado;
  }

  cerrarSesion() {
    this.userSv.cerrarSesion();
    this.router.navigateByUrl('inicio');
  }

}


