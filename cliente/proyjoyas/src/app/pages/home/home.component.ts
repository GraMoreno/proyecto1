import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {  ActivatedRoute } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public id;

  constructor(public userSv: UsuarioService, public router: Router , public route: ActivatedRoute, ) { }


  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.route.snapshot)
  }

}
