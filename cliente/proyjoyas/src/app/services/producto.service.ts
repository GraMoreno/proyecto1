import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoComponent } from '../../app/pages/producto/producto.component'

import { Producto } from '../models/producto.model';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  selectProducto: Producto;
  //para guardar productos en arreglo vacio
  productos : Producto[];
  readonly baseURL ='http://localhost:3000/productos';

  constructor(public http: HttpClient) { 
    this.selectProducto = new Producto();
  }

  //para enviar los datos de productos agregados al servidor
  postProducto(prod: Producto){
    return this.http.post(this.baseURL,prod).toPromise();
  }
//para obtener los datos
  getproductoList(){
    return this.http.get(this.baseURL).toPromise();
  }
//para actulizar un producto
putProducto(prod: Producto){
  return this.http.put(this.baseURL + `/${prod._id}`, prod).toPromise();
}
// eliminar un producto
deleteProducto(_id: String){
    return this.http.delete(this.baseURL + `/${_id}`).toPromise();
}

}

