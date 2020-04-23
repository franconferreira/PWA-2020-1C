console.log("Ejecutando codigo JS desde la terminal Windows :D");
// recorrer elementos
const Empleados = [
    {nombre : 'E1', apellido : 'A1', type : 'peluquero', comision : 2600},
    {nombre : 'E2', apellido : 'A2', type : 'administrativo', comision : 4000},
    {nombre : 'E3', apellido : 'A3', type : 'administrativo', comision : 4290},
    {nombre : 'E4', apellido : 'A4', type : 'peluquero', comision : 782.5},
    {nombre : 'E5', apellido : 'A5', type : 'peluquero', comision : 8000}
]

let findEmpleado = Empleados.find(empleado => empleado.type == 'administrativo');
let findEmpleados = Empleados.filter(empleado => empleado.type=='administrativo');
console.log(findEmpleado);
console.log(findEmpleados)
// let sumar = (a,b)=> {
//     return a+b;
// }

// sumar()
// Total comision
// Comision por administrativo
// comision por peluquero
// Máxima comision registrada
// const name = 'franco';
// console.log(name.length)
let totalComisiones = Empleados.map(empleado => empleado.comision).reduce((a,b)=> a+b,0);
console.log(totalComisiones)
// a : acumulado
// let sumaComisiones = totalComisiones.reduce((a,b) => (a+b),0)
// console.log(sumaComisiones)
// funcion -> sumar peluqueros
let peluqueros = Empleados.filter(empleado => empleado.type == 'peluquero').map(p => p.comision).reduce((a,b)=> a+b,0);
console.log(peluqueros);

