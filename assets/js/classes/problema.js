function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 18);
const mario = new Persona('Mario', 20);
console.log(maria);
maria.imprimir();
mario.imprimir();