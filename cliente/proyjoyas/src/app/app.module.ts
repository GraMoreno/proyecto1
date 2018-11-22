import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { ConsultasComponent } from './Components/consultas/consultas.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
