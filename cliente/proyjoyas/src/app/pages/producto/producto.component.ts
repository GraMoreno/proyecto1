import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { NgForm } from '@angular/forms';
 import {Producto} from '../../models/producto.model'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ProductoService]
})
export class ProductoComponent implements OnInit {

  constructor(private productoservice : ProductoService) { 
  
  }

  ngOnInit() {
    this.resetForm();
    this.refreshproductList();
  }
  
  resetForm(form?: NgForm){
    if (form)
    form.reset();
    this.productoservice.selectProducto= new Producto();
  }

  publicar(prod: Producto) {
    console.log(this.productoservice);
    this.productoservice.postProducto(this.productoservice.selectProducto);
  }

addProducto(form : NgForm){
  if (form.value._id) {
    this.productoservice.putProducto(form.value)
    .then((res)=>{
     // console.log(res);
     this.resetForm(form);
    this.refreshproductList();
    })
  } else {
    //console.log(form.value);
  this.productoservice.postProducto(form.value)
  .then((productoservice)=>{console.log(productoservice);
    this.resetForm(form);
    this.refreshproductList();
  })
  .catch((error)=>{
    console.log(error);
  });
  }
  
}

refreshproductList(){
  this.productoservice.getproductoList()
  .then((res)=>{this.productoservice.productos = res as Producto[];
      console.log(res);
  })
 //this.productoservice.getproductoList().subscribe((res)=>{
  //  this.productoservice.productos = res as Producto[];
  //});
}
editProducto(prod: Producto){
  this.productoservice.selectProducto= prod;
}
deleteProducto(_id: String){
  if(confirm('Esta seguro de Eliminar el producto?')){

    this.productoservice.deleteProducto(_id).then((res)=>{
    // console.log(res);
    this.refreshproductList();
    });
}

}

}
