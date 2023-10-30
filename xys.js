class Humano {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }


    getEdad() {
        return this.edad;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    toString() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
}
class Hombre extends Humano {
    SEXO = 'Hombre';

    constructor(nombre, edad) {
        super(nombre, edad);
    }

    saludar() {
        console.log(`Hola, soy ${this.SEXO} ${this.nombre}`);
    }
}

class Mujer extends Humano{
    SEXO = 'Mujer';

    constructor(nombre, edad) {
        super(nombre, edad);
    }
}

const xys = new Hombre('xys', 20);
const xys2 = new Mujer('xyssa', 22);

console.log(xys.saludar());
console.log(xys2.saludar());