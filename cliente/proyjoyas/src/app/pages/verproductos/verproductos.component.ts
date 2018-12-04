import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verproductos',
  templateUrl: './verproductos.component.html',
  styleUrls: ['./verproductos.component.css']
})
export class VerproductosComponent implements OnInit {
  categorias;

  constructor() {}

  ngOnInit() {
    this.categorias = [
      {
        id: "1",
        nombre: "collares",
      },
      {
        id:2,
        nombre: "anillos",
      },
     {
        id:3,
       nombre: "aros",
     },
     {
      id:4,
     nombre: "pulseras",
     },

    ]
  }

}
