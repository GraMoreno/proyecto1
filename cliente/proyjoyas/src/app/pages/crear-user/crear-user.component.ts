import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent implements OnInit {
  //user: Array <any>;
  public nombre: string;
  public email: string;
  public password: string;

  constructor(private userSv: UsuarioService, public router: Router) { }

  ngOnInit() {
  }
  onRegister(){
//    this.userSv.getUserDetails()
//    .then((ok)=>{
//      console.log ("ingreso un usuario");
//      this.router.navigateByUrl('perfil');
//    })
  }
}
