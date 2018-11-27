import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nombre: string;
  public email: string;
  public password: string;
  public logged;

  constructor ( public userSv: UsuarioService, public router: Router ) { }

  ngOnInit() {
  }

  probarLogin() {
    this.userSv.login(this.nombre, this.email, this.password)
    .then((ok) => {
      console.log('Ingresó correctamente');
      this.router.navigateByUrl('perfil');
    });
  }

}
