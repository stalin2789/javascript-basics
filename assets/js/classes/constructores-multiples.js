class Person {

    static porObjeto( {nombre, apellido, pais} ){

        return new Person(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Janina',
      apellido1 = 'Gutierrez',
      pais = 'Ecuador';

const stalin = {
    nombre: 'Stalin',
    apellido: 'Moran',
    pais: 'Ecuador'
}

const persona1 = new Person(nombre1, apellido1, pais);
const persona2 = Person.porObjeto(stalin);

persona1.getInfo();
persona2.getInfo();