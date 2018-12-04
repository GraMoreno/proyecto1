export class Producto {
    constructor(_id='', codigo='', nombre='', descripcion='', precio=0,categoria='', imagen=''){
        this._id= _id;
        this.codigo = codigo;
        this.nombre= nombre;
        this.descripcion= descripcion;
        this.precio= precio;
        this.categoria= categoria;
        this.imagen= imagen;
    }
    _id: String;
    codigo: String;
    nombre: String;
    descripcion: String;
    precio: Number;
    categoria: String;
    imagen: String;
}
