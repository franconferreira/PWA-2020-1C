const express = require('express');
const router = express.Router();
//routing

// get todos los gastos
// get gastos particulares
// post nuevo gasto
// actualizar un gasto
// delete gasto
router.post('/new',(req,res,next)=> {
    // req : Se almacena la información que llega al sv -> objeto
    // res : Respuesta que el servidor da al cliente -> objeto
    // next : Abortar (continuar el flujo del programa)
    console.log(req.body);
    let new_gasto = parseFloat(req.body.gasto);
    res.json({status : true, message : 'Gasto agregado'})
})

// subrutas de gastos.js
router.get('/:id',(req,res,next)=> {
    // :id es una variable que va a contener el numeo de gasto
    // select, find
    // console.log(req.params);
    // params : {}
    let id_gasto = req.params.id;
    console.log(`El id del gasto : ${id_gasto}`);
    // consulta el id en la base de datos
    res.json({status : true, data : {id : id_gasto, gasto : 2000, comentario : 'Helado'  }})
    // res.end()
})

router.get('/',(req,res,next)=> {
    // enviar todos los gastos al front
    // req : request (información que llega al servidor) (formulario, rutas, sesiones, files)

    // res -> (response) respuestas del servidor al cliente
    // next -> break
    console.log("Nodemon es la onda :D");
    res.json({status : true, data : {monto : 1000, fecha : new Date()}})
})

module.exports = router;