class Persona {


    //En los metodos propiedades, etc que sean estaticos no se puede hacer referencia a las instancias
    //solo directamente al objeto porque se supone que no necesitaria de ninguna instancia

    static _conteo = 0;

    static get getConteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Hola a todos soy un metodo estático');
    }

    nombre= '';
    codigo= '';
    frase= '';
    comida= '';

    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo += 1;
        // Persona._conteo ++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        console.log(`La comida favorita de ${this.codigo} es: ${this.comida}`);
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, y mi codigo es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const batman = new Persona('Bruce','BAT','NO jodas robin!');
const spider = new Persona('Peter','Spiderman','Un gran poder conlleva una gran responsabilidad!');

batman.miFrase();

batman.setComidaFavorita = 'El pie de cereza de su mayordomo';
batman.getComidaFavorita;
console.log(batman)
console.log(spider.miFrase());

console.log('Numero de personajes: ', Persona.getConteo);
Persona.mensaje();

Persona.PropiedadExterna = 'Hola mundo';

console.log(Persona);
console.log(Persona.PropiedadExterna);