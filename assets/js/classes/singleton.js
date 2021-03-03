class Singleton {

    static instancia; //undefined
    nombre = '';

    constructor( nombre = '' ){

        if ( !!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;
    }
}

const instancia1 = new Singleton('Iron Man');
const instancia2 = new Singleton('Spider Man');

console.log(`Nombre en la instancia 1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia 2 es: ${instancia2.nombre}`);