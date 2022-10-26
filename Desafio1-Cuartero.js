class Usuario{
    constructor(nombreIngresado, apellidoIngresado, librosIngresados=[], mascotasIngresadas=[]){
        this.nombre = nombreIngresado;
        this.apellido = apellidoIngresado;
        this.libros = librosIngresados;
        this.mascotas = mascotasIngresadas;
    }

    getFullName(){
        return `Soy ${this.nombre} ${this.apellido}.`
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
        return 
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor});
        return
    }
    getBookNames(){
       return this.libros.map(libro=>libro.nombre);
    }
}

let user1 = new Usuario("César", "Pérez")
console.log(user1.getFullName()); 
user1.addMascota("Firulais");
console.log(user1.countMascotas()); 
user1.addBook("Harry Potter","J.K.Rowling");
user1.addBook("El señor de las moscas","William Golding");
console.log(user1.getBookNames());