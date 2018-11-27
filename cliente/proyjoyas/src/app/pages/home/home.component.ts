import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userSv: UsuarioService, public router: Router ) { }


  ngOnInit() {
  }
get logged(){
  return  this.userSv.logueado;
}

cerrarSesion(){
  this.userSv.cerrarSesion();
  this.router.navigateByUrl('inicio');
}

}
