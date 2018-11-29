export class Usuario {
    constructor(_id='', nombre='', email='', password=''){
        this._id= _id;
        this.nombre= nombre;
        this.email= email;
        this.password= password;
    }

    _id: String;
    nombre: String;
    email: String;
    password: String
    
}