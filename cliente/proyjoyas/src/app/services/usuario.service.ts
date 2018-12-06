import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  public logueado = false;
  selectedUser: Usuario;
  usuarios: Usuario[];

  readonly URL_API= 'http://localhost:3000/api/usuarios';

  constructor(public http: HttpClient) {
   this.selectedUser = new Usuario();
    
    const token = localStorage.getItem('token');
    if (token) {
      this.logueado = true;
    }
  }

  cambiarEstado() {
    this.logueado = !this.logueado;
  }

  cerrarSesion() {
    this.logueado = false;
    localStorage.clear();
  }

  getUser(){
    return this.http.get(this.URL_API);
  }
  postUser(user : Usuario){
    return this.http.post(this.URL_API, user);
  }
 
  async login(email, password) {
    return new Promise((resolve, reject) => {
      const body = {
        email,
        password
      };
      this.http.post(this.URL_API + `/login`, body).toPromise()
        .then((respuesta: { token: string }) => {
          console.log(respuesta);
          localStorage.setItem('token', respuesta.token);
          this.logueado = true;
          resolve(true);
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }

  verificarLogueado() {
    return this.logueado;
  }
}