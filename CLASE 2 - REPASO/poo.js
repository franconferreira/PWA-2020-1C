// representación del mundo dentro de la programación
// clase : Molde o plantilla para crear "algo"

// lineal -> empezamos a programar
// funciones -> bloque de codigo que se ejecuta cuando se llama
// POO -> Angular, React, Python, Mongo

// Atributos / Propiedades
// Metodos (funciones)

// function funcionX(p1,p2,p3,p4,p5){}
// vector n componentes
function funcionY(...args){}

class Persona {
    // atributos -> variables
    // metodos -> funciones
    // Metodos de acceso (getters y setters)
    // getters : Obtener un valor de una propiedad
    // setter : Insetar / Setear un valor especifico en una propiedad
    // Método especial del paradigma que se ejecuta sin ser llamado

    constructor(object) {
        // Patron creacional para crear el objeto. Se ejecuta cuando se instancia la clase
        this.nombre = object.nombre || 'no definido';
        this.apellido = object.apellido || 'no definido';
        this.dni = object.dni || 'No definido';
    }
    // Metodos especiales de la clase (metodos de acceso)
    get getName() {
        return this.nombre;
    }

    get getDni() {
        return this.dni;
    }
    get getLastname() {
        return this.apellido;
    }

    set music(m) {
        this.musica = m;
    }
    get music() {
        return this.musica || 'Indefinido'
    }

    get getCurrentHour() {
        // date = new Date();
        // date.getHours()
        return new Date().getHours();
    }
    dormir() {
        console.log(`Es hora de dormir, son las ${this.getCurrentHour} hs`);
    }

    comer() {
        console.log(`Es hora de comer, son las ${this.getCurrentHour} hs.`);
    }

}
// instanciando un objeto (franco) de la clase Persona
let obj = {
    nombre : 'franco',
    apellido : 'Di Leo'
}

// Herencia -> Una clase hereda las caracteristicas y metodos de otra clase distinta
class Docente extends Persona {
    // Javascript -> No admite herencia multiple (interfaz)
    // cursos que da el docente
    constructor(objPersona,cursos) {
        // console.log("Se va a instanciar la clase Persona")
        super(objPersona); // instancia el constructor de la clase padre (Persona)
        // Definir la propiedad cursos y le pasamos el objetoCursos cuando instanciamos la clase Docente
        // console.log("Se va a instanciar la clase propia")
        this.cursos = cursos;
        // console.log(`El docente da estos cursos :${this.cursos} `);
    }

    darClase(hour) {
        console.log(hour);
        hour >= 9 && hour <=12 ? (console.log("Es hora de dar clase")) : console.log("No es hora de dar clase");

        
    }

}

let objP = {
    nombre : 'franco',
    apellido : 'di leo',
    dni : '38151683'
}
let objC = [
  'Programador web avanzado',
  'Programador web inicial',
  'IoT',
  'Introduccion a la programacion'
]
franco = new Docente(objP, objC);
console.log(franco.getName);
franco.darClase(new Date().getHours())
// franco.dormir()
// franco.music = ['Jazz','Tango'];
// console.log(franco.getName)
// console.log(franco.getLastname)
// console.log(franco.getDni)
// console.log(franco.music)
// franco.comer()
// franco.dormir()
