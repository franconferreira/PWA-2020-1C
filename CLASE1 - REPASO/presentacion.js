// JSON : Javascript Object notation (formato ligero de texto para intercambio de datos) 

// let alumnosCurso = ['Daniel','Matias','Guido','Flavia','Gabi'];
// let edadesAlumnosCurso = [26,24,27,27,56];

// // console.log("Hola soy" + alumnosCurso[0] + " y tengo "+ edadesAlumnosCurso[0]);
// // template string
// console.log(`Hola, soy ${alumnosCurso[0]} y tengo ${edadesAlumnosCurso[0]} años`);

// // propiedad : valor
// // MongoDB
// let objetoCurso = {
//     nombre : 'Programador web avanzado',
//     turno : 'Mañana',
//     alumnos : [
//         {nombre : 'Daniel', edad : 26, mail : 'dani26@gmail.com'},
//         {nombre : 'matias', edad: 24, tel : '11141231231'}
//     ]
// }

// console.log(`${objetoCurso.alumnos[0].mail}`)

// Objeto literal
let franco = {

    nombre : 'franco',
    apellido : ' di leo',
    jobs : ['Developer', 'Chaak'],
    jean : false,
    academico : 'Ing. Mecánica',
    company : [
        {nombre :'chaak', edad : '2 años', tareas : 'Sistema de cultivo'},
        {nombre : 'solwin', edad : '2 años', tareas : 'Desarrollo de software'}
    ],
    mascotas : [
        {marca : 'acme',nombre :'amazonas', edad : '6 meses', type :'perro', estado : true},
        {marca : 'acme', nombre : 'manolo', edad : null, type:'tortuga', estado : false}

    ],
    proyecto : 'DESCRIPCION'

}

console.log(`${franco.mascotas[1].type}`) // tortuga

