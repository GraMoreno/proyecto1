import { Injectable } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerificarLogueadoService implements CanActivate {

  constructor( public router : Router, public userSv : UsuarioService) { }
  CanActivate(): Boolean {
    console.log( 'se verifico la ruta');
    if (!this.userSv.logueado){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
