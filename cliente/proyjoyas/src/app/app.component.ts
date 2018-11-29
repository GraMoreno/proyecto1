import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyjoyas';
}

{
  id: 1
  nombre: "oro"
}
{
  id: 2 
  nombre: "plata"
}
{
 id: 3
 nombre: "cobre"
}



]

<select [(ngmodel)]="categoria" >

  <Option * ngfor="let categoria of categorias"[value] = "categoria.id" >
    {{ categoria.nombre }}

</Option>

  < /select>
