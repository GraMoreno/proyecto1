import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent implements OnInit {
  usuario: Object;

  constructor(private userSv: UsuarioService, public router: Router) { }

  ngOnInit() {
  }
  resetform(form? : NgForm){
   if(form != null){
    form.reset();
    this.userSv.selectedUser = new Usuario();
    //this.usuario = {
    //  nombre : '',
     // email :'',
     // password :'',
    //}

   }
  }

  addUsuario (form: NgForm){
   console.log(form.value);
   //this.userSv.postUser(form.value)
   //.subscribe( res=>{
   // console.log (form.value)
   //});

  }
  
}
