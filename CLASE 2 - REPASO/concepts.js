
// Asincronicas
// Funcion recibe como parametro otra funcion : CallBack
// setInterval(function() {
//     console.log("Holis");
// },5000)

// setInterval(()=> {
//     console.log("Chauchis");
// },500)

// Javascript sincronico
// Promesas -> async await

async function sumarNumeros(a,b) {
    // await -> la tarea tiene que estar resuelta para continuar con el programa
    let result = await a + b; // peticion de red // generar un pdf // consulta en MP
    return result;
}

async function mostrarSuma() {
    let r = await sumarNumeros(18,25);
    console.log(r);
}

// let r = sumarNumeros(18,25); // tarda 
// console.log(r) // 43 -> Promise <{pending}
// // mostrarSuma(r); 
// mostrarSuma()
// spread
const objUser = {
    nombre : 'franco',
    apellido : 'di leo',
    edad : 26
}

const objDocente = {
    cursos : ['Programador web avanzado',
    'Programador web inicial',
    'IoT',
    'Introduccion a la programacion'
  ],
    exp : '4 años',
    nombre : 'otro nombre'
}

const superObjeto = {
    ...objUser,
    ...objDocente
}

console.log(superObjeto)