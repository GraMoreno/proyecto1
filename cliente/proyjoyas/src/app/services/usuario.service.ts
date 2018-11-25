import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  public logueado = false;
  constructor(public http: HttpClient) {

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

  async login(email, password) {
    return new Promise((resolve, reject) => {
      const body = {
        email,
        password
      };
      this.http.post('http://localhost:3000/usuarios/login', body).toPromise()
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