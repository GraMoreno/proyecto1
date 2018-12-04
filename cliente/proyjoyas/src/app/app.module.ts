import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { ConsultasComponent } from './Components/consultas/consultas.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CrearUserComponent } from './pages/crear-user/crear-user.component';


import { Routes, CanActivate, RouterModule } from '@angular/router';
import { UsuarioService} from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VerificarLogueadoService } from './services/verificar-logueado.service';
import { VerproductosComponent } from './pages/verproductos/verproductos.component';
import { ProductoComponent } from './pages/producto/producto.component';

export const RUTAS: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'crearusuario', component: CrearUserComponent },
  { path: 'verproducto', component:VerproductosComponent},
  { path: 'productos', component:ProductoComponent},
  //{ path: 'perfil', component: MiPerfilComponent, canActivate: [VerificarLogueadoService] },
  //{ path: 'publicar', component: AgregarEntradaComponent, canActivate: [VerificarLogueadoService] },
  //{ path: 'editar', component: EditarEntradaComponent, canActivate: [VerificarLogueadoService] },
  { path: '**', redirectTo: '' },
];


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ConsultasComponent,
    HomeComponent,
    LoginComponent,
    CrearUserComponent,
    VerproductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS),
    HttpClientModule,
    FormsModule
  ],
  providers: [VerificarLogueadoService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
